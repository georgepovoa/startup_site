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
-- Table structure for table `api_anexo2`
--

DROP TABLE IF EXISTS `api_anexo2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_anexo2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `show_name` varchar(255) NOT NULL,
  `grupo` varchar(150) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_anexo2_user_id_82dd1547` (`user_id`),
  CONSTRAINT `api_anexo2_user_id_82dd1547_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_anexo2`
--

LOCK TABLES `api_anexo2` WRITE;
/*!40000 ALTER TABLE `api_anexo2` DISABLE KEYS */;
INSERT INTO `api_anexo2` VALUES (1,'te','te','filho','anexo/Screenshot_from_2021-10-14_18-14-55.png','cf88,0,,,,0,,,',3),(3,'t2','t2','filho','anexo/Screenshot_from_2021-10-14_18-13-26_qdPW8dG.png','cf88,0,,,,0,,,',3),(4,'testeteste','testeteste','filho','anexo/Screenshot_from_2021-11-28_21-21-35.png','cf88,0,,,,0,,,',3),(5,'teste123','teste123','filho','anexo/Screenshot_from_2021-10-14_18-14-55_PkUfdzK.png','cf88,0,,,,0,,,',3),(6,'ad','ad','filho','anexo/asdasd.png','cf88,0,,,,0,,,',3),(7,'xsxs','xsxs','filho','anexo/Screenshot_from_2021-09-22_23-00-53.png','cf88,0,,,,0,,,',3),(8,'testeerrad','testeerrad','filho','anexo/Screenshot_from_2021-10-16_10-45-41.png','cf88,0,,,,0,,,',3),(9,'testandocert','testandocert','filho','anexo/Screenshot_from_2021-11-10_00-44-35.png','cf88,0,,,,0,,,',3),(10,'TESTELUKA','TESTELUKA','filho','anexo/Screenshot_from_2021-10-14_18-13-26_M7yBUSE.png','cf88,0,,,,0,,,',4);
/*!40000 ALTER TABLE `api_anexo2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-07 21:58:56
