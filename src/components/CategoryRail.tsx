import { categories } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type CategoryRailProps = {
  onNavigate: (page: "home" | "shop" | "product" | "checkout", param?: any) => void;
  t: (key: TranslationKey) => string;
};

export function CategoryRail({ onNavigate, t }: CategoryRailProps) {
  return (
    <section className="section-block" id="categories">
      <div className="section-heading">
        <div>
          <h2>{t("categoriesTitle")}</h2>
          <p>{t("categoriesText")}</p>
        </div>
      </div>
      <div className="category-grid">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a
              className={`category-card tone-${category.tone}`}
              href={`#/shop`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("shop", category.id);
              }}
              key={category.id}
            >
              <span className="category-icon">
                <Icon size={30} />
              </span>
              <strong>{t(category.labelKey as TranslationKey)}</strong>
              <small>{category.count} items</small>
            </a>
          );
        })}
      </div>
    </section>
  );
}
