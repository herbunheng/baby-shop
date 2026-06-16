import { useState, useMemo } from "react";
import { Star, Plus, Minus, Heart, ArrowLeft, ShieldCheck, HelpCircle } from "lucide-react";
import { products, type Product } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type ProductDetailViewProps = {
  productId: number;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  t: (key: TranslationKey) => string;
};

// Beautiful mock gallery images
const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6CAagMbiReQ5eEHO5zmh_6maBv1csYV6zbtK7T6EagnuU3eOTagyE4DAB-L66TCZi-R4U59QotVPGkYqu_XFQVqP6Siv-wtknOkiJzG24TmUgj_UqGsqlu-lik7Hc3gv7m-JzaSRa6llnX1mpcIeeySQZ2mSkw4e6pWBB3zl9FBKH6D7D2lgFxPtsDVrTfTCVrVbycDSxjTwDjeQsAHxhLOmWX2HffYum1cFYjDiIvhiW2vogIzBW9DXTTpANrl4XdY4qz9G8o",
];

const COLORS = [
  { name: "Cloud White", hex: "#fbf9f8" },
  { name: "Blush", hex: "#ffcddd" },
  { name: "Sage", hex: "#dbe5d8" },
  { name: "Natural", hex: "#eae8e7" },
];

export function ProductDetailView({
  productId,
  onAddToCart,
  onNavigate,
  t,
}: ProductDetailViewProps) {
  const product = useMemo(() => {
    return products.find((p) => p.id === productId) || products[0];
  }, [productId]);

  const [activeImg, setActiveImg] = useState<string>(product.image || GALLERY_IMAGES[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.color || "Cloud White");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  // Get related products (excluding current one)
  const relatedProducts = useMemo(() => {
    return products.filter((p) => p.id !== product.id);
  }, [product.id]);

  const handleAddToCart = () => {
    // Call add to cart multiple times if quantity > 1
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setQuantity(1); // Reset
    // Automatically navigate to checkout so user sees the cart page
    onNavigate("checkout");
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs / Back button */}
      <nav className="site-header" style={{ position: "static", background: "transparent", border: "none", backdropFilter: "none", marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={() => onNavigate("shop")}
          className="secondary-button"
          style={{ minHeight: "40px", padding: "0.5rem 1rem", fontSize: "0.9rem" }}
        >
          <ArrowLeft size={16} />
          Back to Shop
        </button>
      </nav>

      {/* Main product detail grid */}
      <div className="detail-layout">
        {/* Left Column: Image Gallery */}
        <div className="detail-gallery">
          <div className="detail-main-img-wrap">
            <img src={activeImg} alt={product.name} />
          </div>
          <div className="detail-thumbs">
            {GALLERY_IMAGES.map((imgUrl, idx) => (
              <button
                type="button"
                className={`detail-thumb ${activeImg === imgUrl ? "is-active" : ""}`}
                key={idx}
                onClick={() => setActiveImg(imgUrl)}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Information */}
        <div className="detail-info">
          <span className="eyebrow" style={{ color: "var(--primary)" }}>
            {product.category}
          </span>
          <h1>{product.name}</h1>

          {/* Rating */}
          <div className="detail-meta">
            <div className="detail-rating">
              <Star size={18} fill="currentColor" />
              <span>{product.rating}</span>
            </div>
            <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              ({product.reviews} customer reviews)
            </span>
          </div>

          {/* Price */}
          <div className="detail-price">${product.price.toFixed(2)}</div>

          {/* Short description */}
          <p className="detail-desc">
            This premium {product.name.toLowerCase()} is sustainably made from chemical-free, gentle fabric designed to keep your baby comfortable. Made with non-toxic dyes and wood details, it offers a soft, premium touch suitable for daily wear or registry gifts.
          </p>

          {/* Color Selector */}
          <div className="detail-options">
            <span className="label-sm" style={{ color: "var(--ink)" }}>
              Selected Color: <strong>{selectedColor}</strong>
            </span>
            <div className="color-option-row">
              {COLORS.map((color) => (
                <button
                  type="button"
                  className={`color-dot ${selectedColor === color.name ? "is-active" : ""}`}
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity and CTA */}
          <div className="detail-actions">
            <div className="quantity-control" aria-label="Select quantity">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            <button className="primary-button" type="button" onClick={handleAddToCart}>
              <Plus size={18} />
              Add to Bag
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="detail-tabs-section">
        <div className="tab-headers">
          <button
            type="button"
            className={`tab-header ${activeTab === "desc" ? "is-active" : ""}`}
            onClick={() => setActiveTab("desc")}
          >
            Description
          </button>
          <button
            type="button"
            className={`tab-header ${activeTab === "specs" ? "is-active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <button
            type="button"
            className={`tab-header ${activeTab === "reviews" ? "is-active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "desc" && (
            <div>
              <p>
                Our premium baby products are developed in cooperation with pediatricians to ensure maximum comfort and safety for newborns. Every piece is constructed with breathable, sweat-wicking materials that support thermo-regulation during naps and play.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Crafted under strict ethical conditions, the manufacture of this item supports local textile cooperatives, guaranteeing fair wages and clean working conditions.
              </p>
            </div>
          )}

          {activeTab === "specs" && (
            <ul>
              <li><strong>Material:</strong> 100% Organic Knit Bamboo/Cotton Blend</li>
              <li><strong>Certification:</strong> GOTS Certified Organic Fibers</li>
              <li><strong>Care Instructions:</strong> Machine wash cold, gentle cycle; tumble dry low or lay flat to dry</li>
              <li><strong>Safety:</strong> Lead-free snaps, natural wood details, hypoallergenic</li>
              <li><strong>Origin:</strong> Sustainably made in Cambodia</li>
            </ul>
          )}

          {activeTab === "reviews" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ paddingBottom: "1rem", borderBottom: "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                  <strong>Sophal K.</strong>
                  <span style={{ color: "var(--secondary)", display: "flex", alignItems: "center", gap: "2px" }}>
                    <Star size={14} fill="currentColor" /> 5/5
                  </span>
                </div>
                <p style={{ fontSize: "0.9rem" }}>
                  Absolutely beautiful! Extremely soft and holds up great in the wash. I bought it as a registry gift but ended up buying another one for my baby. Highly recommend.
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                  <strong>Leakna M.</strong>
                  <span style={{ color: "var(--secondary)", display: "flex", alignItems: "center", gap: "2px" }}>
                    <Star size={14} fill="currentColor" /> 5/5
                  </span>
                </div>
                <p style={{ fontSize: "0.9rem" }}>
                  Highly premium feel! Love the wooden button detail and the color is gorgeous. It fits exactly as described and feels super soft against newborn skin.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      <section className="section-block">
        <h2 className="related-title">You may also like</h2>
        <div className="product-grid">
          {relatedProducts.map((p) => (
            <article
              className="product-card"
              key={p.id}
              onClick={() => onNavigate("product", p.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-image">
                <img src={p.image} alt={p.name} />
                <span className="product-badge">{p.badge}</span>
                <button className="floating-heart" type="button" aria-label={`Save ${p.name}`}>
                  <Heart size={18} />
                </button>
              </div>
              <div className="product-info">
                <div>
                  <small>{p.category}</small>
                  <h3>{p.name}</h3>
                </div>
                <div className="rating-row">
                  <span>
                    <Star size={16} fill="currentColor" />
                    {p.rating}
                  </span>
                  <small>
                    {p.reviews} {t("ratingLabel")}
                  </small>
                </div>
                <div className="product-footer">
                  <strong>${p.price.toFixed(2)}</strong>
                  <button
                    className="quick-add"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(p);
                    }}
                  >
                    <Plus size={17} />
                    {t("quickAdd")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
