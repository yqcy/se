/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-16 22:19:17
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
INSERT INTO `t_solve` VALUES ('1a61687f-7469-4d2b-8dab-a825900cf926', '1', '1', '\n				<p>在这里输入我的解决方案</p>\n			<p>5454443</p><p>43243</p>', '2017-05-14 22:47:11', '4', '0');
INSERT INTO `t_solve` VALUES ('3a613d04-e883-448e-862c-58dc942b2a63', '1', '1', '这是个神奇的异常，没有解决办法', '2017-05-13 22:29:42', '1', '0');
INSERT INTO `t_solve` VALUES ('3ddafd9e-2402-4fea-bb5b-ecb9f3c89af3', '', '', '', '2017-05-14 18:45:30', '0', '0');
INSERT INTO `t_solve` VALUES ('5370458b-ef00-47ca-be1a-3a11c38357fd', '', '', '', '2017-05-14 18:54:11', '0', '0');
INSERT INTO `t_solve` VALUES ('54f7b587-a36b-4e73-8213-a0bc8e497552', '1', '1', '\n				<p>在这里输入我的解决方案[偷笑]</p>\n			<p><br></p>', '2017-05-14 22:50:21', '3', '0');
INSERT INTO `t_solve` VALUES ('631acc0d-a204-47a3-91a6-27e90e01053d', '1', '1', null, '2017-05-13 22:28:31', '1', '0');
INSERT INTO `t_solve` VALUES ('846eae40-d8a9-4b69-a621-628a14e846ec', '1', '1', '\n				<p>在这里输入我的解决方案32121</p>', '2017-05-14 22:44:00', '0', '0');
INSERT INTO `t_solve` VALUES ('90bbec8f-c70e-4439-b5ed-55d3e7d7a878', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '1', '\n				<p><b>这是测试的解决方案，看行不行</b></p>\n			<p><br></p>', '2017-05-16 22:14:08', '2', '0');
INSERT INTO `t_solve` VALUES ('b1baeb36-9ae0-43ab-b819-163ad9352543', '1', '1', '\n				<p><b><u>在这里输入我的解决方案嘿嘿嘿</u></b></p>\n			<p><br></p>', '2017-05-14 22:51:19', '0', '0');
