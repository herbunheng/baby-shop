-- ==========================================
-- Lullaby Boutique Database Schema
-- Compatible with PostgreSQL and MySQL (Railway)
-- ==========================================

-- 1. Create Products Table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY, -- Use SERIAL for PostgreSQL; for MySQL use: id INT AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    rating DECIMAL(2, 1) DEFAULT 5.0,
    reviews INT DEFAULT 0,
    badge VARCHAR(100) DEFAULT NULL,
    image TEXT DEFAULT NULL,
    color VARCHAR(100) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert Initial Mock Products Data
INSERT INTO products (name, category, price, rating, reviews, badge, image, color) VALUES
('Organic Cotton Onesie', 'Clothes', 24.00, 4.8, 124, 'Best Seller', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs', 'Cloud White'),
('Bamboo Swaddle Set', 'Clothes', 38.00, 4.9, 96, 'New', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc', 'Blush'),
('Soft Silicone Feeding Kit', 'Feeding', 32.00, 4.7, 71, 'Eco', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k', 'Sage'),
('Wooden Sensory Rattle', 'Toys', 18.00, 4.6, 58, 'Gift', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6CAagMbiReQ5eEHO5zmh_6maBv1csYV6zbtK7T6EagnuU3eOTagyE4DAB-L66TCZi-R4U59QotVPGkYqu_XFQVqP6Siv-wtknOkiJzG24TmUgj_UqGsqlu-lik7Hc3gv7m-JzaSRa6llnX1mpcIeeySQZ2mSkw4e6pWBB3zl9FBKH6D7D2lgFxPtsDVrTfTCVrVbycDSxjTwDjeQsAHxhLOmWX2HffYum1cFYjDiIvhiW2vogIzBW9DXTTpANrl4XdY4qz9G8o', 'Natural'),
('Organic Footed Sleeper', 'Clothes', 28.00, 4.8, 42, 'Organic', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc', 'Sage'),
('Reusable Cloth Diapers - 3 Pack', 'Diapers', 45.00, 4.9, 31, 'Eco-Friendly', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs', 'Cloud White'),
('Organic Bamboo Baby Wipes', 'Diapers', 15.00, 4.7, 108, 'Must-Have', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGoUAFWdiR1diKhfau28lQwJYrO3wMGx3DOKjs3y_hl6XXfaIOuCMTpPMLhgLgg8z7ouvpd8oucH3Kp--WPaDvE4ISV9Iwm64K3Zx0DDa8ya-YEdCsj5RLBp8z9Sbb8EehclVR25xDrCtt06nm0_0-KrPWGyXBl-q_cLDNfknxQh6oxAi5FuotxIJB52bsGGTrEZCVjrp5BnJ9HjpclUj8qRMg_-xY2bbwy7WSyL-h69nxsLllYjb61wOec5xbWWwOSZGz6jOywKM', 'Natural'),
('Glass Baby Bottles - 3 Pack', 'Feeding', 29.00, 4.8, 64, 'New', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k', 'Cloud White'),
('Silicone Pocket Bibs - 2 Pack', 'Feeding', 18.00, 4.9, 88, 'Washable', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRFhmUEUjjhhs8HWFmZbkb5HE5pm_kCyEsnZL_vMfcXS38hrhKEiR8Zow8BwU8YyGh_us-inGl3mTp88v4kWWDTbXflFIcvv05o2IaemKRXmTrqgTSsFhJiqBYz-g6X5y-JaIPlSsERqrMzRCEifxSbKFGYPTg-k-VelAYrgXeOnEVWJ3anU4wgvKhY4RP8avJpj4eqHREJv27q42Fc79kfKY_frf_OQnz8JF5xcvPDTOPdd_83-8hz_TRjy9ZzvHjdhnF-EGhF1k', 'Blush'),
('Stacking Wooden Rings', 'Toys', 22.00, 4.7, 49, 'Montessori', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrH6CAagMbiReQ5eEHO5zmh_6maBv1csYV6zbtK7T6EagnuU3eOTagyE4DAB-L66TCZi-R4U59QotVPGkYqu_XFQVqP6Siv-wtknOkiJzG24TmUgj_UqGsqlu-lik7Hc3gv7m-JzaSRa6llnX1mpcIeeySQZ2mSkw4e6pWBB3zl9FBKH6D7D2lgFxPtsDVrTfTCVrVbycDSxjTwDjeQsAHxhLOmWX2HffYum1cFYjDiIvhiW2vogIzBW9DXTTpANrl4XdY4qz9G8o', 'Natural'),
('Natural Baby Shampoo & Wash', 'Bath', 14.00, 4.6, 93, 'Tear-Free', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcllp43uyrYglLT77HEWA8sUYsNolRyhcKjFWmQJdX2HOhLrI_MDgSLfpul0dksrbdNgmq-dB7ombPedC4E_qJfleOarWt1HMEkSGr70qgjMwnP_3rJifNGtiF0d29zCEPj5aJ_tYwaFWIZFR7jJqQFufRVmIsEwnPL8UXoqjJBU5Xt6XcCp4FhaaI-JklCcyvuxtHpjeniGrwu5_nRnJGwHfAZXvdThnngzjfbL_QVXHkUxRg5ZpxOy6FF8TwT5pPz0gRqNfQXKs', 'Cloud White'),
('Organic Cotton Hooded Towel', 'Bath', 26.00, 4.9, 52, 'Soft Touch', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLibqdtFcG0hzWkJqxDxQBjieUEELCmSIvNuvw6TMARuYnMdQZTde3I87G_5zxwZP5nQ-DCvnQ779NhkUNToeYlnVlmLcQ27OVP_ee78wWPWVtfUYteu7c50b5-gx-E_zt7gRdFSClUDB2GSEMScyLhE74sbGv5Nv88eJ5QCsrzP_mNQByXeduoITPeUdzjiCZTn_Phb7NMfM4y-CFsS6KHpFTMhcsTuXwt_jbTdaOK8hFrxZ99ZIwxO3JSl9Nl0_OmVfJfj28QBc', 'Blush');

-- 3. Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY, -- Use SERIAL for PostgreSQL; for MySQL use: id INT AUTO_INCREMENT PRIMARY KEY
    order_number VARCHAR(50) NOT NULL UNIQUE,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    delivery_address TEXT NOT NULL,
    delivery_city VARCHAR(100) NOT NULL,
    order_note TEXT DEFAULT NULL,
    payment_method VARCHAR(50) NOT NULL,
    order_total DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
