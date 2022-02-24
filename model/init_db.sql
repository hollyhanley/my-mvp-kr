DROP TABLE IF EXISTS mvp_users;
CREATE TABLE mvp_users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    pronouns VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(100),
    pricepoint VARCHAR(100),
    style_one VARCHAR(100)
);
INSERT INTO mvp_users (first_name, last_name, pronouns, email, city, pricepoint, style_one)
    VALUES ('Kezi', 'Rose', 'She/Her', 'email@email.com', NULL, NULL, NULL);


DROP TABLE IF EXISTS mvp_artists;
CREATE TABLE mvp_artists (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    pronouns VARCHAR(50),
    email VARCHAR(100),
    instagram VARCHAR(100),
    studio VARCHAR(100),
    city VARCHAR(100),
    pricepoint VARCHAR(100),
    style_one VARCHAR(100)
);
INSERT INTO mvp_artists (first_name, last_name, pronouns, email, instagram, studio, city, pricepoint, style_one)
    VALUES ('Indigo', 'Erlandsson', 'She/Her', 'email@email.com', '@indi_blue_tattoos', 'Independent Artist', 'London', '£150', 'Portrait');
    