CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	price MONEY NOT NULL,
	stock INT NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT NOW(),
  last_updated TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products (name, price, stock) VALUES
('MacBook Pro', 50000, 20),
('Android Phone', 11000, 50),
('Soccer Ball', 300, 100);
