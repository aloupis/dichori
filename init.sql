CREATE DATABASE dichori WITH OWNER postgres;
CREATE TABLE usr(
  id serial PRIMARY KEY, 
  username VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL
);
CREATE TABLE post(
  id serial PRIMARY KEY, 
  title_gr VARCHAR(255) NOT NULL, 
  title_en VARCHAR(255) NOT NULL, 
  content_gr TEXT, 
  content_en TEXT, 
  summary_gr VARCHAR(255),
  summary_en VARCHAR(255),
  image_public_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL, 
  updated_at TIMESTAMP , 
  author_id INTEGER NOT NULL, 
  editor_id INTEGER, 
  FOREIGN KEY (author_id) REFERENCES usr (id), 
  FOREIGN KEY (editor_id) REFERENCES usr (id)
);
CREATE TABLE category(
  id serial PRIMARY KEY, 
  name_gr VARCHAR(255) NOT NULL, 
  name_en VARCHAR(255) NOT NULL, 
  description_gr TEXT, 
  description_en TEXT,
  summary_gr VARCHAR(255),
  summary_en VARCHAR(255),
  image_public_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL, 
  updated_at TIMESTAMP , 
  author_id INTEGER NOT NULL, 
  editor_id INTEGER, 
  FOREIGN KEY (author_id) REFERENCES usr (id), 
  FOREIGN KEY (editor_id) REFERENCES usr (id)
);
CREATE TABLE service(
  id serial PRIMARY KEY, 
  name_gr VARCHAR(255) NOT NULL, 
  name_en VARCHAR(255) NOT NULL, 
  content_gr TEXT, 
  content_en TEXT, 
  price DECIMAL,
  category_id INTEGER NOT NULL,
  summary_gr VARCHAR(255),
  summary_en VARCHAR(255),
  image_public_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL, 
  updated_at TIMESTAMP , 
  author_id INTEGER NOT NULL, 
  editor_id INTEGER, 
  FOREIGN KEY (category_id) REFERENCES category (id),
  FOREIGN KEY (author_id) REFERENCES usr (id), 
  FOREIGN KEY (editor_id) REFERENCES usr (id)
);
CREATE TABLE member(
  id serial PRIMARY KEY, 
  name_gr VARCHAR(255) NOT NULL, 
  name_en VARCHAR(255) NOT NULL, 
  description_gr TEXT, 
  description_en TEXT,
  summary_gr VARCHAR(255),
  summary_en VARCHAR(255),
  position_gr VARCHAR(255),
  position_en VARCHAR(255),
  image_public_id VARCHAR(255),
  created_at TIMESTAMP NOT NULL, 
  updated_at TIMESTAMP , 
  author_id INTEGER NOT NULL, 
  editor_id INTEGER, 
  FOREIGN KEY (author_id) REFERENCES usr (id), 
  FOREIGN KEY (editor_id) REFERENCES usr (id)
);
CREATE TABLE subscriber(
   id serial PRIMARY KEY, 
   email VARCHAR(255) NOT NULL
);
CREATE TABLE page(
  id serial PRIMARY KEY,
  title_en VARCHAR(255) NOT NULL, 
  title_gr VARCHAR(255) NOT NULL, 
  content_en TEXT,
  content_gr TEXT,
  image_public_id VARCHAR(255),
  url VARCHAR(255),
  created_at TIMESTAMP NOT NULL, 
  updated_at TIMESTAMP , 
  author_id INTEGER NOT NULL, 
  editor_id INTEGER, 
  FOREIGN KEY (author_id) REFERENCES usr (id), 
  FOREIGN KEY (editor_id) REFERENCES usr (id)
);

CREATE TABLE settings(
  id serial PRIMARY KEY, 
  header_menu_config JSONB,
  footer_menu_config JSONB,
  home_image_public_id VARCHAR(255),
  home_title_en VARCHAR(255), 
  home_title_gr VARCHAR(255), 
  home_content_en TEXT,
  home_content_gr TEXT
);

INSERT INTO settings(header_menu_config,footer_menu_config,home_title_en,home_title_gr,home_content_en,home_content_gr)
VALUES
  (
    '{"items":[]}','{"items":[]}','','','',''
  );



INSERT INTO usr(username, email, password) 
VALUES 
  (
    'a_loop_is', 'manos.aloupis@gmail.com', 
    '$2b$10$ahs7h0hNH8ffAVg6PwgovO3AVzn1izNFHn.su9gcJnUWUzb2Rcb2W' -- = ssseeeecrreeet
  );

  INSERT INTO usr(username, email, password) 
  VALUES 
    (
      'chupacabra', 'chupacabra026@gmail.com', 
      '$2b$10$ahs7h0hNH8ffAVg6PwgovO3AVzn1izNFHn.su9gcJnUWUzb2Rcb2W' -- = ssseeeecrreeet
    );
