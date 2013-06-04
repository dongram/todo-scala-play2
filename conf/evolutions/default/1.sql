# --- First database schema
# --- !Ups
CREATE TABLE `Todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(1) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

# --- !Downs
#DROP TABLE IF EXISTS `Todo`;