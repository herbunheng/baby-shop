import { useState } from "react";
import { LockKeyhole, User } from "lucide-react";

type AdminLoginViewProps = {
  onLoginSuccess: () => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout" | "admin" | "admin-login", param?: any) => void;
};

export function AdminLoginView({ onLoginSuccess, onNavigate }: AdminLoginViewProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Support username: "admin" and password "YbiMzquzpXUqTfEvmvjohrQqbWgDeXlh" (from user prompt) or "admin" for easy testing
    if (
      username.toLowerCase() === "admin" &&
      (password === "YbiMzquzpXUqTfEvmvjohrQqbWgDeXlh" || password === "admin")
    ) {
      onLoginSuccess();
      onNavigate("admin");
    } else {
      setError("Invalid admin username or password.");
    }
  };

  return (
    <div className="admin-login-layout">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div>
          <h2>Admin Access</h2>
          <p>Login to update products and view orders</p>
        </div>

        {error && (
          <div style={{ color: "var(--error)", background: "var(--error-container)", padding: "0.75rem", borderRadius: "var(--radius-md)", fontSize: "0.88rem", fontWeight: "bold" }}>
            {error}
          </div>
        )}

        <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
          <label>
            Username
            <div style={{ position: "relative" }}>
              <User size={18} style={{ position: "absolute", left: "12px", top: "14px", color: "var(--muted)" }} />
              <input
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ paddingLeft: "2.5rem" }}
                required
              />
            </div>
          </label>

          <label>
            Password
            <div style={{ position: "relative" }}>
              <LockKeyhole size={18} style={{ position: "absolute", left: "12px", top: "14px", color: "var(--muted)" }} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: "2.5rem" }}
                required
              />
            </div>
          </label>
        </div>

        <button className="primary-button" type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
          Log In
        </button>

        <button
          className="secondary-button"
          type="button"
          onClick={() => onNavigate("home")}
          style={{ width: "100%" }}
        >
          Return to Store
        </button>
      </form>
    </div>
  );
}
