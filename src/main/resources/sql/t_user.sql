/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-10 22:59:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(64) CHARACTER SET utf8 NOT NULL,
  `username` varchar(32) CHARACTER SET utf8 NOT NULL,
  `password` varchar(12) CHARACTER SET utf8 NOT NULL,
  `nickname` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 DEFAULT NULL,
  `create_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_username` (`username`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '111@q.com', '123456', '明天丶天晴', '18730032506', '2017-05-10 22:13:20', '1');
