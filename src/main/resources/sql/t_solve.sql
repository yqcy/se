/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-13 21:13:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_solve
-- ----------------------------
DROP TABLE IF EXISTS `t_solve`;
CREATE TABLE `t_solve` (
  `id` varchar(64) NOT NULL,
  `exception_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `solution` text COMMENT '解决方案',
  `create_date` datetime NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_solve
-- ----------------------------
