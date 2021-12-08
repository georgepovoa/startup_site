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
-- Table structure for table `capitulos`
--

DROP TABLE IF EXISTS `capitulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `capitulos` (
  `id` int DEFAULT NULL,
  `lei` text,
  `titulo` int DEFAULT NULL,
  `texto` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capitulos`
--

LOCK TABLES `capitulos` WRITE;
/*!40000 ALTER TABLE `capitulos` DISABLE KEYS */;
INSERT INTO `capitulos` VALUES (0,'cf88',1,'CAPÍTULO I DOS DIREITOS E DEVERES INDIVIDUAIS E COLETIVOS'),(1,'cf88',1,'CAPÍTULO II DOS DIREITOS SOCIAIS'),(2,'cf88',1,'CAPÍTULO III DA NACIONALIDADE'),(3,'cf88',1,'CAPÍTULO IV DOS DIREITOS POLÍTICOS'),(4,'cf88',1,'CAPÍTULO V DOS PARTIDOS POLÍTICOS'),(5,'cf88',2,'CAPÍTULO I DA ORGANIZAÇÃO POLÍTICO-ADMINISTRATIVA'),(6,'cf88',2,'CAPÍTULO II DA UNIÃO'),(7,'cf88',2,'CAPÍTULO III DOS ESTADOS FEDERADOS'),(8,'cf88',2,'CAPÍTULO IV Dos Municípios'),(9,'cf88',2,'CAPÍTULO V DO DISTRITO FEDERAL E DOS TERRITÓRIOS'),(10,'cf88',2,'CAPÍTULO VI DA INTERVENÇÃO'),(11,'cf88',2,'CAPÍTULO VII DA ADMINISTRAÇÃO PÚBLICA'),(12,'cf88',3,'CAPÍTULO I DO PODER LEGISLATIVO'),(13,'cf88',3,'CAPÍTULO II DO PODER EXECUTIVO'),(14,'cf88',3,'CAPÍTULO III DO PODER JUDICIÁRIO'),(15,'cf88',3,'CAPÍTULO IV DAS FUNÇÕES ESSENCIAIS À JUSTIÇA (Redação dada pela Emenda Constitucional nº 80, de 2014)'),(16,'cf88',4,'CAPÍTULO I DO ESTADO DE DEFESA E DO ESTADO DE SÍTIO'),(17,'cf88',4,'CAPÍTULO II DAS FORÇAS ARMADAS'),(18,'cf88',4,'CAPÍTULO III DA SEGURANÇA PÚBLICA'),(19,'cf88',5,'CAPÍTULO I DO SISTEMA TRIBUTÁRIO NACIONAL'),(20,'cf88',5,'CAPÍTULO II DAS FINANÇAS PÚBLICAS'),(21,'cf88',6,'CAPÍTULO I DOS PRINCÍPIOS GERAIS DA ATIVIDADE ECONÔMICA'),(22,'cf88',6,'CAPÍTULO II DA POLÍTICA URBANA'),(23,'cf88',6,'CAPÍTULO III DA POLÍTICA AGRÍCOLA E FUNDIÁRIA E DA REFORMA AGRÁRIA'),(24,'cf88',6,'CAPÍTULO IV DO SISTEMA FINANCEIRO NACIONAL'),(25,'cf88',7,'CAPÍTULO I DISPOSIÇÃO GERAL'),(26,'cf88',7,'CAPÍTULO II DA SEGURIDADE SOCIAL'),(27,'cf88',7,'CAPÍTULO III DA EDUCAÇÃO, DA CULTURA E DO DESPORTO'),(28,'cf88',7,'CAPÍTULO IV DA CIÊNCIA, TECNOLOGIA E INOVAÇÃO (Redação dada pela Emenda Constitucional nº 85, de 2015)'),(29,'cf88',7,'CAPÍTULO V DA COMUNICAÇÃO SOCIAL'),(30,'cf88',7,'CAPÍTULO VI DO MEIO AMBIENTE'),(31,'cf88',7,'CAPÍTULO VII Da Família, da Criança, do Adolescente, do Jovem e do Idoso (Redação dada Pela Emenda Constitucional nº 65, de 2010)'),(32,'cf88',7,'CAPÍTULO VIII DOS ÍNDIOS');
/*!40000 ALTER TABLE `capitulos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-07 21:58:57