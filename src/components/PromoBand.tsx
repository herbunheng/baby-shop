import { ArrowRight, Gift, Sparkles } from "lucide-react";
import type { TranslationKey } from "../i18n/translations";

type PromoBandProps = {
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  t: (key: TranslationKey) => string;
};

export function PromoBand({ onNavigate, t }: PromoBandProps) {
  return (
    <section className="promo-band">
      <div className="promo-copy">
        <span className="eyebrow">
          <Sparkles size={18} />
          BABY SHOP
        </span>
        <h2>{t("bundleTitle")}</h2>
        <p>{t("bundleText")}</p>
        <a
          className="primary-button"
          href="#/shop"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("shop");
          }}
        >
          {t("bundleCta")}
          <ArrowRight size={19} />
        </a>
      </div>
      <div className="bundle-card" aria-label="Bundle preview">
        <Gift size={42} />
        <strong>0-6M</strong>
        <span>Organic cotton • Feeding • Bath • Toy</span>
      </div>
    </section>
  );
}
