/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-16 22:19:06
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
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8;

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
INSERT INTO `t_exception_click` VALUES ('20', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:10:21', '1');
INSERT INTO `t_exception_click` VALUES ('21', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:10:21', '1');
INSERT INTO `t_exception_click` VALUES ('22', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:10:21', '1');
INSERT INTO `t_exception_click` VALUES ('23', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:10:22', '1');
INSERT INTO `t_exception_click` VALUES ('24', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:10:22', '1');
INSERT INTO `t_exception_click` VALUES ('25', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:10:32', '1');
INSERT INTO `t_exception_click` VALUES ('26', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:10:32', '1');
INSERT INTO `t_exception_click` VALUES ('27', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:10:32', '1');
INSERT INTO `t_exception_click` VALUES ('28', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:10:32', '1');
INSERT INTO `t_exception_click` VALUES ('29', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:10:32', '1');
INSERT INTO `t_exception_click` VALUES ('30', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:10:39', '1');
INSERT INTO `t_exception_click` VALUES ('31', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:10:39', '1');
INSERT INTO `t_exception_click` VALUES ('32', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:10:39', '1');
INSERT INTO `t_exception_click` VALUES ('33', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:10:39', '1');
INSERT INTO `t_exception_click` VALUES ('34', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-11 21:10:39', '1');
INSERT INTO `t_exception_click` VALUES ('35', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:21:44', '1');
INSERT INTO `t_exception_click` VALUES ('36', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:21:44', '1');
INSERT INTO `t_exception_click` VALUES ('37', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:21:44', '1');
INSERT INTO `t_exception_click` VALUES ('38', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:21:44', '1');
INSERT INTO `t_exception_click` VALUES ('39', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-11 21:21:45', '1');
INSERT INTO `t_exception_click` VALUES ('40', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:21:54', '1');
INSERT INTO `t_exception_click` VALUES ('41', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-05-11 21:21:54', '1');
INSERT INTO `t_exception_click` VALUES ('42', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-05-11 21:21:54', '1');
INSERT INTO `t_exception_click` VALUES ('43', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:21:54', '1');
INSERT INTO `t_exception_click` VALUES ('44', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:21:54', '1');
INSERT INTO `t_exception_click` VALUES ('45', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:21:56', '1');
INSERT INTO `t_exception_click` VALUES ('46', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-11 21:21:56', '1');
INSERT INTO `t_exception_click` VALUES ('47', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:21:56', '1');
INSERT INTO `t_exception_click` VALUES ('48', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:21:57', '1');
INSERT INTO `t_exception_click` VALUES ('49', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:21:57', '1');
INSERT INTO `t_exception_click` VALUES ('50', 'ea3bdd2d-6913-4a23-b66d-66d3ba5fbf48', '2017-05-11 21:21:58', '1');
INSERT INTO `t_exception_click` VALUES ('51', '5925502e-0110-41eb-b67b-51a369f00ce3', '2017-05-11 21:21:58', '1');
INSERT INTO `t_exception_click` VALUES ('52', 'ca1ec1e1-1b02-42a2-849c-a88eefbbde44', '2017-05-11 21:21:58', '1');
INSERT INTO `t_exception_click` VALUES ('53', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:22:02', '1');
INSERT INTO `t_exception_click` VALUES ('54', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-05-11 21:22:02', '1');
INSERT INTO `t_exception_click` VALUES ('55', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-05-11 21:22:02', '1');
INSERT INTO `t_exception_click` VALUES ('56', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:22:02', '1');
INSERT INTO `t_exception_click` VALUES ('57', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:22:02', '1');
INSERT INTO `t_exception_click` VALUES ('58', 'ea3bdd2d-6913-4a23-b66d-66d3ba5fbf48', '2017-05-11 21:22:04', '1');
INSERT INTO `t_exception_click` VALUES ('59', '5925502e-0110-41eb-b67b-51a369f00ce3', '2017-05-11 21:22:05', '1');
INSERT INTO `t_exception_click` VALUES ('60', 'ca1ec1e1-1b02-42a2-849c-a88eefbbde44', '2017-05-11 21:22:05', '1');
INSERT INTO `t_exception_click` VALUES ('61', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:22:06', '1');
INSERT INTO `t_exception_click` VALUES ('62', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-05-11 21:22:06', '1');
INSERT INTO `t_exception_click` VALUES ('63', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-05-11 21:22:06', '1');
INSERT INTO `t_exception_click` VALUES ('64', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:22:06', '1');
INSERT INTO `t_exception_click` VALUES ('65', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:22:06', '1');
INSERT INTO `t_exception_click` VALUES ('66', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:23:47', '1');
INSERT INTO `t_exception_click` VALUES ('67', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:23:47', '1');
INSERT INTO `t_exception_click` VALUES ('68', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:23:47', '1');
INSERT INTO `t_exception_click` VALUES ('69', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:23:47', '1');
INSERT INTO `t_exception_click` VALUES ('70', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:23:47', '1');
INSERT INTO `t_exception_click` VALUES ('71', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:29:10', '1');
INSERT INTO `t_exception_click` VALUES ('72', '0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', '2017-05-11 21:29:10', '1');
INSERT INTO `t_exception_click` VALUES ('73', '71548802-0181-4fda-b94c-de3b4a596e64', '2017-05-11 21:29:10', '1');
INSERT INTO `t_exception_click` VALUES ('74', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:29:10', '1');
INSERT INTO `t_exception_click` VALUES ('75', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:29:10', '1');
INSERT INTO `t_exception_click` VALUES ('76', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:45:36', '1');
INSERT INTO `t_exception_click` VALUES ('77', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:45:36', '1');
INSERT INTO `t_exception_click` VALUES ('78', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:45:36', '1');
INSERT INTO `t_exception_click` VALUES ('79', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:45:36', '1');
INSERT INTO `t_exception_click` VALUES ('80', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:45:36', '1');
INSERT INTO `t_exception_click` VALUES ('81', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:45:43', '1');
INSERT INTO `t_exception_click` VALUES ('82', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:45:43', '1');
INSERT INTO `t_exception_click` VALUES ('83', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:45:43', '1');
INSERT INTO `t_exception_click` VALUES ('84', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:45:43', '1');
INSERT INTO `t_exception_click` VALUES ('85', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:45:43', '1');
INSERT INTO `t_exception_click` VALUES ('86', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-11 21:46:05', '1');
INSERT INTO `t_exception_click` VALUES ('87', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-11 21:46:05', '1');
INSERT INTO `t_exception_click` VALUES ('88', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-11 21:46:05', '1');
INSERT INTO `t_exception_click` VALUES ('89', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-11 21:46:05', '1');
INSERT INTO `t_exception_click` VALUES ('90', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-11 21:46:05', '1');
INSERT INTO `t_exception_click` VALUES ('91', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-11 21:46:09', '1');
INSERT INTO `t_exception_click` VALUES ('92', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-11 21:46:09', '1');
INSERT INTO `t_exception_click` VALUES ('93', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-11 21:46:09', '1');
INSERT INTO `t_exception_click` VALUES ('94', 'ca1ec1e1-1b02-42a2-849c-a88eefbbde44', '2017-05-11 21:46:09', '1');
INSERT INTO `t_exception_click` VALUES ('95', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:36:27', '1');
INSERT INTO `t_exception_click` VALUES ('96', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-15 23:36:27', '1');
INSERT INTO `t_exception_click` VALUES ('97', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:36:28', '1');
INSERT INTO `t_exception_click` VALUES ('98', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-15 23:36:28', '1');
INSERT INTO `t_exception_click` VALUES ('99', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:36:28', '1');
INSERT INTO `t_exception_click` VALUES ('100', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:40:36', '1');
INSERT INTO `t_exception_click` VALUES ('101', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-15 23:40:36', '1');
INSERT INTO `t_exception_click` VALUES ('102', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:40:36', '1');
INSERT INTO `t_exception_click` VALUES ('103', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-15 23:40:36', '1');
INSERT INTO `t_exception_click` VALUES ('104', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:40:36', '1');
INSERT INTO `t_exception_click` VALUES ('105', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:49:03', '1');
INSERT INTO `t_exception_click` VALUES ('106', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-15 23:49:04', '1');
INSERT INTO `t_exception_click` VALUES ('107', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:49:04', '1');
INSERT INTO `t_exception_click` VALUES ('108', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-15 23:49:04', '1');
INSERT INTO `t_exception_click` VALUES ('109', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:49:04', '1');
INSERT INTO `t_exception_click` VALUES ('110', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:49:19', '1');
INSERT INTO `t_exception_click` VALUES ('111', '0e781fce-0eea-46ff-90bb-b11d298d2336', '2017-05-15 23:49:19', '1');
INSERT INTO `t_exception_click` VALUES ('112', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:49:19', '1');
INSERT INTO `t_exception_click` VALUES ('113', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-15 23:49:19', '1');
INSERT INTO `t_exception_click` VALUES ('114', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:49:19', '1');
INSERT INTO `t_exception_click` VALUES ('115', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:49:40', '1');
INSERT INTO `t_exception_click` VALUES ('116', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:49:40', '1');
INSERT INTO `t_exception_click` VALUES ('117', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-15 23:49:40', '1');
INSERT INTO `t_exception_click` VALUES ('118', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-15 23:49:40', '1');
INSERT INTO `t_exception_click` VALUES ('119', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:49:40', '1');
INSERT INTO `t_exception_click` VALUES ('120', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:51:04', '1');
INSERT INTO `t_exception_click` VALUES ('121', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:51:05', '1');
INSERT INTO `t_exception_click` VALUES ('122', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-15 23:51:05', '1');
INSERT INTO `t_exception_click` VALUES ('123', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-15 23:51:05', '1');
INSERT INTO `t_exception_click` VALUES ('124', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:51:05', '1');
INSERT INTO `t_exception_click` VALUES ('125', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:53:15', '1');
INSERT INTO `t_exception_click` VALUES ('126', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:53:16', '1');
INSERT INTO `t_exception_click` VALUES ('127', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-15 23:53:16', '1');
INSERT INTO `t_exception_click` VALUES ('128', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-15 23:53:16', '1');
INSERT INTO `t_exception_click` VALUES ('129', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:53:16', '1');
INSERT INTO `t_exception_click` VALUES ('130', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-15 23:54:40', '1');
INSERT INTO `t_exception_click` VALUES ('131', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-15 23:54:41', '1');
INSERT INTO `t_exception_click` VALUES ('132', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-15 23:54:41', '1');
INSERT INTO `t_exception_click` VALUES ('133', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-15 23:54:41', '1');
INSERT INTO `t_exception_click` VALUES ('134', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-15 23:54:41', '1');
INSERT INTO `t_exception_click` VALUES ('135', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:03:14', '1');
INSERT INTO `t_exception_click` VALUES ('136', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:03:14', '1');
INSERT INTO `t_exception_click` VALUES ('137', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:03:14', '1');
INSERT INTO `t_exception_click` VALUES ('138', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:03:15', '1');
INSERT INTO `t_exception_click` VALUES ('139', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:03:15', '1');
INSERT INTO `t_exception_click` VALUES ('140', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:08:50', '1');
INSERT INTO `t_exception_click` VALUES ('141', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:08:51', '1');
INSERT INTO `t_exception_click` VALUES ('142', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:08:51', '1');
INSERT INTO `t_exception_click` VALUES ('143', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:08:51', '1');
INSERT INTO `t_exception_click` VALUES ('144', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:08:51', '1');
INSERT INTO `t_exception_click` VALUES ('145', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:11:28', '1');
INSERT INTO `t_exception_click` VALUES ('146', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:11:28', '1');
INSERT INTO `t_exception_click` VALUES ('147', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:11:28', '1');
INSERT INTO `t_exception_click` VALUES ('148', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:11:28', '1');
INSERT INTO `t_exception_click` VALUES ('149', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:11:29', '1');
INSERT INTO `t_exception_click` VALUES ('150', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:12:17', '1');
INSERT INTO `t_exception_click` VALUES ('151', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:12:17', '1');
INSERT INTO `t_exception_click` VALUES ('152', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:12:17', '1');
INSERT INTO `t_exception_click` VALUES ('153', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:12:17', '1');
INSERT INTO `t_exception_click` VALUES ('154', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:12:17', '1');
INSERT INTO `t_exception_click` VALUES ('155', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:12:37', '1');
INSERT INTO `t_exception_click` VALUES ('156', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:12:37', '1');
INSERT INTO `t_exception_click` VALUES ('157', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:12:38', '1');
INSERT INTO `t_exception_click` VALUES ('158', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:12:38', '1');
INSERT INTO `t_exception_click` VALUES ('159', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:12:38', '1');
INSERT INTO `t_exception_click` VALUES ('160', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:12:43', '1');
INSERT INTO `t_exception_click` VALUES ('161', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:12:43', '1');
INSERT INTO `t_exception_click` VALUES ('162', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:12:43', '1');
INSERT INTO `t_exception_click` VALUES ('163', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:12:43', '1');
INSERT INTO `t_exception_click` VALUES ('164', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:12:43', '1');
INSERT INTO `t_exception_click` VALUES ('165', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:14:25', '1');
INSERT INTO `t_exception_click` VALUES ('166', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:14:26', '1');
INSERT INTO `t_exception_click` VALUES ('167', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:14:26', '1');
INSERT INTO `t_exception_click` VALUES ('168', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:14:26', '1');
INSERT INTO `t_exception_click` VALUES ('169', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:14:26', '1');
INSERT INTO `t_exception_click` VALUES ('170', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:16:10', '1');
INSERT INTO `t_exception_click` VALUES ('171', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:16:11', '1');
INSERT INTO `t_exception_click` VALUES ('172', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:16:11', '1');
INSERT INTO `t_exception_click` VALUES ('173', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:16:11', '1');
INSERT INTO `t_exception_click` VALUES ('174', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:16:11', '1');
INSERT INTO `t_exception_click` VALUES ('175', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:18:05', '1');
INSERT INTO `t_exception_click` VALUES ('176', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:18:05', '1');
INSERT INTO `t_exception_click` VALUES ('177', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:18:05', '1');
INSERT INTO `t_exception_click` VALUES ('178', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:18:05', '1');
INSERT INTO `t_exception_click` VALUES ('179', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:18:05', '1');
INSERT INTO `t_exception_click` VALUES ('180', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:18:14', '1');
INSERT INTO `t_exception_click` VALUES ('181', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:18:14', '1');
INSERT INTO `t_exception_click` VALUES ('182', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:18:14', '1');
INSERT INTO `t_exception_click` VALUES ('183', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:18:14', '1');
INSERT INTO `t_exception_click` VALUES ('184', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:18:15', '1');
INSERT INTO `t_exception_click` VALUES ('185', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 00:18:33', '1');
INSERT INTO `t_exception_click` VALUES ('186', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 00:18:33', '1');
INSERT INTO `t_exception_click` VALUES ('187', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:18:33', '1');
INSERT INTO `t_exception_click` VALUES ('188', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:18:33', '1');
INSERT INTO `t_exception_click` VALUES ('189', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:18:33', '1');
INSERT INTO `t_exception_click` VALUES ('190', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:18:54', '1');
INSERT INTO `t_exception_click` VALUES ('191', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:18:55', '1');
INSERT INTO `t_exception_click` VALUES ('192', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:18:55', '1');
INSERT INTO `t_exception_click` VALUES ('193', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:18:55', '1');
INSERT INTO `t_exception_click` VALUES ('194', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:18:55', '1');
INSERT INTO `t_exception_click` VALUES ('195', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:20:04', '1');
INSERT INTO `t_exception_click` VALUES ('196', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:20:05', '1');
INSERT INTO `t_exception_click` VALUES ('197', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:20:05', '1');
INSERT INTO `t_exception_click` VALUES ('198', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:20:05', '1');
INSERT INTO `t_exception_click` VALUES ('199', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:20:05', '1');
INSERT INTO `t_exception_click` VALUES ('200', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:22:38', '1');
INSERT INTO `t_exception_click` VALUES ('201', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:22:38', '1');
INSERT INTO `t_exception_click` VALUES ('202', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:22:38', '1');
INSERT INTO `t_exception_click` VALUES ('203', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:22:38', '1');
INSERT INTO `t_exception_click` VALUES ('204', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:22:38', '1');
INSERT INTO `t_exception_click` VALUES ('205', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:25:38', '1');
INSERT INTO `t_exception_click` VALUES ('206', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:25:39', '1');
INSERT INTO `t_exception_click` VALUES ('207', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:25:39', '1');
INSERT INTO `t_exception_click` VALUES ('208', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:25:39', '1');
INSERT INTO `t_exception_click` VALUES ('209', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:25:39', '1');
INSERT INTO `t_exception_click` VALUES ('210', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 00:29:23', '1');
INSERT INTO `t_exception_click` VALUES ('211', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 00:29:24', '1');
INSERT INTO `t_exception_click` VALUES ('212', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 00:29:25', '1');
INSERT INTO `t_exception_click` VALUES ('213', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 00:29:25', '1');
INSERT INTO `t_exception_click` VALUES ('214', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 00:29:25', '1');
INSERT INTO `t_exception_click` VALUES ('215', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 21:44:23', '1');
INSERT INTO `t_exception_click` VALUES ('216', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 21:44:24', '1');
INSERT INTO `t_exception_click` VALUES ('217', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 21:44:24', '1');
INSERT INTO `t_exception_click` VALUES ('218', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 21:44:24', '1');
INSERT INTO `t_exception_click` VALUES ('219', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 21:44:24', '1');
INSERT INTO `t_exception_click` VALUES ('220', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 21:53:52', '1');
INSERT INTO `t_exception_click` VALUES ('221', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 21:53:53', '1');
INSERT INTO `t_exception_click` VALUES ('222', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 21:53:53', '1');
INSERT INTO `t_exception_click` VALUES ('223', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 21:53:53', '1');
INSERT INTO `t_exception_click` VALUES ('224', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 21:53:53', '1');
INSERT INTO `t_exception_click` VALUES ('225', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 22:07:02', '1');
INSERT INTO `t_exception_click` VALUES ('226', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 22:07:03', '1');
INSERT INTO `t_exception_click` VALUES ('227', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 22:07:03', '1');
INSERT INTO `t_exception_click` VALUES ('228', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 22:07:03', '1');
INSERT INTO `t_exception_click` VALUES ('229', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 22:07:03', '1');
INSERT INTO `t_exception_click` VALUES ('230', '05e99671-aa3a-4482-a381-7f5ec293ec6d', '2017-05-16 22:12:15', '1');
INSERT INTO `t_exception_click` VALUES ('231', '0ac01481-35d3-47ac-a289-392192132155', '2017-05-16 22:12:16', '1');
INSERT INTO `t_exception_click` VALUES ('232', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 22:12:16', '1');
INSERT INTO `t_exception_click` VALUES ('233', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 22:12:16', '1');
INSERT INTO `t_exception_click` VALUES ('234', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 22:12:16', '1');
INSERT INTO `t_exception_click` VALUES ('235', '593d3654-e6a4-4dc5-bab3-69fdc6e2855a', '2017-05-16 22:13:44', '1');
INSERT INTO `t_exception_click` VALUES ('236', '96252be8-fa1d-4c52-8f96-2a966f7aff8d', '2017-05-16 22:13:44', '1');
INSERT INTO `t_exception_click` VALUES ('237', '8f37fc66-474e-4323-b0d8-e21962c056ca', '2017-05-16 22:13:44', '1');
INSERT INTO `t_exception_click` VALUES ('238', '3db4eea7-bc01-4473-8ce2-a51bb53b92d0', '2017-05-16 22:13:44', '1');
INSERT INTO `t_exception_click` VALUES ('239', '6bf6e8b8-a0c0-4869-a1ec-a36a10551175', '2017-05-16 22:13:44', '1');
