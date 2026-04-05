import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto" }}>
        {/* Hero */}
        <div className="hero">
          <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
            Your Local Game Store, Online
          </p>
          <h1>OnlyHeat Games</h1>
          <p>
            Trading cards, video games, and everything in between. Shop Pokemon,
            One Piece, PS5, PS4 titles and more — plus free guides for your
            favorite competitive games.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <Link href="/shop" className="btn btn-primary">
              Browse Shop
            </Link>
            <Link href="/guides" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              View Guides
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link href="/shop" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
            View All &rarr;
          </Link>
        </div>
        <div className="g4" style={{ marginBottom: 40 }}>
          <Link href="/shop/pokemon" className="cat-tab" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "20px 16px" }}>
            <span style={{ fontSize: "2rem" }}>&#9889;</span>
            <span style={{ fontWeight: 700 }}>Pokemon</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TCG &amp; Sealed</span>
          </Link>
          <Link href="/shop/one-piece" className="cat-tab" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "20px 16px" }}>
            <span style={{ fontSize: "2rem" }}>&#9877;</span>
            <span style={{ fontWeight: 700 }}>One Piece</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TCG &amp; Singles</span>
          </Link>
          <Link href="/shop/ps5" className="cat-tab" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "20px 16px" }}>
            <span style={{ fontSize: "2rem" }}>&#127918;</span>
            <span style={{ fontWeight: 700 }}>PS5 Games</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>New &amp; Pre-owned</span>
          </Link>
          <Link href="/shop/ps4" className="cat-tab" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "20px 16px" }}>
            <span style={{ fontSize: "2rem" }}>&#127919;</span>
            <span style={{ fontWeight: 700 }}>PS4 Games</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>New &amp; Pre-owned</span>
          </Link>
        </div>

        {/* Featured Products Placeholder */}
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        <div className="product-grid" style={{ marginBottom: 40 }}>
          {[
            { cat: "Pokemon TCG", name: "Scarlet & Violet Booster Box", price: "$129.99" },
            { cat: "One Piece TCG", name: "OP-09 Booster Box", price: "$89.99" },
            { cat: "PS5", name: "Final Fantasy VII Rebirth", price: "$49.99" },
            { cat: "Pokemon TCG", name: "Prismatic Evolutions ETB", price: "$54.99" },
          ].map((p, i) => (
            <div key={i} className="product-card">
              <div className="product-img">
                <span style={{ opacity: 0.3 }}>&#128247;</span>
              </div>
              <div className="product-info">
                <div className="product-cat">{p.cat}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-price">{p.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Guides Section */}
        <div className="section-header">
          <h2>Game Guides</h2>
          <Link href="/guides" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
            All Guides &rarr;
          </Link>
        </div>
        <div className="g3" style={{ marginBottom: 40 }}>
          <Link href="/guides/tft" className="guide-card c-blue">
            <div className="guide-card-icon">&#9876;</div>
            <div className="guide-card-title">Teamfight Tactics</div>
            <div className="guide-card-desc">
              Comp tier lists, item cheat sheets, and stage-by-stage strategy for climbing ranked.
            </div>
            <div className="guide-card-meta">
              <span className="badge badge-blue">Meta Comps</span>
              <span className="badge badge-purple">Set 14</span>
            </div>
          </Link>

          <Link href="/guides/league" className="guide-card c-orange">
            <div className="guide-card-icon">&#9889;</div>
            <div className="guide-card-title">League of Legends</div>
            <div className="guide-card-desc">
              Champion guides, role breakdowns, and tier lists to climb from Iron to Challenger.
            </div>
            <div className="guide-card-meta">
              <span className="badge badge-orange">Champions</span>
              <span className="badge badge-navy">Patch Notes</span>
            </div>
          </Link>

          <Link href="/guides/rs3" className="guide-card c-navy">
            <div className="guide-card-icon">&#127984;</div>
            <div className="guide-card-title">RuneScape 3</div>
            <div className="guide-card-desc">
              Quests, skills, combat, and the completionist roadmap from Lumbridge to endgame.
            </div>
            <div className="guide-card-meta">
              <span className="badge badge-orange">Quests</span>
              <span className="badge badge-navy">29 Skills</span>
            </div>
          </Link>
        </div>

        {/* Why Shop With Us */}
        <div className="divider">Why Shop With Us</div>
        <div className="g3" style={{ marginBottom: 40 }}>
          <div className="card navy">
            <div className="card-title">Local Game Store</div>
            <div className="card-body">
              We&apos;re a real shop with real people. Get expert advice on decks,
              pulls, and what&apos;s worth picking up right now.
            </div>
          </div>
          <div className="card orange">
            <div className="card-title">Competitive Prices</div>
            <div className="card-body">
              Fair prices on sealed product, singles, and games. We price-match
              major retailers so you never overpay.
            </div>
          </div>
          <div className="card navy">
            <div className="card-title">Fast Shipping</div>
            <div className="card-body">
              Orders ship within 1-2 business days. Cards are sleeved and
              protected. Games arrive in perfect condition.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="g3">
            <div>
              <h4>Shop</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.85rem" }}>
                <Link href="/shop/pokemon">Pokemon TCG</Link>
                <Link href="/shop/one-piece">One Piece TCG</Link>
                <Link href="/shop/ps5">PS5 Games</Link>
                <Link href="/shop/ps4">PS4 Games</Link>
              </div>
            </div>
            <div>
              <h4>Guides</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.85rem" }}>
                <Link href="/guides/tft">Teamfight Tactics</Link>
                <Link href="/guides/league">League of Legends</Link>
              </div>
            </div>
            <div>
              <h4>OnlyHeat Games</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                Your local game store, online. Trading cards, video games, and
                gaming guides all in one place.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2026 OnlyHeat Games. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
