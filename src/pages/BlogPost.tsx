import { Link, useParams } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { BLOG_POSTS, getPost, type BlogBlock } from "@/data/blogPosts";
import { WHATSAPP_LINK } from "@/lib/links";
import { Calendar, Clock, User } from "lucide-react";
import NotFound from "./NotFound";

const renderBlock = (b: BlogBlock, i: number) => {
  switch (b.type) {
    case "h2":
      return <h2 key={i} className="mt-10 text-2xl font-black text-foreground md:text-3xl">{b.text}</h2>;
    case "h3":
      return <h3 key={i} className="mt-6 text-xl font-bold text-foreground">{b.text}</h3>;
    case "p":
      return <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{b.text}</p>;
    case "ul":
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-base text-muted-foreground md:text-lg">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-base text-muted-foreground md:text-lg">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-6 border-l-4 border-primary bg-card/50 p-4 text-base italic text-foreground">
          {b.text}
        </blockquote>
      );
  }
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  useSeo({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.cover,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.h1, path: `/blog/${post.slug}` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: [post.cover],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { "@type": "Organization", name: post.author, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Reddyanaa",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/android-chrome-512x512.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: post.keywords,
      },
      ...(post.faqs && post.faqs.length
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
    ],
  });

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell crumbs={[
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.h1, path: `/blog/${post.slug}` },
    ]}>
      <article className="container max-w-3xl py-12 md:py-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
          {post.category}
        </span>
        <h1 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">{post.h1}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(post.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readMinutes} min read</span>
        </div>

        <img
          src={post.cover}
          alt={post.coverAlt}
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
        />

        <div className="mt-2">{post.body.map(renderBlock)}</div>

        {/* Brand keyword block — auto-injected into every post for SEO */}
        <section className="mt-12 rounded-2xl border border-border bg-card/40 p-6">
          <h2 className="text-2xl font-black md:text-3xl">Why play on reddyanaa online platform</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you want to <strong>login reddyanaa</strong> for the first time or <strong>place a bet on reddyanaa online site</strong>, the journey is the same — fast, safe, and built for Indian players. The <strong>reddyanaa online platform</strong> is one of the safest <strong>online sports betting websites in 2026</strong>, with mobile-friendly design, instant UPI deposits and 24×7 WhatsApp support.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            New to the site? Our <strong>reddyanaa login guide step by step</strong> walks you through signup in under 2 minutes. Already a member? Use the chat to get the latest <strong>live cricket betting tips online</strong> and exclusive bonuses on the best <strong>online sports gaming platform</strong> in India.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-gold">
            Login to reddyanaa →
          </a>
        </section>

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-black md:text-3xl">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {post.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                  <summary className="cursor-pointer text-base font-semibold hover:text-primary">{f.q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <aside className="mt-12 rounded-3xl border border-primary/40 bg-gradient-card p-6 text-center shadow-glow-gold md:p-10">
          <h2 className="text-2xl font-black md:text-3xl">Get your Reddyanaa ID in 2 minutes</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Claim a 200% welcome bonus, instant UPI deposits and 24×7 WhatsApp support.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-gradient-gold px-7 py-3.5 font-bold text-primary-foreground shadow-glow-gold transition-transform hover:scale-105">
            Chat on WhatsApp →
          </a>
        </aside>
      </article>

      <section className="bg-secondary/40 py-16">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-black md:text-3xl">Keep reading</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="group rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1">
                <span className="text-xs font-semibold text-primary">{r.category}</span>
                <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-primary">{r.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default BlogPost;
