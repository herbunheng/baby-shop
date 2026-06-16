import { ArrowRight, ShieldCheck } from "lucide-react";
import { heroImage } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type HeroProps = {
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  t: (key: TranslationKey) => string;
};

export function Hero({ onNavigate, t }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          src={heroImage}
          alt="A premium nursery scene with a smiling infant in soft organic cotton."
        />
      </div>
      <div className="hero-content">
        <span className="eyebrow">
          <ShieldCheck size={18} />
          {t("heroEyebrow")}
        </span>
        <h1>{t("heroTitle")}</h1>
        <p>{t("heroText")}</p>
        <div className="hero-actions">
          <a
            className="primary-button"
            href="#/shop"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("shop");
            }}
          >
            {t("shopNow")}
            <ArrowRight size={19} />
          </a>
          <a
            className="secondary-button"
            href="#categories"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("viewCollection")}
          </a>
        </div>
      </div>
    </section>
  );
}
