-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 20 oct. 2023 à 10:05
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `job_advertisements`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

CREATE TABLE `advertisements` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `URL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `description`, `salary`, `location`, `created_at`, `updated_at`, `URL`) VALUES
(9, 'Programmer', 'Quisque interdum ex at vehicula ornare. Aliquam erat volutpat. Suspendisse ornare mi et ante accumsan dictum. Vivamus sit amet arcu a nisl luctus tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mollis malesuada leo non volutpat. Sed congue egestas magna, at rhoncus dolor dapibus auctor. Pellentesque a faucibus velit. Quisque eleifend nulla vitae metus posuere tempor. Vivamus tempus ultrices blandit. Sed ante augue, aliquet ac tempus vitae, commodo sit amet lacus. Cras lobortis, urna nec rhoncus varius, leo turpis ultricies nisl, vitae sollicitudin orci enim id sem. Sed fermentum bibendum varius.', 999999.00, 'USA', '2023-10-18 13:06:09', '2023-10-18 13:06:09', 'https://www.1min30.com/wp-content/uploads/2018/10/symbole-Thales.jpg'),
(10, 'Premsc', 'Curabitur in turpis porta erat euismod imperdiet ac sit amet lacus. Suspendisse potenti. Nullam blandit odio turpis, ac imperdiet nibh sollicitudin id. Etiam ultrices cursus est, vel pellentesque leo eleifend in. Maecenas leo lectus, rutrum vel sollicitudin nec, imperdiet nec nunc. Curabitur pellentesque vehicula molestie. Vivamus volutpat cursus augue sit amet fringilla. Pellentesque augue est, convallis in nisl in, pharetra lobortis leo. Aliquam sit amet sapien eu odio bibendum pretium in sit amet nisi. Ut elit lorem, imperdiet non risus sagittis, laoreet elementum turpis. Cras in odio est. Morbi egestas lectus accumsan odio dictum, eu facilisis massa dignissim. Praesent tincidunt mauris vel orci lobortis iaculis. In eget hendrerit dui. Donec suscipit justo turpis, non volutpat augue luctus vel. Vestibulum bibendum egestas mattis.\n\n', 988765.00, 'marseille', '2023-10-18 14:08:21', '2023-10-18 14:08:21', 'https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz');

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE `companies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `name`, `industry`, `location`, `email`, `password`, `token`, `url`) VALUES
(2, 'Thales', 'IT', 'France', 'thales@gmail.com', '$2y$10$QDz9s6.NrXryZRplGGBPb.e64VQ7RQJ/NBnbmif2BqK9nPJOES0Mq', 'a3689da07bc2c5292b230dae50ba21d9dddc750bada4273c5f9094a9f75c8af1440b1a5435224208717a21736ac8dd623c8f', ''),
(3, 'Thales', 'It', 'marseille', 'thales12@gmail.com', '$2y$10$9Nyxzwb1fC3nPuGTRdusq.wtyeCbp.2H16ry/dixt3HKFvdKivdgq', '713a314f2899f4ab5ab607ad448244cc2f60f5395a477eda55e791e26eb882558d0797bb2130b293fc2ace9724493299be15', ''),
(4, 'cake', 'food', 'usa', 'cake@gmail.com', '$2y$10$VDVPbZodLsnNPsFhuSykL.X63ACcwmPBEAtvNQZAMBKWp56kBtUbu', 'd2497092d751b49ef6e9a9843f5a33c069b5d024db0bd14fae7452a7752da630104dffbec9125a78abdc7a2147b03fa772ef', '');

-- --------------------------------------------------------

--
-- Structure de la table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` int(10) UNSIGNED NOT NULL,
  `advertisement_id` int(10) UNSIGNED NOT NULL,
  `person_id` int(10) UNSIGNED NOT NULL,
  `application_date` date NOT NULL,
  `email_sent` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

CREATE TABLE `people` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('user','admin') NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `people`
--

INSERT INTO `people` (`id`, `first_name`, `last_name`, `email`, `phone`, `role`, `password`, `token`) VALUES
(11, 'testPrenom', 'testNom', 'test@email.com', '0101010101', 'admin', '$2y$10$E9ieFxNlADdRjFOJnA/ckOkuKIHXbwzjuTJQ3dRr63kKE8ufUE4nG', '87497587286757485674575'),
(14, 'Alice', 'Smith', 'alice.smith@gmail.com', '1234567890', 'user', 'MotDePasse1', 'Token1'),
(15, 'Bob', 'Johnson', 'bob.johnson@yahoo.com', '9876543210', 'admin', 'MotDePasse2', 'Token2'),
(16, 'Charlie', 'Brown', 'charlie.brown@hotmail.com', '5555555555', '', 'MotDePasse3', 'Token3'),
(17, 'David', 'Lee', 'david.lee@gmail.com', '1112223333', 'user', 'MotDePasse4', 'Token4'),
(18, 'Eva', 'Garcia', 'eva.garcia@yahoo.com', '7778889999', '', 'MotDePasse5', 'Token5'),
(19, 'Fiona', 'Davis', 'fiona.davis@hotmail.com', '3336669999', 'user', 'MotDePasse6', 'Token6'),
(20, 'George', 'Wilson', 'george.wilson@gmail.com', '5556667777', 'admin', 'MotDePasse7', 'Token7'),
(21, 'Hannah', 'Moore', 'hannah.moore@yahoo.com', '2223334444', 'user', 'MotDePasse8', 'Token8'),
(22, 'Isaac', 'Anderson', 'isaac.anderson@hotmail.com', '1114447777', '', 'MotDePasse9', 'Token9'),
(23, 'Julia', 'Taylor', 'julia.taylor@gmail.com', '4447771111', 'user', 'MotDePasse10', 'Token10'),
(24, 'testprenom', 'qzdqzd', 'salddddut@root.fr', 'qzdqsqzdq', 'admin', '$2y$10$rrgAUhL14PFkqnaOqCH3EOpREV84WSLCmTDGt50cVXHPxqQidPdku', 'ptpgsiiv4n7tujmcd7ybe8lwb7068r2fdytsx60iukxp6cwokcul6ix3mo01mdqx9dfenl7pfkngiil9y2l7aos5p68uq4oxyfps'),
(25, 'hey', 'kjfd', 'kae@gmail.com', '766544', 'admin', '$2y$10$LWCcrPg8KISC83Jd58DWpeMYxqZBsGIQbj8mQyP1EGMrVPUa5a2dq', 'ca9ztug5g0628esprgx72m91aiseca11s0rjhjic6q60fq2u3y4e29ctc83h6sa9je52h1owic1yny40k8c6piw8npr5hn0as3vx'),
(26, 'kae', 'mrn', 'kae1@gmail.com', '06 38 04 44 18', 'admin', '$2y$10$ht8NRwfaiDxuyZSRYh/7MukXQkjMb5aUtJ6FYVOF2uQLfAttuoZSK', 'qc8wcz4hv8xbk8sgar28nmopt640fp4pc5li4pazibeiji9pintre1anuy6vfficw7lx34qgjpxq2hunxhvx3fw7vmioyc1y1xh7'),
(27, 'Max', 'Val', 'max@gmail.com', '9876', 'user', '$2y$10$xBtHfChtcn9J8ajLNkh8WuWkg26XeVUrxeVCRU33ce.12DJXrvhvi', 'k7o3ju9hxjc5pbxlck4jip5qvhh1eljwrdgc40g38uq79678n0csn5dsyjn0dxjstjk1tl1y2rmx3evn5dj48mykhdwshy38qqxj');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_id` (`person_id`),
  ADD KEY `advertisement_id` (`advertisement_id`);

--
-- Index pour la table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `job_applications`
--
ALTER TABLE `job_applications`
  ADD CONSTRAINT `job_applications_ibfk_1` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisements` (`id`),
  ADD CONSTRAINT `job_applications_ibfk_2` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`),
  ADD CONSTRAINT `job_applications_ibfk_3` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`),
  ADD CONSTRAINT `job_applications_ibfk_4` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisements` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
