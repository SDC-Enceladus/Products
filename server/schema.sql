CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(255),
  description VARCHAR(500),
  category VARCHAR(50),
  default_price INTEGER
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  name VARCHAR(100) NOT NULL,
  value VARCHAR(100)
);

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  name VARCHAR(100) NOT NULL,
  sale_price INTEGER,
  original_price INTEGER,
  is_default BOOLEAN
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  url VARCHAR(255),
  thumbnail_url VARCHAR(255)
);

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER NOT NULL REFERENCES styles(id),
  size VARCHAR(50),
  quantity INTEGER
);

CREATE TABLE related_products (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER NOT NULL REFERENCES products(id),
  related_product_id INTEGER NOT NULL REFERENCES products(id)
);

CREATE INDEX idx_features_product_id ON features(product_id);
CREATE INDEX idx_styles_product_id ON styles(product_id);
CREATE INDEX idx_photos_style_id ON photos(style_id);
CREATE INDEX idx_skus_style_id ON skus(style_id);
CREATE INDEX idx_related_products_current_product_id ON related_products(current_product_id);
