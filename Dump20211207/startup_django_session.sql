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
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('0z6q7ih2jt73iprotkany6xcwmf712ld','.eJxVjDsOwjAQBe_iGlkm_sWU9DmDtbte4wCypTipEHeHSCmgfTPzXiLCtpa4dV7inMRFGHH63RDowXUH6Q711iS1ui4zyl2RB-1yaomf18P9OyjQy7cOGNASOa0S6aysJTSDZx_IYUIGH8AGdpgdDyorMOFsMGc_kgYcE4r3BwnEOS4:1mZyHh:4rdPQ2U_YgMpImPeIh_88b74YFKxN1qtd5O_OcHs0HA','2021-10-25 16:36:17.161901'),('18qfg6u7ssrd1los8kriet6kebd80s3d','.eJxVjMEOwiAQRP-FsyGUQgGP3vsNZNldpGrapLQn479bkh70OPPezFtE2LcS98prnEhcRS8uv10CfPLcAD1gvi8Sl3lbpySbIk9a5bgQv26n-3dQoJa2TkkrGoDBa8SsiXUOljwZgBAQnXEYup7Ze8e9HeyRSEHossoHM-LzBR0VOKg:1mXr9u:RkDlXhuuMWpWIAzouZsx4Q3G3EYcsJAPdQoxc-vJJQA','2021-10-19 20:35:30.619834'),('7uwotgj2jzi3a78ivsmrcs7z8qvpoakw','.eJxVjMEOwiAQRP-FsyGUQgGP3vsNZNldpGrapLQn479bkh70OPPezFtE2LcS98prnEhcRS8uv10CfPLcAD1gvi8Sl3lbpySbIk9a5bgQv26n-3dQoJa2TkkrGoDBa8SsiXUOljwZgBAQnXEYup7Ze8e9HeyRSEHossoHM-LzBR0VOKg:1msuX0:YwvZJ0ylSYtpxzK2TygUHjYcRoaNJh995en0Pw1JovQ','2021-12-16 22:26:22.306883'),('7zbt8yrv0knqqt53f9shh1nka3t2su3d','.eJxVjMEOwiAQRP-FsyGUQgGP3vsNZNldpGrapLQn479bkh70OPPezFtE2LcS98prnEhcRS8uv10CfPLcAD1gvi8Sl3lbpySbIk9a5bgQv26n-3dQoJa2TkkrGoDBa8SsiXUOljwZgBAQnXEYup7Ze8e9HeyRSEHossoHM-LzBR0VOKg:1mlGDa:td1cOGhRHZl-v0NMLJBCRsWR091sg6HvDaOZyOgwB8Q','2021-11-25 19:58:42.312462'),('jimy08o6ac4v3yghufj2c0ztd7y0lrnk','.eJxVjMEOwiAQRP-FsyGUQgGP3vsNZNldpGrapLQn479bkh70OPPezFtE2LcS98prnEhcRS8uv10CfPLcAD1gvi8Sl3lbpySbIk9a5bgQv26n-3dQoJa2TkkrGoDBa8SsiXUOljwZgBAQnXEYup7Ze8e9HeyRSEHossoHM-LzBR0VOKg:1mn2yf:DEtiINuT8ljAMORI09ZjBYdf28SnQkOWS_ALAH0Hm8I','2021-11-30 18:14:41.196529'),('p4v88ei9vi463lhq417la2lehccppamg','e30:1mlG2r:c-atcgclcKAVkHPLj5Fr_WOmmiwFpMbWRcF1-Io6C7E','2021-11-25 19:47:37.460358'),('t9rkwqhzvjmuzss5k3wrafca18yb32vm','.eJxVjMEOwiAQRP-FsyGUQgGP3vsNZNldpGrapLQn479bkh70OPPezFtE2LcS98prnEhcRS8uv10CfPLcAD1gvi8Sl3lbpySbIk9a5bgQv26n-3dQoJa2TkkrGoDBa8SsiXUOljwZgBAQnXEYup7Ze8e9HeyRSEHossoHM-LzBR0VOKg:1muNcw:40g2huep4nPtvwvuDx9m2SapTDTdA9Auo9n8yqXWbvc','2021-12-20 23:42:34.713585');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
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
