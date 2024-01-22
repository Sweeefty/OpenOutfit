-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 10 jan. 2024 à 16:57
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `openoutfit`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id_avis` int NOT NULL AUTO_INCREMENT,
  `id_utilisateur` int NOT NULL,
  `id_produit` int NOT NULL,
  `note` int NOT NULL,
  `commentaire` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_avis`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id_categorie` int NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id_commande` int NOT NULL AUTO_INCREMENT,
  `id_utilisateur` int NOT NULL,
  `date_commande` datetime NOT NULL,
  `statut_commande` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_livraison` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `total_commande` decimal(65,0) NOT NULL,
  PRIMARY KEY (`id_commande`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `detail_de_la_commande`
--

DROP TABLE IF EXISTS `detail_de_la_commande`;
CREATE TABLE IF NOT EXISTS `detail_de_la_commande` (
  `id_detail_commande` int NOT NULL,
  `id_commande` int NOT NULL AUTO_INCREMENT,
  `id_produit` int NOT NULL,
  `quantite` int NOT NULL,
  `prix_unitaire` decimal(65,0) NOT NULL,
  PRIMARY KEY (`id_commande`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

DROP TABLE IF EXISTS `panier`;
CREATE TABLE IF NOT EXISTS `panier` (
  `id_arcticle_panier` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  `id_produit` int NOT NULL,
  `quantite` int NOT NULL,
  `prix` decimal(65,0) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `id_produit` int NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `prix` decimal(65,0) NOT NULL,
  `categorie` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `taille` varchar(6) COLLATE utf8mb4_general_ci NOT NULL,
  `couleur` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id_utilisateur` int NOT NULL AUTO_INCREMENT,
  `nom_utilisateur` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(12) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_mail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
