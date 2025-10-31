-- create_database.sql
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE trouve_ton_artisan;

-- Table artisans
CREATE TABLE artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  ville VARCHAR(100) NOT NULL,
  metier VARCHAR(100) NOT NULL,
  note DECIMAL(2,1) DEFAULT 0.0,
  description TEXT,
  email VARCHAR(150),
  telephone VARCHAR(20)
);

-- Table messages (formulaire contact)
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  contenu TEXT NOT NULL,
  date_envoi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
