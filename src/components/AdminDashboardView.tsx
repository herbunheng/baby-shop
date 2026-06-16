import { useState } from "react";
import { Edit2, Trash2, Plus, LogOut, Package, ShoppingCart, X, Check } from "lucide-react";
import type { Product } from "../data/mockData";

type AdminDashboardViewProps = {
  products: Product[];
  orders: any[];
  onAddProduct: (product: Omit<Product, "id">) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
  onLogout: () => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout" | "admin" | "admin-login", param?: any) => void;
};

export function AdminDashboardView({
  products,
  orders,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onLogout,
  onNavigate,
}: AdminDashboardViewProps) {
  const [activeTab, setActiveTab] = useState<"products" | "orders">("products");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Clothes");
  const [color, setColor] = useState("");
  const [badge, setBadge] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const openAddModal = () => {
    setEditingProduct(null);
    setName("");
    setPrice("");
    setCategory("Clothes");
    setColor("");
    setBadge("");
    setImageUrl("");
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
    setCategory(product.category);
    setColor(product.color);
    setBadge(product.badge);
    setImageUrl(product.image);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    // Default image if empty
    const img = imageUrl.trim() || "https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs";

    if (editingProduct) {
      onUpdateProduct({
        ...editingProduct,
        name,
        price: parsedPrice,
        category,
        color,
        badge,
        image: img,
      });
    } else {
      onAddProduct({
        name,
        price: parsedPrice,
        category,
        color,
        badge,
        image: img,
        rating: 5.0,
        reviews: 0,
      });
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: number, productName: string) => {
    if (confirm(`Are you sure you want to delete "${productName}"?`)) {
      onDeleteProduct(id);
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h2>Merchant Dashboard</h2>
          <p style={{ margin: 0, color: "var(--muted)" }}>Manage store inventory and monitor sales</p>
        </div>
        <div style={{ display: "flex", gap: "0.55rem" }}>
          <button
            className="secondary-button"
            type="button"
            onClick={() => onNavigate("home")}
            style={{ minHeight: "40px", padding: "0.5rem 1rem", fontSize: "0.9rem" }}
          >
            Storefront
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={onLogout}
            style={{ minHeight: "40px", padding: "0.5rem 1rem", fontSize: "0.9rem", background: "var(--secondary)" }}
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === "products" ? "is-active" : ""}`}
          onClick={() => setActiveTab("products")}
          type="button"
        >
          <Package size={18} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
          Products ({products.length})
        </button>
        <button
          className={`admin-tab ${activeTab === "orders" ? "is-active" : ""}`}
          onClick={() => setActiveTab("orders")}
          type="button"
        >
          <ShoppingCart size={18} style={{ marginRight: "6px", display: "inline", verticalAlign: "middle" }} />
          Orders ({orders.length})
        </button>
      </div>

      {/* Products Tab */}
      {activeTab === "products" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ alignSelf: "flex-end" }}>
            <button className="primary-button" type="button" onClick={openAddModal}>
              <Plus size={18} />
              Add Product
            </button>
          </div>

          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Badge</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id}>
                    <td>
                      <img src={prod.image} alt={prod.name} className="admin-prod-thumb" />
                    </td>
                    <td style={{ fontWeight: "700" }}>{prod.name}</td>
                    <td>
                      <span className="admin-badge">{prod.category}</span>
                    </td>
                    <td style={{ fontWeight: "800", color: "var(--primary)" }}>
                      ${prod.price.toFixed(2)}
                    </td>
                    <td>{prod.color}</td>
                    <td>
                      {prod.badge && (
                        <span className={`admin-badge ${prod.id % 2 === 0 ? "badge-pink" : ""}`}>
                          {prod.badge}
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn"
                          type="button"
                          onClick={() => openEditModal(prod)}
                          title="Edit Product"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          className="action-btn btn-delete"
                          type="button"
                          onClick={() => handleDelete(prod.id, prod.name)}
                          title="Delete Product"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === "orders" && (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>City</th>
                <th>Address</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "3rem", color: "var(--muted)" }}>
                    No incoming orders recorded yet. Place an order on checkout view to see it here!
                  </td>
                </tr>
              ) : (
                orders.map((ord, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: "700" }}>{ord.orderNumber}</td>
                    <td style={{ fontWeight: "700" }}>{ord.name}</td>
                    <td>{ord.phone}</td>
                    <td>{ord.city}</td>
                    <td style={{ fontSize: "0.85rem", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {ord.address}
                    </td>
                    <td style={{ textTransform: "uppercase", fontWeight: "700", fontSize: "0.85rem" }}>
                      {ord.paymentMethod}
                    </td>
                    <td style={{ fontWeight: "800", color: "var(--primary)" }}>
                      ${ord.total.toFixed(2)}
                    </td>
                    <td>
                      <span className="order-badge paid">
                        <Check size={12} style={{ display: "inline", marginRight: "3px", verticalAlign: "middle" }} />
                        Confirmed
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit / Add Modal Popup */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
              <button className="admin-modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal-body">
                <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
                  <label>
                    Product Name *
                    <input
                      type="text"
                      placeholder="Organic Cotton Bib"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>

                  <div className="form-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <label>
                      Price ($) *
                      <input
                        type="number"
                        step="0.01"
                        placeholder="18.50"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Category *
                      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ background: "var(--surface-low)", border: "1px solid transparent", borderRadius: "var(--radius-lg)", padding: "0.85rem" }}>
                        <option value="Clothes">Clothes</option>
                        <option value="Diapers">Diapers</option>
                        <option value="Feeding">Feeding</option>
                        <option value="Toys">Toys</option>
                        <option value="Bath">Bath</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <label>
                      Color
                      <input
                        type="text"
                        placeholder="Sage / Blush / Cloud"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                      />
                    </label>
                    <label>
                      Badge
                      <input
                        type="text"
                        placeholder="Eco / Best Seller / New"
                        value={badge}
                        onChange={(e) => setBadge(e.target.value)}
                      />
                    </label>
                  </div>

                  <label>
                    Image URL
                    <input
                      type="url"
                      placeholder="https://example.com/image.png"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ minHeight: "42px" }}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit" style={{ minHeight: "42px" }}>
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
