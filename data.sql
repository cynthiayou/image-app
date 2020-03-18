-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: image_app
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `imageId` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,7,'Spectacular!','2020-03-17 17:54:23','2020-03-17 17:54:23'),(2,1,7,'The second-tallest structure in Japan!','2020-03-17 17:55:32','2020-03-17 17:55:32'),(4,2,9,'I\'m hungry','2020-03-17 17:57:25','2020-03-17 17:57:25'),(5,1,9,'Yummy!','2020-03-17 17:57:35','2020-03-17 17:57:35'),(6,1,9,'Bite!','2020-03-17 20:10:56','2020-03-17 20:10:56'),(7,3,2,'Good morning!','2020-03-17 21:05:55','2020-03-17 21:05:55'),(8,3,5,'Spectacular!','2020-03-17 21:07:45','2020-03-17 21:07:45'),(9,2,1,'Have a wonderful day!','2020-03-18 01:36:23','2020-03-18 01:36:23'),(10,3,6,'The far end!','2020-03-18 01:39:23','2020-03-18 01:39:23'),(11,2,6,'The world is vast!','2020-03-18 01:39:47','2020-03-18 01:39:47'),(12,2,5,'I always love sun rise!','2020-03-18 01:40:09','2020-03-18 01:40:09'),(13,3,5,'A wonderful beginning to a new day!','2020-03-18 01:40:28','2020-03-18 01:40:28'),(14,1,1,'Are you having a good day?','2020-03-18 01:40:56','2020-03-18 01:40:56'),(15,3,1,'Every day is a new day!','2020-03-18 01:42:06','2020-03-18 01:42:06'),(16,3,2,'Wake up!','2020-03-18 01:42:27','2020-03-18 01:42:27');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,2,'Good Day','good_day.jpg','2020-03-17 03:29:25','2020-03-17 03:29:25'),(2,2,'Morning call','morning_call.jpg','2020-03-17 03:30:24','2020-03-17 03:30:24'),(5,1,'Sun rise','sunrise.jpg','2020-03-17 04:04:04','2020-03-17 04:04:04'),(6,1,'Till the end of the world','till_the_end.jpg','2020-03-17 04:05:51','2020-03-17 04:05:51'),(7,3,'Tokyo tower','tokyo_tower.jpg','2020-03-17 04:07:49','2020-03-17 04:07:49'),(8,3,'Tokyo taxi','tokyo_taxi.jpg','2020-03-17 04:16:32','2020-03-17 04:16:32'),(9,3,'Food','food.jpg','2020-03-17 05:12:58','2020-03-17 05:12:58'),(19,3,'Kyoto girl','kyoto_girl.jpg','2020-03-17 16:39:59','2020-03-17 16:39:59');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'cyny','test@gmail.com','$2a$12$gcCiRddXmpFph1qb/2RctuqjKn6gMZgLILnO4FRRhzaPgslOIp6qC','2020-03-15 22:44:34','2020-03-15 22:44:34'),(2,'leon','testleon@gmail.com','$2a$12$iTb8xc6jJ93Z60wYbVYilOWd8Q.aTXX1FqQ/jVdbxtXMkZ12G4Q4C','2020-03-16 00:26:15','2020-03-16 00:26:15'),(3,'lucas','testlucas@gmail.com','$2a$12$0dZ6fgxsSaKWbsWn9dJYIesRbxdLWnhdQLr6MY5kC.0m80Bgesexm','2020-03-16 00:29:40','2020-03-16 00:29:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-17 20:45:21
