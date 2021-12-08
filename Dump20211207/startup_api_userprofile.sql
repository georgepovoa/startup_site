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
-- Table structure for table `api_userprofile`
--

DROP TABLE IF EXISTS `api_userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_userprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  `questoes_feitas` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `api_userprofile_user_id_5a1c1c92_fk_api_user_id` FOREIGN KEY (`user_id`) REFERENCES `api_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_userprofile`
--

LOCK TABLES `api_userprofile` WRITE;
/*!40000 ALTER TABLE `api_userprofile` DISABLE KEYS */;
INSERT INTO `api_userprofile` VALUES (2,'',4,''),(3,'',3,'[[965646, true, [\"@@@ n\\u00e3o @@@\", \"  Em\", \"  caso\", \"  de\", \"  iminente\", \"  perigo\", \"  p\\u00fablico,\", \"  autoridade\", \"  p\\u00fablica\", \"  competente\", \"  poder\\u00e1\", \"  usar\", \"  a\", \"  propriedade\", \"  particular,\", \"  desde\", \"  que\", \"  assegure\", \"  a\", \"  consequente\", \"  indeniza\\u00e7\\u00e3o,\", \"  independentemente\", \"  da\", \"  comprova\\u00e7\\u00e3o\", \"  da\", \"  exist\\u00eancia\", \"  de\", \"  dano,\", \"  que,\", \"  nesse\", \"  caso,\", \"  \\u00e9\", \"  presumido.\"]], [967373, true, [\"A\", \"cria\\u00e7\\u00e3o\", \"de\", \"associa\\u00e7\\u00f5es\", \"independe\", \"de\", \"autoriza\\u00e7\\u00e3o,\", \"sendo\", \"vedada\", \"a\", \"interfer\\u00eancia\", \"estatal\", \"em\", \"seu\", \"funcionamento.\"]], [967373, false, \"A cria\\u00e7\\u00e3o de associa\\u00e7\\u00f5es independe de autoriza\\u00e7\\u00e3o, sendo vedada a interfer\\u00eancia estatal em seu funcionamento.\"], [967372, true, [\"  A\", \"  liberdade\", \"  de\", \"  exerc\\u00edcio\", \"  profissional\", \"  \\u00e9\", \"@@@ limitada. @@@\"]], [967371, true, [\"  Constituem\", \"  objetivos\", \"@@@ n\\u00e3o @@@\", \"  fundamentais\", \"  da\", \"  Rep\\u00fablica\", \"  Federativa\", \"  do\", \"  Brasil\", \"  os\", \"  valores\", \"  sociais\", \"  do\", \"@@@ trabalho, @@@\", \"@@@ vida, @@@\", \"@@@ emprego @@@\", \"  e\", \"  da\", \"  livre\", \"  iniciativa.\"]], [967293, true, [\"Estrangeiros\", \"podem\", \"ser\", \"agentes\", \"p\\u00fablicos.\"]], [965650, true, [\"A\", \"seguran\\u00e7a\", \"vi\\u00e1ria\", \"compreende\", \"a\", \"educa\\u00e7\\u00e3o,\", \"a\", \"engenharia\", \"e\", \"a\", \"fiscaliza\\u00e7\\u00e3o\", \"de\", \"tr\\u00e2nsito,\", \"vetores\", \"que\", \"asseguram\", \"ao\", \"cidad\\u00e3o\", \"o\", \"direito\", \"\\u00e0\", \"mobilidade\", \"urbana\", \"eficiente.\"]], [965650, false, \"A seguran\\u00e7a vi\\u00e1ria compreende a educa\\u00e7\\u00e3o, a engenharia e a fiscaliza\\u00e7\\u00e3o de tr\\u00e2nsito, vetores que asseguram ao cidad\\u00e3o o direito \\u00e0 mobilidade urbana eficiente.\"]]'),(8,'',15,'[[965647, true, \"asdasdasdsad\"], [965646, true, \"etasdzxc\"], [967373, false, \"  A cria\\u00e7\\u00e3o de associa\\u00e7\\u00f5es independe de autoriza\\u00e7\\u00e3o, sendo vedada a interfer\\u00eancia estatal em seu funcionamento.\"], [967372, true, \"testestes\"], [967371, true, \"teste\"], [967293, true, \"teste\"], [965650, false, \"  A seguran\\u00e7a vi\\u00e1ria compreende a educa\\u00e7\\u00e3o, a engenharia e a fiscaliza\\u00e7\\u00e3o de tr\\u00e2nsito, vetores que asseguram ao cidad\\u00e3o o direito \\u00e0 mobilidade urbana eficiente.\"]]'),(9,'',16,'[[967373, false, \"  A cria\\u00e7\\u00e3o de associa\\u00e7\\u00f5es independe de autoriza\\u00e7\\u00e3o, sendo vedada a interfer\\u00eancia estatal em seu funcionamento.\"], [967372, true, \"teste3\"], [967371, true, \"teste2\"], [967293, true, \"teste1\"], [965650, false, \"  A seguran\\u00e7a vi\\u00e1ria compreende a educa\\u00e7\\u00e3o, a engenharia e a fiscaliza\\u00e7\\u00e3o de tr\\u00e2nsito, vetores que asseguram ao cidad\\u00e3o o direito \\u00e0 mobilidade urbana eficiente.\"]]');
/*!40000 ALTER TABLE `api_userprofile` ENABLE KEYS */;
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
