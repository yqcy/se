/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-10 22:58:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user_login
-- ----------------------------
DROP TABLE IF EXISTS `t_user_login`;
CREATE TABLE `t_user_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `login_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_login
-- ----------------------------
INSERT INTO `t_user_login` VALUES ('1', '1', '2017-05-10 22:31:47');
INSERT INTO `t_user_login` VALUES ('2', '1', '2017-05-10 22:33:10');
INSERT INTO `t_user_login` VALUES ('3', '1', '2017-05-10 22:42:38');
