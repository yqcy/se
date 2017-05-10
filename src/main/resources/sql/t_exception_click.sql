/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-10 22:58:32
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_exception_click
-- ----------------------------
INSERT INTO `t_exception_click` VALUES ('1', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-01-01 21:36:55', '1');
INSERT INTO `t_exception_click` VALUES ('2', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-02-01 21:36:56', '1');
INSERT INTO `t_exception_click` VALUES ('3', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-03-01 21:36:56', '1');
INSERT INTO `t_exception_click` VALUES ('4', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-04-01 21:36:56', '1');
INSERT INTO `t_exception_click` VALUES ('5', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-08 21:36:56', '1');
INSERT INTO `t_exception_click` VALUES ('6', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-06-01 21:37:09', '1');
INSERT INTO `t_exception_click` VALUES ('7', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-07-01 21:37:09', '1');
INSERT INTO `t_exception_click` VALUES ('8', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-08-01 21:37:09', '1');
INSERT INTO `t_exception_click` VALUES ('9', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-09-01 21:37:09', '1');
INSERT INTO `t_exception_click` VALUES ('10', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-10-01 21:37:09', '1');
INSERT INTO `t_exception_click` VALUES ('11', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-11-01 21:37:16', '1');
INSERT INTO `t_exception_click` VALUES ('12', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-12-01 21:37:16', '1');
INSERT INTO `t_exception_click` VALUES ('13', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-08 21:37:16', '1');
INSERT INTO `t_exception_click` VALUES ('14', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-05-08 21:37:16', '1');
INSERT INTO `t_exception_click` VALUES ('15', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-09 23:20:04', '1');
INSERT INTO `t_exception_click` VALUES ('16', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-09 23:20:04', '1');
INSERT INTO `t_exception_click` VALUES ('17', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-09 23:20:04', '1');
INSERT INTO `t_exception_click` VALUES ('18', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-09 23:20:04', '1');
INSERT INTO `t_exception_click` VALUES ('19', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-09 23:20:04', '1');
