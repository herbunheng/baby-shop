import { useMemo, useState, useEffect } from "react";
import { CategoryRail } from "./components/CategoryRail";
import { CheckoutFlow, type CartItem } from "./components/CheckoutFlow";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { PromoBand } from "./components/PromoBand";
import { TrustPanel } from "./components/TrustPanel";
import { ShopView } from "./components/ShopView";
import { ProductDetailView } from "./components/ProductDetailView";
import { products, type PaymentMethod, type Product } from "./data/mockData";
import { type Locale, type TranslationKey, translations } from "./i18n/translations";

type Route = {
  page: "home" | "shop" | "product" | "checkout";
  productId?: number;
};

function App() {
  const [route, setRoute] = useState<Route>({ page: "home" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 1 },
  ]);
  const [locale, setLocale] = useState<Locale>("en");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod["id"]>("khqr");
  const [wishlist, setWishlist] = useState<number[]>([1, 3]);

  const toggleFavorite = (productId: number) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  // Hash router synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#/shop")) {
        setRoute({ page: "shop" });
      } else if (hash.startsWith("#/product/")) {
        const id = parseInt(hash.replace("#/product/", ""), 10);
        setRoute({ page: "product", productId: isNaN(id) ? undefined : id });
      } else if (hash === "#/checkout") {
        setRoute({ page: "checkout" });
      } else {
        setRoute({ page: "home" });
      }
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Sync initial mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: Route["page"], param?: any) => {
    if (page === "home") {
      window.location.hash = "#/";
    } else if (page === "shop") {
      if (typeof param === "string") {
        setSelectedCategory(param);
      }
      window.location.hash = "#/shop";
    } else if (page === "product") {
      window.location.hash = `#/product/${param}`;
    } else if (page === "checkout") {
      window.location.hash = "#/checkout";
    }
  };

  const t = useMemo(
    () => (key: TranslationKey) => translations[locale][key],
    [locale],
  );
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 4.5;
  const discount = subtotal > 0 ? 5 : 0;
  const orderTotal = Math.max(subtotal + shipping - discount, 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product: Product) => {
    setOrderPlaced(false);
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (!existingItem) {
        return [...currentItems, { ...product, quantity: 1 }];
      }

      return currentItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const clearOrder = () => {
    setOrderPlaced(false);
    navigateTo("home");
  };

  return (
    <div className="app" lang={locale}>
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        locale={locale}
        onCartClick={() => navigateTo("checkout")}
        onNavigate={navigateTo}
        setLocale={setLocale}
        t={t}
      />
      <main>
        {route.page === "home" && (
          <>
            <Hero t={t} onNavigate={navigateTo} />
            <CategoryRail t={t} onNavigate={navigateTo} />
            <ProductGrid
              onAddToCart={addToCart}
              onNavigate={navigateTo}
              wishlist={wishlist}
              onToggleFavorite={toggleFavorite}
              t={t}
            />
            <PromoBand t={t} onNavigate={navigateTo} />
            <TrustPanel t={t} />
          </>
        )}
        {route.page === "shop" && (
          <ShopView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onAddToCart={addToCart}
            onNavigate={navigateTo}
            wishlist={wishlist}
            onToggleFavorite={toggleFavorite}
            t={t}
          />
        )}
        {route.page === "product" && (
          <ProductDetailView
            productId={route.productId || 1}
            onAddToCart={addToCart}
            onNavigate={navigateTo}
            wishlist={wishlist}
            onToggleFavorite={toggleFavorite}
            t={t}
          />
        )}
        {route.page === "checkout" && (
          <CheckoutFlow
            cartItems={cartItems}
            discount={discount}
            onClearOrder={clearOrder}
            onPlaceOrder={() => setOrderPlaced(true)}
            onQuantityChange={updateQuantity}
            onRemove={(productId) =>
              setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
            }
            orderPlaced={orderPlaced}
            orderTotal={orderTotal}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            shipping={shipping}
            subtotal={subtotal}
            t={t}
          />
        )}
      </main>
      <footer>
        <strong>BABY SHOP</strong>
        <span>{t("footerText")}</span>
      </footer>
    </div>
  );
}

export default App;
