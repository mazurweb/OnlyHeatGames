import Link from "next/link";

const categories = [
  { slug: "pokemon", name: "Pokemon TCG", icon: "\u26A1", desc: "Booster boxes, ETBs, singles, and sealed product" },
  { slug: "one-piece", name: "One Piece TCG", icon: "\u2694", desc: "Booster boxes, starter decks, and singles" },
  { slug: "ps5", name: "PS5 Games", icon: "\uD83C\uDFAE", desc: "New releases, pre-owned, and exclusives" },
  { slug: "ps4", name: "PS4 Games", icon: "\uD83C\uDFAF", desc: "New and pre-owned titles" },
];

export default function ShopPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Shop</h1>
      <p style={{ marginBottom: 28 }}>
        Browse trading cards, video games, and more from OnlyHeat Games.
      </p>

      <div className="g2" style={{ marginBottom: 40 }}>
        {categories.map((c) => (
          <Link key={c.slug} href={`/shop/${c.slug}`} className="guide-card c-orange">
            <div className="guide-card-icon">{c.icon}</div>
            <div className="guide-card-title">{c.name}</div>
            <div className="guide-card-desc">{c.desc}</div>
          </Link>
        ))}
      </div>

      <div className="info-box orange">
        <strong>Coming Soon:</strong> Full product listings with cart and checkout.
        For now, browse categories and contact us to order.
      </div>
    </div>
  );
}
