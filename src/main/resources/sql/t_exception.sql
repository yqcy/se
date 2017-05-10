/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : se

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-10 22:58:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_exception
-- ----------------------------
DROP TABLE IF EXISTS `t_exception`;
CREATE TABLE `t_exception` (
  `id` varchar(64) CHARACTER SET utf8 NOT NULL,
  `full_class_name` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8,
  `create_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_update` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_exception
-- ----------------------------
INSERT INTO `t_exception` VALUES ('05bc20a8-f3a4-45a2-b96a-307cefc04e88', 'java.lang.Stack', '测试', '2017-04-26 23:31:00', null, '0', '1');
INSERT INTO `t_exception` VALUES ('05e99671-aa3a-4482-a381-7f5ec293ec6d', 'java.lang.NoPointException', '测试异常', '2017-04-29 20:57:27', null, '0', '1');
INSERT INTO `t_exception` VALUES ('09685328-d85d-40b6-a289-88ad3ac81a55', 'java.lang.NoPointException', '飞天空指针异常', '2017-04-29 20:52:34', null, '0', '1');
INSERT INTO `t_exception` VALUES ('0ac01481-35d3-47ac-a289-392192132155', 'java.lang.NoPointException123', '测度异常小', '2017-05-06 22:03:57', null, '0', '1');
INSERT INTO `t_exception` VALUES ('0e781fce-0eea-46ff-90bb-b11d298d2336', 'java.lang.NoPointException', '还是测试异常', '2017-05-01 11:47:28', null, '0', '1');
INSERT INTO `t_exception` VALUES ('0f657c2e-ed3e-4c4b-a5b3-94017b64ec35', 'java.lang.NoPointException', '非空', '2017-04-29 20:57:20', null, '0', '1');
INSERT INTO `t_exception` VALUES ('1', 'java.lang.NoPointException', '空指针异常', '2017-04-23 20:14:29', null, '0', '1');
INSERT INTO `t_exception` VALUES ('10', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:42:43', null, '0', '1');
INSERT INTO `t_exception` VALUES ('11', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:46:48', null, '0', '1');
INSERT INTO `t_exception` VALUES ('12', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:48:13', null, '0', '1');
INSERT INTO `t_exception` VALUES ('13', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:49:54', null, '0', '1');
INSERT INTO `t_exception` VALUES ('14', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:57:07', null, '0', '1');
INSERT INTO `t_exception` VALUES ('15', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:02:50', null, '0', '1');
INSERT INTO `t_exception` VALUES ('16', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:02:53', null, '0', '1');
INSERT INTO `t_exception` VALUES ('17', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:03:16', null, '0', '1');
INSERT INTO `t_exception` VALUES ('18', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:04:52', null, '0', '1');
INSERT INTO `t_exception` VALUES ('19', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:06:33', null, '0', '1');
INSERT INTO `t_exception` VALUES ('2', 'java.lang.NoPointException', '空指针异常', '2017-04-23 20:15:55', null, '0', '1');
INSERT INTO `t_exception` VALUES ('20', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:12:13', null, '0', '1');
INSERT INTO `t_exception` VALUES ('21', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:13:33', null, '0', '1');
INSERT INTO `t_exception` VALUES ('235cf1ed-80a8-4fd3-956e-f5e6452fa733', 'java.lang.OutOfMemery', '内存溢出虚拟机强行关闭', '2017-04-26 23:26:53', null, '0', '1');
INSERT INTO `t_exception` VALUES ('28a442be-c04a-4bb9-86be-94da51d8d3f6', 'java.lang.NoPointException', '空指针异常', '2017-04-26 22:55:01', null, '0', '1');
INSERT INTO `t_exception` VALUES ('2dd5040a-1060-489b-8126-d0b61ab17700', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:27:11', null, '0', '1');
INSERT INTO `t_exception` VALUES ('3', 'java.lang.NoPointException', '空指针异常', '2017-04-23 20:16:10', null, '0', '1');
INSERT INTO `t_exception` VALUES ('3430e6aa-b8a9-4e1a-bf4f-6b18cddf1bab', 'java.lang.Stack', '过滤器测试', '2017-04-26 23:34:10', null, '0', '1');
INSERT INTO `t_exception` VALUES ('3db4eea7-bc01-4473-8ce2-a51bb53b92d0', 'java.lang.NoPointException', '试试分页的异常', '2017-05-01 11:47:39', null, '0', '1');
INSERT INTO `t_exception` VALUES ('4', 'java.lang.NoPointException', '空指针异常', '2017-04-23 20:18:31', null, '0', '1');
INSERT INTO `t_exception` VALUES ('43ec06bd-16c7-4762-8073-39e5efe1441e', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:36:46', null, '0', '1');
INSERT INTO `t_exception` VALUES ('5', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:30:14', null, '0', '1');
INSERT INTO `t_exception` VALUES ('5925502e-0110-41eb-b67b-51a369f00ce3', 'java.lang.NoPointException123', '呵呵呵呆呆', '2017-05-06 22:32:24', null, '0', '1');
INSERT INTO `t_exception` VALUES ('593d3654-e6a4-4dc5-bab3-69fdc6e2855a', 'java.lang.NoPointException', '上天空指针异常', '2017-04-29 20:57:09', null, '0', '1');
INSERT INTO `t_exception` VALUES ('6', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:32:11', null, '0', '1');
INSERT INTO `t_exception` VALUES ('6521067f-be02-4a16-afe4-a918afd9e48b', 'java.lang.Stack', '好测试', '2017-04-26 23:31:20', null, '0', '1');
INSERT INTO `t_exception` VALUES ('6bf6e8b8-a0c0-4869-a1ec-a36a10551175', 'java.lang.NoPointException123', '测度异常小小', '2017-05-06 22:05:07', null, '0', '1');
INSERT INTO `t_exception` VALUES ('7', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:32:20', null, '0', '1');
INSERT INTO `t_exception` VALUES ('71548802-0181-4fda-b94c-de3b4a596e64', 'java.lang.NoPointException', '空指针', '2017-04-29 20:57:15', null, '0', '1');
INSERT INTO `t_exception` VALUES ('75c05173-5b14-4d0f-960b-bafb727b6a34', 'java.lang.NoPointException', '飞天空指针异常', '2017-04-29 20:20:07', null, '0', '1');
INSERT INTO `t_exception` VALUES ('7b17439e-0cd1-4da6-af2a-1fd43f2a1430', 'java.lang.Stack', '好测试', '2017-04-26 23:34:04', null, '0', '1');
INSERT INTO `t_exception` VALUES ('7be840df-cde1-481a-88dd-a2a1198d5280', 'java.lang.NoPointException', '空指针异常', '2017-04-26 23:06:35', null, '0', '1');
INSERT INTO `t_exception` VALUES ('8', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:32:30', null, '0', '1');
INSERT INTO `t_exception` VALUES ('808addf1-6d2f-47b1-9d8c-2316162e7439', 'java.lang.Stack', '测试2', '2017-04-26 23:31:14', null, '0', '1');
INSERT INTO `t_exception` VALUES ('89e63b65-db97-474a-8621-cfefbf5d090a', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:34:50', null, '0', '1');
INSERT INTO `t_exception` VALUES ('8f37fc66-474e-4323-b0d8-e21962c056ca', 'java.lang.NoPointException', '试试分页的异常2', '2017-05-01 11:55:10', null, '0', '1');
INSERT INTO `t_exception` VALUES ('9', 'java.lang.NoPointException', '空指针异常', '2017-04-23 22:39:55', null, '0', '1');
INSERT INTO `t_exception` VALUES ('94b1823f-985b-4bb8-b654-802c704717d1', 'java.lang.NoPointException', '测试空指针异常', '2017-04-29 20:15:06', null, '0', '1');
INSERT INTO `t_exception` VALUES ('96252be8-fa1d-4c52-8f96-2a966f7aff8d', 'java.lang.NoPointException', '下水空指针异常', '2017-04-29 20:57:02', null, '0', '1');
INSERT INTO `t_exception` VALUES ('a6293298-d98a-4e9e-834f-34df67d114e9', 'java.lang.NoPointException', '空指针异常', '2017-04-26 22:59:27', null, '0', '1');
INSERT INTO `t_exception` VALUES ('a799f7db-f9aa-4849-be3d-3476b64b6c15', 'java.lang.NoPointException', '空指针异常', '2017-04-26 23:12:24', null, '0', '1');
INSERT INTO `t_exception` VALUES ('c31b4f73-af92-473f-9e0e-a55fc29e5671', 'java.lang.NoPointException', '空指针异常', '2017-04-26 22:51:47', null, '0', '1');
INSERT INTO `t_exception` VALUES ('c3869074-08d9-42d7-90e8-d15e580cc9aa', 'java.lang.NoPointException', '空指针异常', '2017-04-26 23:20:52', null, '0', '1');
INSERT INTO `t_exception` VALUES ('ca1ec1e1-1b02-42a2-849c-a88eefbbde44', 'java.lang.NoPointException123', '呵呵呵呆呆异常', '2017-05-06 22:35:20', null, '0', '1');
INSERT INTO `t_exception` VALUES ('da9b8c44-6b97-4856-abc7-0c0ece36f8fe', 'java.lang.Stack', '栈溢出', '2017-04-26 23:27:26', null, '0', '1');
INSERT INTO `t_exception` VALUES ('dafec158-1183-4cd2-9bd1-d26f94dfb4c5', 'java.lang.NoPointException', '空指针异常', '2017-04-26 22:57:27', null, '0', '1');
INSERT INTO `t_exception` VALUES ('db0fe791-6604-4e5f-b000-0af9b5279e70', 'java.lang.Stack', '测试', '2017-04-26 23:28:38', null, '0', '1');
INSERT INTO `t_exception` VALUES ('dc66345a-96c5-42ef-a06f-feb20c1135f7', 'java.lang.OutOfMemery', '内存溢出虚拟机强行关闭', '2017-04-26 23:23:21', null, '0', '1');
INSERT INTO `t_exception` VALUES ('ea3bdd2d-6913-4a23-b66d-66d3ba5fbf48', 'java.lang.NoPointException123', '呵呵呵呆呆', '2017-05-06 22:32:05', null, '0', '1');
INSERT INTO `t_exception` VALUES ('eab21580-aefe-4ba3-867d-822d8d815e5f', 'java.lang.NoPointException', '空指针异常', '2017-04-26 23:04:59', null, '0', '1');
INSERT INTO `t_exception` VALUES ('eabe0bd9-21ea-4368-b7a1-45107065770d', 'java.lang.NoPointException', '空指针异常', '2017-04-23 23:27:06', null, '0', '1');
INSERT INTO `t_exception` VALUES ('ed345b15-8ad2-4dc4-8ce7-a19c16a50411', 'java.lang.NoPointException', '下水空指针异常', '2017-04-29 20:52:42', null, '0', '1');
INSERT INTO `t_exception` VALUES ('f3315019-9ace-4172-b672-b06aebdc5210', 'java.lang.NoPointException', '空指针异常', '2017-04-26 22:50:00', null, '0', '1');
