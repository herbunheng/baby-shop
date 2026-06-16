import {
  Baby,
  Bath,
  HeartHandshake,
  Milk,
  PackageCheck,
  Puzzle,
  Banknote,
  CreditCard,
  QrCode,
  Shirt,
  ShoppingBag,
  Sparkles,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  color: string;
};

export type Category = {
  id: string;
  labelKey: string;
  count: number;
  icon: LucideIcon;
  tone: "blue" | "pink" | "gray";
};

export type TrustItem = {
  id: string;
  labelKey: string;
  textKey: string;
  icon: LucideIcon;
};

export type PaymentMethod = {
  id: "khqr" | "card" | "cod";
  labelKey: string;
  textKey: string;
  icon: LucideIcon;
};

export const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsYWoLDX6gcnp_d_MHPvXxW8zSjbjl2IEUJbaImwBBGLU98xtSsuuqZwdKcTrZwRFOysvaWZJnUm_hSZ2leCxgDyWRME31OhWNqxNr5v-GObkIoyAZ1PoYvMgqhswcsTC_1xVkVvzVE1p01ckuE5BmBj8zvWIB3ry_MTfHntumqyrFj60aK0OsdKg5fY4W24GXkdkf-qbG85zpeZuKRvO-HBz0Q8XryZ_J41zKsaZoVUYn679Rrg__y8jp8r_DxKDI9DmVtKBbvtc";

export const categories: Category[] = [
  { id: "clothes", labelKey: "catClothes", count: 42, icon: Shirt, tone: "blue" },
  { id: "diapers", labelKey: "catDiapers", count: 18, icon: Baby, tone: "pink" },
  { id: "feeding", labelKey: "catFeeding", count: 26, icon: Milk, tone: "gray" },
  { id: "toys", labelKey: "catToys", count: 34, icon: Puzzle, tone: "blue" },
  { id: "bath", labelKey: "catBath", count: 15, icon: Bath, tone: "pink" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Onesie",
    category: "Clothes",
    price: 24,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs",
    color: "Cloud White",
  },
  {
    id: 2,
    name: "Bamboo Swaddle Set",
    category: "Clothes",
    price: 38,
    rating: 4.9,
    reviews: 96,
    badge: "New",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc",
    color: "Blush",
  },
  {
    id: 3,
    name: "Soft Silicone Feeding Kit",
    category: "Feeding",
    price: 32,
    rating: 4.7,
    reviews: 71,
    badge: "Eco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k",
    color: "Sage",
  },
  {
    id: 4,
    name: "Wooden Sensory Rattle",
    category: "Toys",
    price: 18,
    rating: 4.6,
    reviews: 58,
    badge: "Gift",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6CAagMbiReQ5eEHO5zmh_6maBv1csYV6zbtK7T6EagnuU3eOTagyE4DAB-L66TCZi-R4U59QotVPGkYqu_XFQVqP6Siv-wtknOkiJzG24TmUgj_UqGsqlu-lik7Hc3gv7m-JzaSRa6llnX1mpcIeeySQZ2mSkw4e6pWBB3zl9FBKH6D7D2lgFxPtsDVrTfTCVrVbycDSxjTwDjeQsAHxhLOmWX2HffYum1cFYjDiIvhiW2vogIzBW9DXTTpANrl4XdY4qz9G8o",
    color: "Natural",
  },
  {
    id: 5,
    name: "Organic Footed Sleeper",
    category: "Clothes",
    price: 28,
    rating: 4.8,
    reviews: 42,
    badge: "Organic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc",
    color: "Sage",
  },
  {
    id: 6,
    name: "Reusable Cloth Diapers - 3 Pack",
    category: "Diapers",
    price: 45,
    rating: 4.9,
    reviews: 31,
    badge: "Eco-Friendly",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs",
    color: "Cloud White",
  },
  {
    id: 7,
    name: "Organic Bamboo Baby Wipes",
    category: "Diapers",
    price: 15,
    rating: 4.7,
    reviews: 108,
    badge: "Must-Have",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGoUAFWdiR1diKhfau28lQwJYrO3wMGx3DOKjs3y_hl6XXfaIOuCMTpPMLhgLgg8z7ouvpd8oucH3Kp--WPaDvE4ISV9Iwm64K3Zx0DDa8ya-YEdCsj5RLBp8z9Sbb8EehclVR25xDrCtt06nm0_0-KrPWGyXBl-q_cLDNfknxQh6oxAi5FuotxIJB52bsGGTrEZCVjrp5BnJ9HjpclUj8qRMg_-xY2bbwy7WSyL-h69nxsLllYjb61wOec5xbWWwOSZGz6jOywKM",
    color: "Natural",
  },
  {
    id: 8,
    name: "Glass Baby Bottles - 3 Pack",
    category: "Feeding",
    price: 29,
    rating: 4.8,
    reviews: 64,
    badge: "New",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k",
    color: "Cloud White",
  },
  {
    id: 9,
    name: "Silicone Pocket Bibs - 2 Pack",
    category: "Feeding",
    price: 18,
    rating: 4.9,
    reviews: 88,
    badge: "Washable",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k",
    color: "Blush",
  },
  {
    id: 10,
    name: "Stacking Wooden Rings",
    category: "Toys",
    price: 22,
    rating: 4.7,
    reviews: 49,
    badge: "Montessori",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6CAagMbiReQ5eEHO5zmh_6maBv1csYV6zbtK7T6EagnuU3eOTagyE4DAB-L66TCZi-R4U59QotVPGkYqu_XFQVqP6Siv-wtknOkiJzG24TmUgj_UqGsqlu-lik7Hc3gv7m-JzaSRa6llnX1mpcIeeySQZ2mSkw4e6pWBB3zl9FBKH6D7D2lgFxPtsDVrTfTCVrVbycDSxjTwDjeQsAHxhLOmWX2HffYum1cFYjDiIvhiW2vogIzBW9DXTTpANrl4XdY4qz9G8o",
    color: "Natural",
  },
  {
    id: 11,
    name: "Natural Baby Shampoo & Wash",
    category: "Bath",
    price: 14,
    rating: 4.6,
    reviews: 93,
    badge: "Tear-Free",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs",
    color: "Cloud White",
  },
  {
    id: 12,
    name: "Organic Cotton Hooded Towel",
    category: "Bath",
    price: 26,
    rating: 4.9,
    reviews: 52,
    badge: "Soft Touch",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc",
    color: "Blush",
  },
];

export const trustItems: TrustItem[] = [
  { id: "shipping", labelKey: "trustShipping", textKey: "trustShippingText", icon: Truck },
  { id: "curated", labelKey: "trustCurated", textKey: "trustCuratedText", icon: Sparkles },
  { id: "returns", labelKey: "trustReturns", textKey: "trustReturnsText", icon: PackageCheck },
  { id: "support", labelKey: "trustSupport", textKey: "trustSupportText", icon: HeartHandshake },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "khqr", labelKey: "payKhqr", textKey: "payKhqrText", icon: QrCode },
  { id: "card", labelKey: "payCard", textKey: "payCardText", icon: CreditCard },
  { id: "cod", labelKey: "payCod", textKey: "payCodText", icon: Banknote },
];

export const navItems = ["Clothes", "Diapers", "Feeding", "Toys", "Bath"];
export const cartCount = 2;
export const wishlistCount = 6;
export const bagIcon = ShoppingBag;
