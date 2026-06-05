import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { useSeo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { BLOG_POSTS } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  useSeo({
    title: "Reddyanaa Blog — Cricket Betting Tips, Casino Guides & Strategy",
    description:
      "Expert cricket betting tips, IPL predictions, Teen Patti & Aviator strategy and honest casino reviews — all from the Reddyanaa team.",
    path: "/blog",
    keywords: "cricket betting blog, ipl tips, teen patti strategy, aviator tricks, online casino india blog",
    ogImage: `${SITE_URL}/android-chrome-512x512.png`,
    jsonLd: [
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Reddyanaa Blog",
        url: `${SITE_URL}/blog`,
        publisher: { "@type": "Organization", name: "Reddyanaa", url: SITE_URL },
        blogPost: BLOG_POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.datePublished,
          dateModified: p.dateModified,
          author: { "@type": "Organization", name: p.author },
          image: p.cover,
        })),
      },
    ],
  });

  return (
    <PageShell crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}>
      <section className="container py-12 md:py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary md:text-sm">
          Reddyanaa Blog
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] md:text-6xl">
          Cricket betting tips, casino strategy & honest reviews
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Real guides written by the Reddyanaa team — IPL predictions, Teen Patti strategy, Aviator tricks and the
          checklist for the best real-money online casinos in India.
        </p>
      </section>

      <section className="container pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-transform hover:-translate-y-1">
              <Link to={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={p.cover}
                  alt={p.coverAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-semibold text-primary">{p.category}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(p.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readMinutes} min</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-foreground">
                  <Link to={`/blog/${p.slug}`} className="hover:text-primary">{p.title}</Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="mt-4 inline-flex text-sm font-bold text-primary hover:underline">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
