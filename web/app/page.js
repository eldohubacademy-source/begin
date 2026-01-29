import styles from "./page.module.css";

const stats = [
  { value: "240+", label: "Verified farmers" },
  { value: "1.8k", label: "Active products" },
  { value: "18 hrs", label: "Avg. fulfillment" },
];

const featuredProducts = [
  {
    name: "Heirloom Tomatoes",
    farmer: "Green Valley Co-op",
    price: "$4.50 / lb",
    stock: "120 lbs available",
    badge: "Peak season",
  },
  {
    name: "Organic Kale",
    farmer: "Mtaa Urban Farms",
    price: "$2.10 / bunch",
    stock: "85 bunches",
    badge: "Certified organic",
  },
  {
    name: "Raw Honey",
    farmer: "Sunrise Apiaries",
    price: "$9.00 / jar",
    stock: "52 jars",
    badge: "Limited batch",
  },
  {
    name: "Red Potatoes",
    farmer: "Highland Acres",
    price: "$3.20 / kg",
    stock: "300 kg",
    badge: "Cold storage",
  },
];

const featuredFarmers = [
  {
    name: "Green Valley Co-op",
    location: "Nakuru, KE",
    focus: "Vegetables, herbs",
    delivery: "Mon & Thu routes",
    rating: "4.9",
    tags: ["Traceable", "Low waste"],
  },
  {
    name: "Sunrise Apiaries",
    location: "Meru, KE",
    focus: "Honey, beeswax",
    delivery: "Weekly dispatch",
    rating: "4.8",
    tags: ["Eco-friendly", "Small batch"],
  },
  {
    name: "Mtaa Urban Farms",
    location: "Nairobi, KE",
    focus: "Leafy greens",
    delivery: "Daily harvest",
    rating: "4.7",
    tags: ["Hydroponic", "Pesticide-free"],
  },
];

const steps = [
  {
    title: "Farmers list inventory",
    description:
      "Upload harvest quantities, pricing, and delivery windows in minutes.",
  },
  {
    title: "Buyers place wholesale orders",
    description:
      "Restaurants, retailers, and families browse and order directly.",
  },
  {
    title: "Smart fulfillment",
    description:
      "Automatic pickup plans and order tracking keep everyone informed.",
  },
];

const buyerTools = [
  "Consolidated orders from multiple farms in one checkout.",
  "Transparent pricing and availability updated in real time.",
  "Saved preferences for repeat weekly sourcing.",
];

const farmerTools = [
  "Inventory alerts and harvest planning insights.",
  "Automated invoices and payout tracking.",
  "Verified buyer profiles to reduce cancellations.",
];

const testimonials = [
  {
    quote:
      "We cut our sourcing time in half and reduced waste by matching supply to demand.",
    name: "Harbor Bistro",
    role: "Restaurant group",
  },
  {
    quote:
      "MyFarmShop helped us reach new buyers without leaving the farm.",
    name: "Highland Acres",
    role: "Family farm",
  },
  {
    quote: "The delivery routing keeps our weekly orders on schedule.",
    name: "FreshMart",
    role: "Neighborhood grocer",
  },
];

const orderFeed = [
  {
    id: "ORD-3481",
    buyer: "Harbor Bistro",
    items: "Tomatoes, basil, kale",
    total: "$420.00",
    status: "Packed",
  },
  {
    id: "ORD-3482",
    buyer: "FreshMart",
    items: "Potatoes, carrots, spinach",
    total: "$610.00",
    status: "Out for delivery",
  },
  {
    id: "ORD-3483",
    buyer: "City Fresh Boxes",
    items: "Honey, avocados, greens",
    total: "$255.00",
    status: "Confirmed",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>MyFarmShop</span>
          <span className={styles.brandTag}>Farm-to-client ecommerce</span>
        </div>
        <nav className={styles.nav}>
          <a href="#marketplace">Marketplace</a>
          <a href="#farmers">Farmers</a>
          <a href="#how">How it works</a>
          <a href="#tools">Tools</a>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.secondaryButton} href="#tools">
            For buyers
          </a>
          <a className={styles.primaryButton} href="#signup">
            Get started
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Farm to table, faster</p>
            <h1 className={styles.heroTitle}>
              Connect farmers and buyers with a trusted fresh produce marketplace.
            </h1>
            <p className={styles.heroSubtitle}>
              MyFarmShop is an ecommerce platform that helps farmers list their
              harvests, while buyers secure fresh inventory with transparent
              pricing, delivery windows, and reliable fulfillment.
            </p>
            <div className={styles.heroButtons}>
              <a className={styles.primaryButton} href="#marketplace">
                Browse marketplace
              </a>
              <a className={styles.secondaryButton} href="#farmers">
                Meet the farmers
              </a>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <div>
                <h3>Live order snapshot</h3>
                <p>Track fulfillment in real time.</p>
              </div>
              <span className={styles.badge}>Updated 5 min ago</span>
            </div>
            <div className={styles.orderList}>
              {orderFeed.map((order) => (
                <div key={order.id} className={styles.orderItem}>
                  <div>
                    <p className={styles.orderId}>{order.id}</p>
                    <p className={styles.orderBuyer}>{order.buyer}</p>
                    <p className={styles.orderItems}>{order.items}</p>
                  </div>
                  <div className={styles.orderMeta}>
                    <span className={styles.orderTotal}>{order.total}</span>
                    <span className={styles.orderStatus}>{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.heroCardFooter}>
              <span>Average fulfillment</span>
              <strong>18 hours</strong>
            </div>
          </div>
        </section>

        <section id="marketplace" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Marketplace</p>
              <h2 className={styles.sectionTitle}>Top products right now</h2>
              <p className={styles.sectionSubtitle}>
                Fresh inventory from trusted farmers, updated daily.
              </p>
            </div>
            <a className={styles.linkButton} href="#signup">
              Request access
            </a>
          </div>
          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <div key={product.name} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{product.name}</h3>
                  <span className={styles.badge}>{product.badge}</span>
                </div>
                <p className={styles.cardMeta}>{product.farmer}</p>
                <div className={styles.cardRow}>
                  <span className={styles.price}>{product.price}</span>
                  <span className={styles.stock}>{product.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="farmers" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Farmer network</p>
              <h2 className={styles.sectionTitle}>
                Built on relationships with growers
              </h2>
              <p className={styles.sectionSubtitle}>
                Verified profiles highlight farming practices, delivery routes,
                and available crops.
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            {featuredFarmers.map((farmer) => (
              <div key={farmer.name} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{farmer.name}</h3>
                  <span className={styles.badge}>{farmer.rating} ★</span>
                </div>
                <p className={styles.cardMeta}>{farmer.location}</p>
                <div className={styles.cardList}>
                  <div>
                    <span>Focus</span>
                    <strong>{farmer.focus}</strong>
                  </div>
                  <div>
                    <span>Delivery</span>
                    <strong>{farmer.delivery}</strong>
                  </div>
                </div>
                <div className={styles.tagRow}>
                  {farmer.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>How it works</p>
              <h2 className={styles.sectionTitle}>
                A marketplace flow designed for fresh logistics
              </h2>
            </div>
          </div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.title} className={styles.stepCard}>
                <span className={styles.stepIndex}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Tools for everyone</p>
              <h2 className={styles.sectionTitle}>Built for buyers and farmers</h2>
              <p className={styles.sectionSubtitle}>
                A single platform that keeps inventory, payments, and deliveries
                synchronized.
              </p>
            </div>
          </div>
          <div className={styles.split}>
            <div className={styles.panel}>
              <h3>Buyer workspace</h3>
              <ul>
                {buyerTools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <a className={styles.linkButton} href="#signup">
                Create buyer account
              </a>
            </div>
            <div className={styles.panel}>
              <h3>Farmer workspace</h3>
              <ul>
                {farmerTools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <a className={styles.linkButton} href="#signup">
                Apply as a farmer
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Trusted by local businesses</p>
              <h2 className={styles.sectionTitle}>
                Partners who rely on fresh supply chains
              </h2>
            </div>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className={styles.testimonialCard}>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="signup" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <p className={styles.eyebrow}>Get started</p>
            <h2>Ready to grow with MyFarmShop?</h2>
            <p>
              Join the platform to access verified farmers, streamlined ordering,
              and reliable delivery planning.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <div className={styles.ctaButtons}>
              <a className={styles.primaryButton} href="#marketplace">
                Browse produce
              </a>
              <a className={styles.secondaryButton} href="#farmers">
                List your farm
              </a>
            </div>
            <form className={styles.ctaForm}>
              <label htmlFor="email">Get updates</label>
              <div className={styles.ctaField}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <button type="submit">Notify me</button>
              </div>
              <span className={styles.ctaHint}>
                We will only send marketplace updates.
              </span>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>MyFarmShop</strong>
          <p>Connecting farms and buyers across East Africa.</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#marketplace">Marketplace</a>
          <a href="#farmers">Farmers</a>
          <a href="#how">How it works</a>
          <a href="#signup">Contact</a>
        </div>
        <span className={styles.footerNote}>© 2026 MyFarmShop</span>
      </footer>
    </div>
  );
}
