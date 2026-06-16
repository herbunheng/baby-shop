import { Heart, Plus, Star } from "lucide-react";
import type { Product } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type ProductGridProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout" | "admin" | "admin-login", param?: any) => void;
  wishlist: number[];
  onToggleFavorite: (productId: number) => void;
  t: (key: TranslationKey) => string;
};

export function ProductGrid({
  products,
  onAddToCart,
  onNavigate,
  wishlist,
  onToggleFavorite,
  t,
}: ProductGridProps) {
  return (
    <section className="section-block products-section" id="products">
      <div className="section-heading">
        <div>
          <h2>{t("featuredTitle")}</h2>
          <p>{t("featuredText")}</p>
        </div>
        <button
          className="filter-pill"
          type="button"
          onClick={() => onNavigate("shop", "clothes")}
        >
          Clothes
        </button>
      </div>

      <div className="product-grid">
        {products.map((product) => {
          const isFavorite = wishlist.includes(product.id);
          return (
            <article
              className="product-card"
              key={product.id}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest(".quick-add") || target.closest(".floating-heart")) {
                  return;
                }
                onNavigate("product", product.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-badge">{product.badge}</span>
                <button
                  className={`floating-heart ${isFavorite ? "is-favorite" : ""}`}
                  type="button"
                  onClick={() => onToggleFavorite(product.id)}
                  aria-label={`Save ${product.name}`}
                >
                  <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
            <div className="product-info">
              <div>
                <small>{product.category}</small>
                <h3>{product.name}</h3>
              </div>
              <div className="rating-row">
                <span>
                  <Star size={16} fill="currentColor" />
                  {product.rating}
                </span>
                <small>
                  {product.reviews} {t("ratingLabel")}
                </small>
              </div>
              <div className="product-footer">
                <strong>${product.price.toFixed(2)}</strong>
                <button
                  className="quick-add"
                  type="button"
                  onClick={() => onAddToCart(product)}
                >
                  <Plus size={17} />
                  {t("quickAdd")}
                </button>
              </div>
            </div>
          </article>
        ); })}
      </div>
    </section>
  );
}
