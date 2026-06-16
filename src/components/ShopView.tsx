import { useState, useMemo } from "react";
import { Star, Plus, Heart } from "lucide-react";
import { products, type Product } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type ShopViewProps = {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  wishlist: number[];
  onToggleFavorite: (productId: number) => void;
  t: (key: TranslationKey) => string;
};

const BRANDS = ["All", "EcoBaby", "Loom & Leaf", "PureSleep", "Nordic Wood"];

export function ShopView({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onNavigate,
  wishlist,
  onToggleFavorite,
  t,
}: ShopViewProps) {
  const [selectedBrands, setSelectedBrands] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [sortBy, setSortBy] = useState<string>("Newest");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handler for category filter from sidebar checkboxes
  const handleCategoryToggle = (category: string) => {
    if (selectedCategory?.toLowerCase() === category.toLowerCase()) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
    }
  };

  // Toggle brand selection
  const handleBrandSelect = (brand: string) => {
    setSelectedBrands(brand);
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category / Favorites filter
        if (selectedCategory) {
          if (selectedCategory === "favorites") {
            if (!wishlist.includes(product.id)) {
              return false;
            }
          } else if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }
        // Price filter
        if (product.price > maxPrice) {
          return false;
        }
        // Search query filter
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        // Brand filter (mock mapping based on product color or id for demo purposes)
        if (selectedBrands !== "All") {
          const productBrand =
            product.id === 1 || product.id === 3 ? "EcoBaby" : "Nordic Wood";
          if (productBrand !== selectedBrands) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "PriceLow") return a.price - b.price;
        if (sortBy === "PriceHigh") return b.price - a.price;
        if (sortBy === "Rating") return b.rating - a.rating;
        return a.id - b.id; // Newest / ID order
      });
  }, [selectedCategory, maxPrice, selectedBrands, sortBy, searchQuery]);

  return (
    <div className="shop-layout">
      {/* Sidebar Filters */}
      <aside className="shop-sidebar">
        {/* Search Input inside sidebar for mobile / sub searches */}
        <div className="filter-group">
          <h3>Search</h3>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Checkboxes */}
        <div className="filter-group">
          <h3>Categories</h3>
          <label className="filter-checkbox-label" style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={selectedCategory === "favorites"}
              onChange={() => onSelectCategory(selectedCategory === "favorites" ? null : "favorites")}
            />
            <span style={{ color: "var(--secondary)", fontWeight: "bold" }}>Favorites Only ({wishlist.length})</span>
          </label>
          {["Clothes", "Diapers", "Feeding", "Toys", "Bath"].map((cat) => {
            const isChecked = selectedCategory?.toLowerCase() === cat.toLowerCase();
            return (
              <label className="filter-checkbox-label" key={cat}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCategoryToggle(cat)}
                />
                <span>{cat}</span>
              </label>
            );
          })}
        </div>

        {/* Price Slider */}
        <div className="filter-group">
          <h3>Price Range</h3>
          <div className="price-slider-container">
            <input
              type="range"
              min="0"
              max="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="price-slider-values">
              <span>$0</span>
              <span>Max: ${maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Brand selection chips */}
        <div className="filter-group">
          <h3>Brand</h3>
          <div className="brand-chips">
            {BRANDS.map((brand) => (
              <button
                type="button"
                className={`brand-chip ${selectedBrands === brand ? "is-active" : ""}`}
                key={brand}
                onClick={() => handleBrandSelect(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main product list */}
      <section className="shop-main">
        <div className="shop-toolbar">
          <p className="empty-cart" style={{ margin: 0 }}>
            Showing <strong>{filteredProducts.length}</strong> products
          </p>
          <div className="shop-sort">
            <label htmlFor="sort-select" className="label-sm" style={{ marginRight: "0.5rem" }}>
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Newest">Newest Arrivals</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p className="empty-cart">No products match your active filters.</p>
            <button
              className="secondary-button"
              type="button"
              onClick={() => {
                onSelectCategory(null);
                setMaxPrice(50);
                setSelectedBrands("All");
                setSearchQuery("");
              }}
              style={{ marginTop: "1rem" }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const isFavorite = wishlist.includes(product.id);
              return (
                <article
                  className="product-card"
                  key={product.id}
                  onClick={(e) => {
                    // If clicking on quick add or heart button, do not navigate to details page
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
        )}
      </section>
    </div>
  );
}
