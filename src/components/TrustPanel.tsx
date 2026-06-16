import { trustItems } from "../data/mockData";
import type { TranslationKey } from "../i18n/translations";

type TrustPanelProps = {
  t: (key: TranslationKey) => string;
};

export function TrustPanel({ t }: TrustPanelProps) {
  return (
    <section className="trust-grid" aria-label="BABY SHOP service promises">
      {trustItems.map((item) => {
        const Icon = item.icon;
        return (
          <article className="trust-item" key={item.id}>
            <Icon size={24} />
            <h3>{t(item.labelKey as TranslationKey)}</h3>
            <p>{t(item.textKey as TranslationKey)}</p>
          </article>
        );
      })}
    </section>
  );
}
