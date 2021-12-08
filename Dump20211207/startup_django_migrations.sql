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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-10-04 19:47:15.145271'),(3,'contenttypes','0002_remove_content_type_name','2021-10-04 19:52:29.376051'),(4,'auth','0001_initial','2021-10-04 19:52:30.745963'),(5,'auth','0002_alter_permission_name_max_length','2021-10-04 19:52:35.605329'),(6,'auth','0003_alter_user_email_max_length','2021-10-04 19:52:35.681488'),(7,'auth','0004_alter_user_username_opts','2021-10-04 19:52:35.740015'),(8,'auth','0005_alter_user_last_login_null','2021-10-04 19:52:35.824615'),(9,'auth','0006_require_contenttypes_0002','2021-10-04 19:52:35.903437'),(10,'auth','0007_alter_validators_add_error_messages','2021-10-04 19:52:35.974041'),(11,'auth','0008_alter_user_username_max_length','2021-10-04 19:52:36.032594'),(12,'auth','0009_alter_user_last_name_max_length','2021-10-04 19:52:36.116065'),(13,'auth','0010_alter_group_name_max_length','2021-10-04 19:52:36.288654'),(14,'auth','0011_update_proxy_permissions','2021-10-04 19:52:36.368085'),(15,'auth','0012_alter_user_first_name_max_length','2021-10-04 19:52:36.476406'),(23,'sessions','0001_initial','2021-10-04 19:54:00.151880'),(56,'api','0001_initial','2021-11-27 01:30:58.678783'),(57,'admin','0001_initial','2021-11-27 01:31:18.362636'),(58,'admin','0002_logentry_remove_auto_add','2021-11-27 01:31:18.442275'),(59,'admin','0003_logentry_add_action_flag_choices','2021-11-27 01:31:18.535408'),(60,'api','0002_auto_20211127_0133','2021-11-27 01:37:53.460639'),(61,'api','0003_auto_20211127_0136','2021-11-27 01:37:54.638076'),(62,'api','0004_auto_20211127_0212','2021-11-27 02:12:54.159486');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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
