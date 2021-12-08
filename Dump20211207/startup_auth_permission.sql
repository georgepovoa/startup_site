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
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add permission',1,'add_permission'),(2,'Can change permission',1,'change_permission'),(3,'Can delete permission',1,'delete_permission'),(4,'Can view permission',1,'view_permission'),(5,'Can add group',2,'add_group'),(6,'Can change group',2,'change_group'),(7,'Can delete group',2,'delete_group'),(8,'Can view group',2,'view_group'),(9,'Can add content type',3,'add_contenttype'),(10,'Can change content type',3,'change_contenttype'),(11,'Can delete content type',3,'delete_contenttype'),(12,'Can view content type',3,'view_contenttype'),(13,'Can add api titulos',4,'add_apititulos'),(14,'Can change api titulos',4,'change_apititulos'),(15,'Can delete api titulos',4,'delete_apititulos'),(16,'Can view api titulos',4,'view_apititulos'),(17,'Can add artigo',5,'add_artigo'),(18,'Can change artigo',5,'change_artigo'),(19,'Can delete artigo',5,'delete_artigo'),(20,'Can view artigo',5,'view_artigo'),(21,'Can add capitulos',6,'add_capitulos'),(22,'Can change capitulos',6,'change_capitulos'),(23,'Can delete capitulos',6,'delete_capitulos'),(24,'Can view capitulos',6,'view_capitulos'),(25,'Can add nivel2',7,'add_nivel2'),(26,'Can change nivel2',7,'change_nivel2'),(27,'Can delete nivel2',7,'delete_nivel2'),(28,'Can view nivel2',7,'view_nivel2'),(29,'Can add nivel3',8,'add_nivel3'),(30,'Can change nivel3',8,'change_nivel3'),(31,'Can delete nivel3',8,'delete_nivel3'),(32,'Can view nivel3',8,'view_nivel3'),(33,'Can add nivel4',9,'add_nivel4'),(34,'Can change nivel4',9,'change_nivel4'),(35,'Can delete nivel4',9,'delete_nivel4'),(36,'Can view nivel4',9,'view_nivel4'),(37,'Can add secao',10,'add_secao'),(38,'Can change secao',10,'change_secao'),(39,'Can delete secao',10,'delete_secao'),(40,'Can view secao',10,'view_secao'),(41,'Can add subsecao',11,'add_subsecao'),(42,'Can change subsecao',11,'change_subsecao'),(43,'Can delete subsecao',11,'delete_subsecao'),(44,'Can view subsecao',11,'view_subsecao'),(45,'Can add user',12,'add_user'),(46,'Can change user',12,'change_user'),(47,'Can delete user',12,'delete_user'),(48,'Can view user',12,'view_user'),(49,'Can add user profile',13,'add_userprofile'),(50,'Can change user profile',13,'change_userprofile'),(51,'Can delete user profile',13,'delete_userprofile'),(52,'Can view user profile',13,'view_userprofile'),(53,'Can add log entry',14,'add_logentry'),(54,'Can change log entry',14,'change_logentry'),(55,'Can delete log entry',14,'delete_logentry'),(56,'Can view log entry',14,'view_logentry'),(57,'Can add session',15,'add_session'),(58,'Can change session',15,'change_session'),(59,'Can delete session',15,'delete_session'),(60,'Can view session',15,'view_session'),(61,'Can add questao',16,'add_questao'),(62,'Can change questao',16,'change_questao'),(63,'Can delete questao',16,'delete_questao'),(64,'Can view questao',16,'view_questao'),(65,'Can add q_c_q',17,'add_q_c_q'),(66,'Can change q_c_q',17,'change_q_c_q'),(67,'Can delete q_c_q',17,'delete_q_c_q'),(68,'Can view q_c_q',17,'view_q_c_q'),(69,'Can add anexo',18,'add_anexo'),(70,'Can change anexo',18,'change_anexo'),(71,'Can delete anexo',18,'delete_anexo'),(72,'Can view anexo',18,'view_anexo'),(73,'Can add anexo2',19,'add_anexo2'),(74,'Can change anexo2',19,'change_anexo2'),(75,'Can delete anexo2',19,'delete_anexo2'),(76,'Can view anexo2',19,'view_anexo2');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
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
