import {
  Heart,
  Languages,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import type { Locale, TranslationKey } from "../i18n/translations";
import { navItems, wishlistCount } from "../data/mockData";

type HeaderProps = {
  cartCount: number;
  locale: Locale;
  onCartClick: () => void;
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

export function Header({ cartCount, locale, onCartClick, onNavigate, setLocale, t }: HeaderProps) {
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = e.currentTarget.value.trim();
      onNavigate("shop", query || null);
    }
  };

  return (
    <header className="site-header">
      <div className="announcement">{t("announcement")}</div>
      <div className="nav-shell">
        <button className="icon-button mobile-only" aria-label="Open menu">
          <Menu size={21} />
        </button>

        <a
          className="brand"
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          aria-label="BABY SHOP home"
        >
          BABY SHOP
        </a>

        <label className="search-box">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            placeholder={t("search")}
            onKeyDown={handleSearchKeyDown}
          />
        </label>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              href={`#/shop`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("shop", item);
              }}
              key={item}
            >
              {item}
            </a>
          ))}
          <a
            href={`#/shop`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate("shop", null);
            }}
          >
            Shop All
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => setLocale(locale === "en" ? "km" : "en")}
          >
            <Languages size={18} />
            <span>{locale === "en" ? "ខ្មែរ" : "EN"}</span>
          </button>
          <button className="icon-button" aria-label="Wishlist">
            <Heart size={21} />
            <span>{wishlistCount}</span>
          </button>
          <button className="icon-button" aria-label="Cart" onClick={onCartClick}>
            <ShoppingCart size={21} />
            <span>{cartCount}</span>
          </button>
          <button className="icon-button desktop-only" aria-label="Account">
            <UserRound size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}
