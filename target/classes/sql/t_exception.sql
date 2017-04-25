/*
Navicat MySQL Data Transfer

Source Server         : CentOS7
Source Server Version : 50635
Source Host           : 10.63.64.129:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2017-04-07 13:59:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_exception
-- ----------------------------
DROP TABLE IF EXISTS `t_exception`;
CREATE TABLE `t_exception` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_class_name` varchar(1000) NOT NULL,
  `description` text,
  `create_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_update` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
