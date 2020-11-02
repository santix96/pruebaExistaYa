-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2020 a las 15:48:30
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_existaya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heros`
--

CREATE TABLE `heros` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `url_more_information` varchar(255) DEFAULT NULL,
  `url_main_image` varchar(255) DEFAULT NULL,
  `positive_votes` int(11) DEFAULT NULL,
  `negative_votes` int(11) DEFAULT NULL,
  `city_creation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `heros`
--

INSERT INTO `heros` (`id`, `name`, `description`, `short_description`, `url_more_information`, `url_main_image`, `positive_votes`, `negative_votes`, `city_creation`, `createdAt`, `updatedAt`) VALUES
(1, 'Spiderman', ' Soy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Spiderman', 'Lo que seaaa', 'assets/images/SpiderMan.png', 20, 10, 'pereira', '2020-10-31 19:35:21', '2020-10-31 19:35:21'),
(2, 'Batman', ' Soy batman spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Batman', 'Lo que seaaa', 'assets/images/BatMan.png', 40, 30, 'manizales', '2020-10-31 19:37:52', '2020-10-31 19:37:52'),
(3, 'Superman', ' Soy superman spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Superman', 'Lo que seaaa', 'assets/images/SuperMan.png', 5, 2, 'bogota', '2020-10-31 19:38:18', '2020-10-31 19:38:18'),
(4, 'Ironman', ' Soy ironman spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Ironman', 'Lo que ironamn', 'assets/images/IronMan.png', 90, 20, 'barranquilla', '2020-10-31 19:39:23', '2020-10-31 19:39:23'),
(5, 'Thor', ' Soy thor spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Thor', 'Lo que thor', 'assets/images/Thor.png', 500, 20, 'cali', '2020-10-31 19:41:25', '2020-10-31 19:41:25'),
(6, 'Superchica', ' Soy thor superchica spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spidermanSoy spiderman', 'Superchica', 'Lo que thor', 'assets/images/SuperChica.jpg', 500, 20, 'cali', '2020-10-31 20:53:27', '2020-10-31 20:53:27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heros`
--
ALTER TABLE `heros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `heros`
--
ALTER TABLE `heros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
