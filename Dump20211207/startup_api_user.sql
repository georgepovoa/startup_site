-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: startup
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_user`
--

DROP TABLE IF EXISTS `api_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_user`
--

LOCK TABLES `api_user` WRITE;
/*!40000 ALTER TABLE `api_user` DISABLE KEYS */;
INSERT INTO `api_user` VALUES (3,'pbkdf2_sha256$216000$IHOgGIoopCLu$8cddLQ3Zykk2oRnMPlIozcjyQxixB5cdtXh3Wt0bCEQ=','2021-12-06 23:42:34.000000',1,'admin','admin',1,1,'2021-10-05 20:34:56.000000','admin','admin@admin.com'),(4,'pbkdf2_sha256$216000$VcVtqfDjbWVZ$uWu/+1aQ/6PL5I1XSgimRJceYI6k2e27ucrlnrMcUow=','2021-12-03 13:44:22.000000',0,'teste','teste',1,1,'2021-10-05 20:35:58.000000',NULL,'teste@teste.com'),(14,'pbkdf2_sha256$216000$Q8oCu5mhGWS7$Jgifrr5Fv0oQwv0Z5pa+JFJnbxllP3VG+qBQRwOCaCs=',NULL,0,'','',0,1,'2021-11-11 21:21:25.632231','t','t@t.com'),(15,'pbkdf2_sha256$216000$SYoLZkfcW9gN$yc5eem77agDMcNxeMcsSQ6z1iawuGu4Xo3F6898AFRc=','2021-11-11 21:22:03.613551',0,'','',0,1,'2021-11-11 21:22:03.257481','t2','t2@t2.com'),(16,'pbkdf2_sha256$216000$4LWVNS4H38NS$+i21d0a5lBuB/eXihWCcW1GykKdx7usC3rbQ3hCWKac=','2021-11-12 17:44:37.095353',0,'','',0,1,'2021-11-12 17:44:28.344964','luka','luka@teste.com');
/*!40000 ALTER TABLE `api_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-07 21:58:55
