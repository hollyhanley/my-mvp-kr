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
INSERT INTO mvp_artists (first_name, last_name, pronouns, profile_pic, cover_photo, email, instagram, studio, city, pricepoint, style_one)
    VALUES ('Indigo', 'Erlandsson', 'She/Her', 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80', 'https://i.pinimg.com/564x/3f/e3/3e/3fe33e59d0fc261e93dfd4e917bbf86a.jpg', 'email@email.com', '@indi_blue_tattoos', 'Independent Artist', 'London', '£150', 'Etching/ Woodcut'),

    ('Pebbles', 'Newman', 'They/Them', 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://i.pinimg.com/564x/db/27/ef/db27efdcb6e0a8b8293de486821d8abc.jpg', 'email@email.com', '@tatted_by_pebbles', 'Studio BB', 'London', '£120', 'Etching/ Woodcut'),

    ('Robbie', 'Lakes', 'He/Him', 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80', 'https://i.pinimg.com/564x/fe/a7/be/fea7bea56065af65b9c53412f4d98623.jpg', 'email@email.com', '@lakey_tattooer', 'The Warehouse Tattoo', 'London', '£120', 'Etching/ Woodcut'),

    ('Alex', 'Scruff', 'He/Him', 'https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://i.pinimg.com/564x/0b/1e/c9/0b1ec9727f20ca30927ba87cfcea6d8a.jpg', 'email@email.com', '@scruffytattz', 'Sixth Sense Tattoo', 'London', '£130', 'Etching/ Woodcut'),

    ('Sizzy', 'Hart', 'She/Her', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 'https://i.pinimg.com/564x/50/ee/e4/50eee47ca8a5a391746fcdf6d2ede1aa.jpg', 'email@email.com', '@sizzy_inks', 'Destiny Tattoo', 'London', '£130', 'Etching/ Woodcut'),

    ('Lainey', 'Birch', 'She/Her', 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80', 'https://i.pinimg.com/564x/21/88/78/21887844850854ece671039e6fcfd8d4.jpg', 'email@email.com', '@lainethepain', 'Independent Artist', 'London', '£100', 'Handpoke'),

    ('Mic', 'Dee', 'They/Them', 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 'https://i.pinimg.com/564x/f8/a0/ae/f8a0ae0968426b356b1565890182f666.jpg', 'email@email.com', '@micdeedoodah', 'Independent Artist', 'London', '£110', 'Handpoke'),

    ('Imogen', 'Faith', 'She/Her', 'https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://i.pinimg.com/564x/31/78/fc/3178fcb0f05c0d0f781aa68b7df08f4e.jpg', 'email@email.com', '@faith__tattoo', 'Independent Artist', 'London', '£110', 'Handpoke'),

    ('Vincenzo', 'Sala', 'He/Him', 'https://images.unsplash.com/photo-1583440012065-e99ad5f8f4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://i.pinimg.com/564x/31/ab/ee/31abee959d64f387884a927fe81abe0f.jpg', 'email@email.com', '@tattoo_vince', 'Peckham Tattoo Society', 'London', '£110', 'Handpoke'),

    ('Clare', 'Crogan', 'She/Her', 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80', 'https://i.pinimg.com/564x/c9/28/e0/c928e03975216262c7ef6e240309f8ff.jpg', 'email@email.com', '@croogz_tattoo', 'The Tram Shed', 'London', '£140', 'Black & Grey'),

    ('Joa', 'Mason', 'They/Them', 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.squarespace-cdn.com/content/v1/55c5135fe4b0620bb2eac464/1599774483546-LK2AVZIHC8UX6R25JLQR/fer%2Bneck%2Bflowers.jpg?format=750w', 'email@email.com', '@joa_tattooist', 'Independent Artist', 'London', '£130', 'Black & Grey'),

    ('Craig', 'Matthews', 'He/Him', 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', 'https://i.pinimg.com/564x/7e/02/8c/7e028ceeef708c25fb535f98f5e88ff6.jpg', 'email@email.com', '@craggles_ink', 'Two Pints Tattoo', 'Bristol', '£110', 'Neo-traditional'),

    ('Leo', 'Kasim', 'He/Him', 'https://images.unsplash.com/photo-1612454880232-826d7d321cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 'https://i.pinimg.com/564x/b6/16/9e/b6169e425897b9c086e90a3fe996803b.jpg', 'email@email.com', '@eloleo', 'Bristol Tattoo Tavern', 'Bristol', '£120', 'Neo-traditional'),

    ('Ella', 'Jones', 'She/Her', 'https://images.unsplash.com/photo-1529675804080-e12a8d5cef9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://byblacks.com/images/20200730_TigerTattoo_Blackownedtattoo_750x928_ByBlacks.jpg', 'email@email.com', '@elz_tatz', 'The Alchemist', 'Bristol', '£110', 'Neo-traditional'),

    ('Tom', 'Chen', 'He/Him', 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://i.pinimg.com/564x/28/c0/e8/28c0e84eb1eb5801701e915d0f827ce5.jpg', 'email@email.com', '@chenztattoo', 'Independent Artist', 'Bristol', '£100', 'Neo-traditional'),

    ('Karolina', 'Plasky', 'She/Her', 'https://images.unsplash.com/photo-1619365734050-cb5e64a42d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://i.pinimg.com/564x/85/77/f6/8577f6aa5c43c95e9a1151070f4e9e1f.jpg', 'email@email.com', '@kazzy_tattooer', 'Pretty Inked', 'Bristol', '£140', 'Neo-traditional');