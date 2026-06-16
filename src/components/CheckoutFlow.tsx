import {
  CheckCircle2,
  LockKeyhole,
  Minus,
  Plus,
  ReceiptText,
  Trash2,
} from "lucide-react";
import {
  paymentMethods,
  type PaymentMethod,
  type Product,
} from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

export type CartItem = Product & {
  quantity: number;
};

type CheckoutFlowProps = {
  cartItems: CartItem[];
  discount: number;
  onClearOrder: () => void;
  onPlaceOrder: () => void;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  orderPlaced: boolean;
  orderTotal: number;
  paymentMethod: PaymentMethod["id"];
  setPaymentMethod: (method: PaymentMethod["id"]) => void;
  shipping: number;
  subtotal: number;
  t: (key: TranslationKey) => string;
};

const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

export function CheckoutFlow({
  cartItems,
  discount,
  onClearOrder,
  onPlaceOrder,
  onQuantityChange,
  onRemove,
  orderPlaced,
  orderTotal,
  paymentMethod,
  setPaymentMethod,
  shipping,
  subtotal,
  t,
}: CheckoutFlowProps) {
  const orderNumber = "BS-2026-1048";

  return (
    <section className="checkout-section" id="checkout">
      <div className="section-heading">
        <div>
          <h2>{t("checkoutTitle")}</h2>
          <p>{t("checkoutText")}</p>
        </div>
        <span className="secure-pill">
          <LockKeyhole size={16} />
          {t("secureCheckout")}
        </span>
      </div>

      <div className="checkout-steps" aria-label="Checkout steps">
        {[t("stepBag"), t("stepDelivery"), t("stepPayment")].map((step, index) => (
          <span className="checkout-step" key={step}>
            <strong>{index + 1}</strong>
            {step}
          </span>
        ))}
      </div>

      {orderPlaced ? (
        <article className="order-success">
          <CheckCircle2 size={52} />
          <h3>{t("orderReady")}</h3>
          <p>{t("orderReadyText")}</p>
          <div className="receipt-grid">
            <span>{t("orderNumber")}</span>
            <strong>{orderNumber}</strong>
            <span>{t("paymentStatus")}</span>
            <strong>{t("paymentPending")}</strong>
            <span>{t("total")}</span>
            <strong>{formatCurrency(orderTotal)}</strong>
          </div>
          <button className="secondary-button" type="button" onClick={onClearOrder}>
            {t("continueShopping")}
          </button>
        </article>
      ) : (
        <div className="checkout-layout">
          <div className="checkout-panels">
            <article className="checkout-card">
              <div className="checkout-card-title">
                <ReceiptText size={22} />
                <h3>{t("cartTitle")}</h3>
              </div>

              {cartItems.length === 0 ? (
                <p className="empty-cart">{t("emptyCart")}</p>
              ) : (
                <div className="cart-list">
                  {cartItems.map((item) => (
                    <div className="cart-line" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <small>{item.color}</small>
                        <span>{formatCurrency(item.price)}</span>
                      </div>
                      <div className="quantity-control" aria-label={`${t("quantity")} ${item.name}`}>
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        type="button"
                        onClick={() => onRemove(item.id)}
                        aria-label={`${t("remove")} ${item.name}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </article>

            <article className="checkout-card">
              <h3>{t("deliveryTitle")}</h3>
              <div className="form-grid">
                <label>
                  {t("fullName")}
                  <input defaultValue="Sokha Chan" placeholder={t("namePlaceholder")} />
                </label>
                <label>
                  {t("phone")}
                  <input defaultValue="+855 12 345 678" placeholder={t("phonePlaceholder")} />
                </label>
                <label className="wide-field">
                  {t("address")}
                  <input
                    defaultValue="House 24, Street 371, Boeung Tumpun"
                    placeholder={t("addressPlaceholder")}
                  />
                </label>
                <label>
                  {t("city")}
                  <input defaultValue="Phnom Penh" placeholder={t("cityPlaceholder")} />
                </label>
                <label className="wide-field">
                  {t("note")}
                  <textarea placeholder={t("notePlaceholder")} rows={3} />
                </label>
              </div>
            </article>

            <article className="checkout-card">
              <h3>{t("paymentTitle")}</h3>
              <div className="payment-grid">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isActive = paymentMethod === method.id;
                  return (
                    <button
                      className={`payment-option ${isActive ? "is-active" : ""}`}
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <Icon size={24} />
                      <span>
                        <strong>{t(method.labelKey as TranslationKey)}</strong>
                        <small>{t(method.textKey as TranslationKey)}</small>
                      </span>
                    </button>
                  );
                })}
              </div>
            </article>
          </div>

          <aside className="summary-card">
            <h3>{t("summaryTitle")}</h3>
            <div className="summary-lines">
              <span>{t("subtotal")}</span>
              <strong>{formatCurrency(subtotal)}</strong>
              <span>{t("shipping")}</span>
              <strong>{shipping === 0 ? "Free" : formatCurrency(shipping)}</strong>
              <span>{t("discount")}</span>
              <strong>-{formatCurrency(discount)}</strong>
            </div>
            <div className="summary-total">
              <span>{t("total")}</span>
              <strong>{formatCurrency(orderTotal)}</strong>
            </div>
            <button
              className="primary-button checkout-submit"
              type="button"
              disabled={cartItems.length === 0}
              onClick={onPlaceOrder}
            >
              {t("placeOrder")}
              <CheckCircle2 size={19} />
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
