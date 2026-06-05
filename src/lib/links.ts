export const WHATSAPP_LINK = "https://wa.link/reddyanna_";
export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
