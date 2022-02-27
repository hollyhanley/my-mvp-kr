DROP TABLE IF EXISTS mvp_users;
CREATE TABLE mvp_users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    pronouns VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(100),
    style_one VARCHAR(100)
);
INSERT INTO mvp_users (first_name, last_name, pronouns, email, city, style_one)
    VALUES ('Kezi', 'Rose', 'She/Her', 'email@email.com', NULL, NULL);


DROP TABLE IF EXISTS mvp_artists;
CREATE TABLE mvp_artists (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    pronouns VARCHAR(50),
    profile_pic text,
    cover_photo text,
    email VARCHAR(100),
    instagram VARCHAR(100),
    studio VARCHAR(100),
    city VARCHAR(100),
    pricepoint VARCHAR(50),
    style_one VARCHAR(100)
);

DROP TABLE IF EXISTS user_faves;
CREATE TABLE user_faves (
    faves_id int NOT NULL,
    user_id int,
    fave_artists_id int,
    PRIMARY KEY (faves_id),
    FOREIGN KEY (user_id) REFERENCES mvp_users(id),
);


INSERT INTO mvp_artists (first_name, last_name, pronouns, profile_pic, cover_photo, email, instagram, studio, city, pricepoint, style_one)
    VALUES ('Indigo', 'Erlandsson', 'She/Her', 'https://media-exp1.licdn.com/dms/image/C5603AQEj7B8zFc0FyQ/profile-displayphoto-shrink_200_200/0/1562596081607?e=1649894400&v=beta&t=Qxja4Uxjwj-ErQuXZoatfVBiVQXMK71-VeBgl1vnlQY', 'https://www.thisiscolossal.com/wp-content/uploads/2020/07/michele_volpi_2.jpg', 'email@email.com', '@indi_blue_tattoos', 'Independent Artist', 'London', '£150', 'Fineline');

INSERT INTO mvp_artists (first_name, last_name, pronouns, email, instagram, studio, city, pricepoint, style_one)
    VALUES ('Samuel', 'Thomas', 'He/Him', 'email@email.com', '@sam_tattoos', 'Independent Artist', 'London', '£150', 'Neo-traditional');
    