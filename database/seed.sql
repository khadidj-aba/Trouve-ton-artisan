-- seed.sql
USE trouve_ton_artisan;

INSERT INTO artisans (nom, ville, metier, note, description, email, telephone)
VALUES
('Jean Dupont', 'Lyon', 'Plombier', 4.8, 'Spécialiste en dépannage rapide et installation sanitaire.', 'jean.dupont@example.com', '0601020304'),
('Sophie Martin', 'Grenoble', 'Électricienne', 4.6, 'Travaux neufs et rénovation, devis gratuits.', 'sophie.martin@example.com', '0605060708'),
('Ali Ben', 'Clermont-Ferrand', 'Maçon', 4.7, 'Maçon expérimenté, plus de 15 ans d’expérience dans la région.', 'ali.ben@example.com', '0608091011'),
('Lucie Garnier', 'Annecy', 'Menuisière', 4.9, 'Création et rénovation de menuiseries sur mesure.', 'lucie.garnier@example.com', '0612131415');
