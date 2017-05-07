/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-07 19:40:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_exception_click
-- ----------------------------
DROP TABLE IF EXISTS `t_exception_click`;
CREATE TABLE `t_exception_click` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exception_id` varchar(64) NOT NULL COMMENT '异常主键',
  `create_date` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL COMMENT '点击用户的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
