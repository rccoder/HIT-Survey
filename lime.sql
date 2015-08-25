-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-08-25 09:12:16
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lime`
--

-- --------------------------------------------------------

--
-- 表的结构 `lime_answers`
--

CREATE TABLE IF NOT EXISTS `lime_answers` (
  `qid` int(11) NOT NULL DEFAULT '0',
  `code` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `answer` text COLLATE utf8_unicode_ci NOT NULL,
  `sortorder` int(11) NOT NULL,
  `assessment_value` int(11) NOT NULL DEFAULT '0',
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `scale_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`qid`,`code`,`language`,`scale_id`),
  KEY `answers_idx2` (`sortorder`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_answers`
--

INSERT INTO `lime_answers` (`qid`, `code`, `answer`, `sortorder`, `assessment_value`, `language`, `scale_id`) VALUES
(2, 'A1', '哈哈哈', 1, 0, 'zh-Hans', 0),
(2, 'A2', '呵呵呵', 2, 1, 'zh-Hans', 0),
(2, 'A3', '黑黑黑', 3, 1, 'zh-Hans', 0),
(2, 'A4', '要要要', 4, 1, 'zh-Hans', 0),
(3, 'A1', 'fffffffffff', 1, 0, 'zh-Hans', 0),
(3, 'A2', 'fffffffffffffffffffffffffff', 2, 1, 'zh-Hans', 0),
(3, 'A3', 'dddddddddddddd', 3, 1, 'zh-Hans', 0),
(3, 'A4', 'dddddddddd', 4, 1, 'zh-Hans', 0);

-- --------------------------------------------------------

--
-- 表的结构 `lime_assessments`
--

CREATE TABLE IF NOT EXISTS `lime_assessments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL DEFAULT '0',
  `scope` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `gid` int(11) NOT NULL DEFAULT '0',
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `minimum` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `maximum` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  PRIMARY KEY (`id`,`language`),
  KEY `assessments_idx2` (`sid`),
  KEY `assessments_idx3` (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_auditlog_log`
--

CREATE TABLE IF NOT EXISTS `lime_auditlog_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `uid` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `entity` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `entityid` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fields` text COLLATE utf8_unicode_ci,
  `oldvalues` text COLLATE utf8_unicode_ci,
  `newvalues` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=40 ;

--
-- 转存表中的数据 `lime_auditlog_log`
--

INSERT INTO `lime_auditlog_log` (`id`, `created`, `uid`, `entity`, `entityid`, `action`, `fields`, `oldvalues`, `newvalues`) VALUES
(1, '2015-08-18 12:45:29', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(2, '2015-08-18 12:45:55', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(3, '2015-08-18 12:46:23', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(4, '2015-08-18 12:47:38', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(5, '2015-08-18 12:48:03', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(6, '2015-08-18 13:49:04', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(7, '2015-08-25 11:09:31', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(8, '2015-08-25 11:13:17', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(9, '2015-08-25 11:14:21', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(10, '2015-08-25 11:17:01', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(11, '2015-08-25 11:27:33', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(12, '2015-08-25 11:36:57', '1', 'user', NULL, 'create', 'users_name,htmleditormode,templateeditormode,questionselectormode,dateformat,password,full_name,parent_id,email,created,uid,lang,one_time_pw,modified', '[]', '{"users_name":"rccoder","htmleditormode":"default","templateeditormode":"default","questionselectormode":"default","dateformat":1,"password":"*MASKED*PASSWORD*","full_name":"rccoder","parent_id":1,"email":"rccoder.net@gmail.com","created":{"expression":"NOW()","params":[]},"uid":null,"lang":"auto","one_time_pw":null,"modified":null}'),
(13, '2015-08-25 11:37:33', '1', 'permission', '0', 'update', 'participantpanel,labelsets,templates,users,usergroups,surveys,settings,superadmin,auth_db,auth_ldap,auth_webserver', '{"responses":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u53cd\\u9988","description":"\\u521b\\u5efa\\uff08\\u6570\\u636e\\u6761\\u76ee\\uff09\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u53cd\\u9988\\u7684\\u6743\\u9650","img":"browse"},"translations":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u5feb\\u901f\\u7ffb\\u8bd1","description":"\\u4f7f\\u7528\\u5feb\\u901f\\u7ffb\\u8bd1\\u7279\\u6027\\u6765\\u67e5\\u770b\\u548c\\u66f4\\u65b0\\u7ffb\\u8bd1\\u7684\\u6743\\u9650","img":"translate"},"tokens":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u64cd\\u4f5c\\u4ee3\\u7801","description":"\\u521b\\u5efa\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u64cd\\u4f5c\\u4ee3\\u7801\\u6761\\u76ee\\u7684\\u6743\\u9650","img":"tokens"},"statistics":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u7edf\\u8ba1","description":"\\u67e5\\u770b\\u7edf\\u8ba1\\u7684\\u6743\\u9650","img":"statistics"},"assessments":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8bc4\\u4ef7","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u8bc4\\u4ef7\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"assessments"},"surveycontent":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5185\\u5bb9","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u8c03\\u67e5\\u95ee\\u9898\\u3001\\u9898\\u7ec4\\u3001\\u56de\\u7b54\\u548c\\u6761\\u4ef6\\u7684\\u6743\\u9650","img":"add"},"survey":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5220\\u9664","description":"\\u5220\\u9664\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"delete"},"surveysecurity":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5b89\\u5168\\u6027","description":"\\u4fee\\u6539\\u8c03\\u67e5\\u5b89\\u5168\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_security"},"surveylocale":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20","description":"\\u6709\\u6743\\u9650\\u67e5\\u770b\\/\\u66f4\\u65b0\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20\\uff1a\\u8c03\\u67e5\\u6807\\u9898\\uff0c\\u8c03\\u67e5\\u63cf\\u8ff0\\uff0c\\u6b22\\u8fce\\u8bcd\\u548c\\u7ed3\\u675f\\u4fe1\\u606f...","img":"edit"},"surveyactivation":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6fc0\\u6d3b","description":"\\u6fc0\\u6d3b\\/\\u505c\\u7528\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"activate_deactivate"},"surveysettings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u8bbe\\u7f6e","description":"\\u67e5\\u770b\\/\\u66f4\\u65b0\\u5305\\u62ec\\u8868\\u683c\\u521b\\u5efa\\u5728\\u5185\\u7684\\u8c03\\u67e5\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_settings"},"quotas":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u914d\\u989d","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u914d\\u989d\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"quota"}}', '{"participantpanel":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"labelsets":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"templates":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"users":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"usergroups":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"surveys":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"settings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"superadmin":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_db":{"create":false,"read":true,"update":false,"delete":false,"import":false,"export":false},"auth_ldap":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_webserver":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false}}'),
(14, '2015-08-25 11:37:54', '1', 'user', '2', 'update', 'password,modified', '{"password":"*MASKED*OLD*PASSWORD*","modified":null}', '{"password":"*MASKED*NEW*PASSWORD*","modified":{"expression":"NOW()","params":[]}}'),
(15, '2015-08-25 11:38:04', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(16, '2015-08-25 11:38:13', '2', 'user', '2', 'afterSuccessfulLogin', NULL, NULL, NULL),
(17, '2015-08-25 11:38:25', '2', 'user', '2', 'beforeLogout', NULL, NULL, NULL),
(18, '2015-08-25 11:38:33', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(19, '2015-08-25 13:58:02', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(20, '2015-08-25 13:58:10', '2', 'user', '2', 'afterSuccessfulLogin', NULL, NULL, NULL),
(21, '2015-08-25 13:58:41', '2', 'user', '2', 'beforeLogout', NULL, NULL, NULL),
(22, '2015-08-25 13:58:51', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(23, '2015-08-25 13:59:20', '1', 'permission', '0', 'update', 'participantpanel,labelsets,templates,users,usergroups,surveys,settings,superadmin,auth_db,auth_ldap,auth_webserver', '{"responses":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u53cd\\u9988","description":"\\u521b\\u5efa\\uff08\\u6570\\u636e\\u6761\\u76ee\\uff09\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u53cd\\u9988\\u7684\\u6743\\u9650","img":"browse"},"translations":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u5feb\\u901f\\u7ffb\\u8bd1","description":"\\u4f7f\\u7528\\u5feb\\u901f\\u7ffb\\u8bd1\\u7279\\u6027\\u6765\\u67e5\\u770b\\u548c\\u66f4\\u65b0\\u7ffb\\u8bd1\\u7684\\u6743\\u9650","img":"translate"},"tokens":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u64cd\\u4f5c\\u4ee3\\u7801","description":"\\u521b\\u5efa\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u64cd\\u4f5c\\u4ee3\\u7801\\u6761\\u76ee\\u7684\\u6743\\u9650","img":"tokens"},"statistics":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u7edf\\u8ba1","description":"\\u67e5\\u770b\\u7edf\\u8ba1\\u7684\\u6743\\u9650","img":"statistics"},"assessments":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8bc4\\u4ef7","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u8bc4\\u4ef7\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"assessments"},"surveycontent":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5185\\u5bb9","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u8c03\\u67e5\\u95ee\\u9898\\u3001\\u9898\\u7ec4\\u3001\\u56de\\u7b54\\u548c\\u6761\\u4ef6\\u7684\\u6743\\u9650","img":"add"},"survey":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5220\\u9664","description":"\\u5220\\u9664\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"delete"},"surveysecurity":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5b89\\u5168\\u6027","description":"\\u4fee\\u6539\\u8c03\\u67e5\\u5b89\\u5168\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_security"},"surveylocale":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20","description":"\\u6709\\u6743\\u9650\\u67e5\\u770b\\/\\u66f4\\u65b0\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20\\uff1a\\u8c03\\u67e5\\u6807\\u9898\\uff0c\\u8c03\\u67e5\\u63cf\\u8ff0\\uff0c\\u6b22\\u8fce\\u8bcd\\u548c\\u7ed3\\u675f\\u4fe1\\u606f...","img":"edit"},"surveyactivation":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6fc0\\u6d3b","description":"\\u6fc0\\u6d3b\\/\\u505c\\u7528\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"activate_deactivate"},"surveysettings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u8bbe\\u7f6e","description":"\\u67e5\\u770b\\/\\u66f4\\u65b0\\u5305\\u62ec\\u8868\\u683c\\u521b\\u5efa\\u5728\\u5185\\u7684\\u8c03\\u67e5\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_settings"},"quotas":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u914d\\u989d","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u914d\\u989d\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"quota"}}', '{"participantpanel":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"labelsets":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"templates":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"users":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"usergroups":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"surveys":{"create":true,"read":true,"update":true,"delete":true,"import":false,"export":true},"settings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"superadmin":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_db":{"create":false,"read":true,"update":false,"delete":false,"import":false,"export":false},"auth_ldap":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_webserver":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false}}'),
(24, '2015-08-25 13:59:27', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(25, '2015-08-25 13:59:34', '2', 'user', '2', 'afterSuccessfulLogin', NULL, NULL, NULL),
(26, '2015-08-25 14:01:31', '2', 'permission', '188694', 'update', 'responses,translations,tokens,statistics,assessments,surveycontent,survey,surveysecurity,surveylocale,surveyactivation,surveysettings,quotas', '{"responses":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u53cd\\u9988","description":"\\u521b\\u5efa\\uff08\\u6570\\u636e\\u6761\\u76ee\\uff09\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u53cd\\u9988\\u7684\\u6743\\u9650","img":"browse"},"translations":{"read":false,"update":false,"title":"\\u5feb\\u901f\\u7ffb\\u8bd1","description":"\\u4f7f\\u7528\\u5feb\\u901f\\u7ffb\\u8bd1\\u7279\\u6027\\u6765\\u67e5\\u770b\\u548c\\u66f4\\u65b0\\u7ffb\\u8bd1\\u7684\\u6743\\u9650","img":"translate"},"tokens":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u64cd\\u4f5c\\u4ee3\\u7801","description":"\\u521b\\u5efa\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u64cd\\u4f5c\\u4ee3\\u7801\\u6761\\u76ee\\u7684\\u6743\\u9650","img":"tokens"},"statistics":{"read":false,"title":"\\u7edf\\u8ba1","description":"\\u67e5\\u770b\\u7edf\\u8ba1\\u7684\\u6743\\u9650","img":"statistics"},"assessments":{"create":false,"read":false,"update":false,"delete":false,"title":"\\u8bc4\\u4ef7","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u8bc4\\u4ef7\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"assessments"},"surveycontent":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5185\\u5bb9","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u8c03\\u67e5\\u95ee\\u9898\\u3001\\u9898\\u7ec4\\u3001\\u56de\\u7b54\\u548c\\u6761\\u4ef6\\u7684\\u6743\\u9650","img":"add"},"survey":{"read":false,"delete":false,"title":"\\u8c03\\u67e5\\u5220\\u9664","description":"\\u5220\\u9664\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"delete"},"surveysecurity":{"create":false,"read":false,"update":false,"delete":false,"title":"\\u8c03\\u67e5\\u5b89\\u5168\\u6027","description":"\\u4fee\\u6539\\u8c03\\u67e5\\u5b89\\u5168\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_security"},"surveylocale":{"read":false,"update":false,"title":"\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20","description":"\\u6709\\u6743\\u9650\\u67e5\\u770b\\/\\u66f4\\u65b0\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20\\uff1a\\u8c03\\u67e5\\u6807\\u9898\\uff0c\\u8c03\\u67e5\\u63cf\\u8ff0\\uff0c\\u6b22\\u8fce\\u8bcd\\u548c\\u7ed3\\u675f\\u4fe1\\u606f...","img":"edit"},"surveyactivation":{"update":false,"title":"\\u8c03\\u67e5\\u6fc0\\u6d3b","description":"\\u6fc0\\u6d3b\\/\\u505c\\u7528\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"activate_deactivate"},"surveysettings":{"read":false,"update":false,"title":"\\u8c03\\u67e5\\u8bbe\\u7f6e","description":"\\u67e5\\u770b\\/\\u66f4\\u65b0\\u5305\\u62ec\\u8868\\u683c\\u521b\\u5efa\\u5728\\u5185\\u7684\\u8c03\\u67e5\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_settings"},"quotas":{"create":false,"read":false,"update":false,"delete":false,"title":"\\u914d\\u989d","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u914d\\u989d\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"quota"}}', '{"responses":{"create":true,"read":true,"update":true,"delete":true,"import":true,"export":true},"translations":{"read":true,"update":true},"tokens":{"create":true,"read":true,"update":true,"delete":true,"import":true,"export":true},"statistics":{"read":true},"assessments":{"create":true,"read":true,"update":true,"delete":true},"surveycontent":{"create":true,"read":true,"update":true,"delete":true,"import":true,"export":true},"survey":{"read":true,"delete":true},"surveysecurity":{"create":true,"read":true,"update":true,"delete":true},"surveylocale":{"read":true,"update":true},"surveyactivation":{"update":true},"surveysettings":{"read":true,"update":true},"quotas":{"create":true,"read":true,"update":true,"delete":true}}'),
(27, '2015-08-25 14:32:59', '2', 'user', '2', 'beforeLogout', NULL, NULL, NULL),
(28, '2015-08-25 14:33:08', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(29, '2015-08-25 14:34:15', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(30, '2015-08-25 14:34:22', NULL, 'user', NULL, 'afterFailedLoginAttempt', NULL, NULL, '{"username":" admin"}'),
(31, '2015-08-25 14:34:29', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(32, '2015-08-25 14:35:03', '1', 'permission', '0', 'update', 'participantpanel,labelsets,templates,users,usergroups,surveys,settings,superadmin,auth_db,auth_ldap,auth_webserver', '{"responses":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u53cd\\u9988","description":"\\u521b\\u5efa\\uff08\\u6570\\u636e\\u6761\\u76ee\\uff09\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u53cd\\u9988\\u7684\\u6743\\u9650","img":"browse"},"translations":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u5feb\\u901f\\u7ffb\\u8bd1","description":"\\u4f7f\\u7528\\u5feb\\u901f\\u7ffb\\u8bd1\\u7279\\u6027\\u6765\\u67e5\\u770b\\u548c\\u66f4\\u65b0\\u7ffb\\u8bd1\\u7684\\u6743\\u9650","img":"translate"},"tokens":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u64cd\\u4f5c\\u4ee3\\u7801","description":"\\u521b\\u5efa\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u64cd\\u4f5c\\u4ee3\\u7801\\u6761\\u76ee\\u7684\\u6743\\u9650","img":"tokens"},"statistics":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u7edf\\u8ba1","description":"\\u67e5\\u770b\\u7edf\\u8ba1\\u7684\\u6743\\u9650","img":"statistics"},"assessments":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8bc4\\u4ef7","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u8bc4\\u4ef7\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"assessments"},"surveycontent":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5185\\u5bb9","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\/\\u5bfc\\u5165\\/\\u5bfc\\u51fa\\u8c03\\u67e5\\u95ee\\u9898\\u3001\\u9898\\u7ec4\\u3001\\u56de\\u7b54\\u548c\\u6761\\u4ef6\\u7684\\u6743\\u9650","img":"add"},"survey":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5220\\u9664","description":"\\u5220\\u9664\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"delete"},"surveysecurity":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u5b89\\u5168\\u6027","description":"\\u4fee\\u6539\\u8c03\\u67e5\\u5b89\\u5168\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_security"},"surveylocale":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20","description":"\\u6709\\u6743\\u9650\\u67e5\\u770b\\/\\u66f4\\u65b0\\u8c03\\u67e5\\u6587\\u672c\\u5143\\u7d20\\uff1a\\u8c03\\u67e5\\u6807\\u9898\\uff0c\\u8c03\\u67e5\\u63cf\\u8ff0\\uff0c\\u6b22\\u8fce\\u8bcd\\u548c\\u7ed3\\u675f\\u4fe1\\u606f...","img":"edit"},"surveyactivation":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u6fc0\\u6d3b","description":"\\u6fc0\\u6d3b\\/\\u505c\\u7528\\u8c03\\u67e5\\u7684\\u6743\\u9650","img":"activate_deactivate"},"surveysettings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u8c03\\u67e5\\u8bbe\\u7f6e","description":"\\u67e5\\u770b\\/\\u66f4\\u65b0\\u5305\\u62ec\\u8868\\u683c\\u521b\\u5efa\\u5728\\u5185\\u7684\\u8c03\\u67e5\\u8bbe\\u7f6e\\u7684\\u6743\\u9650","img":"survey_settings"},"quotas":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false,"title":"\\u914d\\u989d","description":"\\u521b\\u5efa\\/\\u67e5\\u770b\\/\\u66f4\\u65b0\\/\\u5220\\u9664\\u8c03\\u67e5\\u914d\\u989d\\u89c4\\u5219\\u7684\\u6743\\u9650","img":"quota"}}', '{"participantpanel":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"labelsets":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"templates":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"users":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"usergroups":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"surveys":{"create":true,"read":true,"update":true,"delete":false,"import":false,"export":true},"settings":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"superadmin":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_db":{"create":false,"read":true,"update":false,"delete":false,"import":false,"export":false},"auth_ldap":{"create":false,"read":false,"update":false,"delete":false,"import":false,"export":false},"auth_webserver":{"create":false,"read":true,"update":false,"delete":false,"import":false,"export":false}}'),
(33, '2015-08-25 14:35:08', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(34, '2015-08-25 14:35:15', '2', 'user', '2', 'afterSuccessfulLogin', NULL, NULL, NULL),
(35, '2015-08-25 14:44:54', '2', 'user', '2', 'beforeLogout', NULL, NULL, NULL),
(36, '2015-08-25 14:45:01', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(37, '2015-08-25 15:07:50', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL),
(38, '2015-08-25 15:08:00', '1', 'user', '1', 'afterSuccessfulLogin', NULL, NULL, NULL),
(39, '2015-08-25 15:09:52', '1', 'user', '1', 'beforeLogout', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lime_conditions`
--

CREATE TABLE IF NOT EXISTS `lime_conditions` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `qid` int(11) NOT NULL DEFAULT '0',
  `cqid` int(11) NOT NULL DEFAULT '0',
  `cfieldname` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `method` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `scenario` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cid`),
  KEY `conditions_idx2` (`qid`),
  KEY `conditions_idx3` (`cqid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_defaultvalues`
--

CREATE TABLE IF NOT EXISTS `lime_defaultvalues` (
  `qid` int(11) NOT NULL DEFAULT '0',
  `scale_id` int(11) NOT NULL DEFAULT '0',
  `sqid` int(11) NOT NULL DEFAULT '0',
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `specialtype` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `defaultvalue` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`qid`,`specialtype`,`language`,`scale_id`,`sqid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_expression_errors`
--

CREATE TABLE IF NOT EXISTS `lime_expression_errors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `errortime` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `gid` int(11) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  `gseq` int(11) DEFAULT NULL,
  `qseq` int(11) DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `eqn` text COLLATE utf8_unicode_ci,
  `prettyprint` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_failed_login_attempts`
--

CREATE TABLE IF NOT EXISTS `lime_failed_login_attempts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `last_attempt` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `number_attempts` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_groups`
--

CREATE TABLE IF NOT EXISTS `lime_groups` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL DEFAULT '0',
  `group_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `group_order` int(11) NOT NULL DEFAULT '0',
  `description` text COLLATE utf8_unicode_ci,
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `randomization_group` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `grelevance` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`gid`,`language`),
  KEY `groups_idx2` (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `lime_groups`
--

INSERT INTO `lime_groups` (`gid`, `sid`, `group_name`, `group_order`, `description`, `language`, `randomization_group`, `grelevance`) VALUES
(1, 916545, '选择题', 0, '这是选择题题组', 'zh-Hans', '', ''),
(2, 136962, '选择题问题组', 1, '这是选择题的问题组', 'zh-Hans', '', ''),
(3, 188694, '都是', 2, '', 'zh-Hans', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `lime_labels`
--

CREATE TABLE IF NOT EXISTS `lime_labels` (
  `lid` int(11) NOT NULL DEFAULT '0',
  `code` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `title` text COLLATE utf8_unicode_ci,
  `sortorder` int(11) NOT NULL,
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `assessment_value` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`lid`,`sortorder`,`language`),
  KEY `labels_code_idx` (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_labelsets`
--

CREATE TABLE IF NOT EXISTS `lime_labelsets` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `languages` varchar(200) COLLATE utf8_unicode_ci DEFAULT 'en',
  PRIMARY KEY (`lid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_old_survey_136962_20150825083529`
--

CREATE TABLE IF NOT EXISTS `lime_old_survey_136962_20150825083529` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) COLLATE utf8_unicode_ci DEFAULT NULL,
  `submitdate` datetime DEFAULT NULL,
  `lastpage` int(11) DEFAULT NULL,
  `startlanguage` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `136962X2X2` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `136962X2X2other` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_survey_token_136962_5230` (`token`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `lime_old_survey_136962_20150825083529`
--

INSERT INTO `lime_old_survey_136962_20150825083529` (`id`, `token`, `submitdate`, `lastpage`, `startlanguage`, `136962X2X2`, `136962X2X2other`) VALUES
(1, NULL, NULL, NULL, 'zh-Hans', NULL, NULL),
(2, NULL, NULL, NULL, 'zh-Hans', NULL, NULL),
(3, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A1', ''),
(4, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A1', ''),
(5, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A1', ''),
(6, NULL, NULL, 0, 'zh-Hans', NULL, NULL),
(7, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A1', ''),
(8, NULL, NULL, NULL, 'zh-Hans', NULL, NULL),
(9, NULL, NULL, NULL, 'zh-Hans', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lime_old_tokens_188694_20150825083936`
--

CREATE TABLE IF NOT EXISTS `lime_old_tokens_188694_20150825083936` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `participant_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` text COLLATE utf8_unicode_ci,
  `emailstatus` text COLLATE utf8_unicode_ci,
  `token` varchar(35) COLLATE utf8_unicode_ci DEFAULT NULL,
  `language` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blacklisted` varchar(17) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sent` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `remindersent` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `remindercount` int(11) DEFAULT '0',
  `completed` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usesleft` int(11) DEFAULT '1',
  `validfrom` datetime DEFAULT NULL,
  `validuntil` datetime DEFAULT NULL,
  `mpid` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`),
  KEY `idx_token_token_188694_13733` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_old_tokens_188694_20150825084023`
--

CREATE TABLE IF NOT EXISTS `lime_old_tokens_188694_20150825084023` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `participant_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` text COLLATE utf8_unicode_ci,
  `emailstatus` text COLLATE utf8_unicode_ci,
  `token` varchar(35) COLLATE utf8_unicode_ci DEFAULT NULL,
  `language` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blacklisted` varchar(17) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sent` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `remindersent` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `remindercount` int(11) DEFAULT '0',
  `completed` varchar(17) COLLATE utf8_unicode_ci DEFAULT 'N',
  `usesleft` int(11) DEFAULT '1',
  `validfrom` datetime DEFAULT NULL,
  `validuntil` datetime DEFAULT NULL,
  `mpid` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`),
  KEY `idx_token_token_188694_17914` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participants`
--

CREATE TABLE IF NOT EXISTS `lime_participants` (
  `participant_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(254) COLLATE utf8_unicode_ci DEFAULT NULL,
  `language` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `blacklisted` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `owner_uid` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`participant_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participant_attribute`
--

CREATE TABLE IF NOT EXISTS `lime_participant_attribute` (
  `participant_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`participant_id`,`attribute_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participant_attribute_names`
--

CREATE TABLE IF NOT EXISTS `lime_participant_attribute_names` (
  `attribute_id` int(11) NOT NULL,
  `attribute_type` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `defaultname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `visible` varchar(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participant_attribute_names_lang`
--

CREATE TABLE IF NOT EXISTS `lime_participant_attribute_names_lang` (
  `attribute_id` int(11) NOT NULL,
  `attribute_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`attribute_id`,`lang`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participant_attribute_values`
--

CREATE TABLE IF NOT EXISTS `lime_participant_attribute_values` (
  `value_id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_id` int(11) NOT NULL,
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`value_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_participant_shares`
--

CREATE TABLE IF NOT EXISTS `lime_participant_shares` (
  `participant_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `share_uid` int(11) NOT NULL,
  `date_added` datetime NOT NULL,
  `can_edit` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`participant_id`,`share_uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_permissions`
--

CREATE TABLE IF NOT EXISTS `lime_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entity` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `entity_id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `permission` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `create_p` int(11) NOT NULL DEFAULT '0',
  `read_p` int(11) NOT NULL DEFAULT '0',
  `update_p` int(11) NOT NULL DEFAULT '0',
  `delete_p` int(11) NOT NULL DEFAULT '0',
  `import_p` int(11) NOT NULL DEFAULT '0',
  `export_p` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idxPermissions` (`entity_id`,`entity`,`permission`,`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=46 ;

--
-- 转存表中的数据 `lime_permissions`
--

INSERT INTO `lime_permissions` (`id`, `entity`, `entity_id`, `uid`, `permission`, `create_p`, `read_p`, `update_p`, `delete_p`, `import_p`, `export_p`) VALUES
(1, 'global', 0, 1, 'superadmin', 0, 1, 0, 0, 0, 0),
(2, 'survey', 916545, 1, 'responses', 1, 1, 1, 1, 1, 1),
(3, 'survey', 916545, 1, 'translations', 0, 1, 1, 0, 0, 0),
(4, 'survey', 916545, 1, 'tokens', 1, 1, 1, 1, 1, 1),
(5, 'survey', 916545, 1, 'statistics', 0, 1, 0, 0, 0, 0),
(6, 'survey', 916545, 1, 'assessments', 1, 1, 1, 1, 0, 0),
(7, 'survey', 916545, 1, 'surveycontent', 1, 1, 1, 1, 1, 1),
(8, 'survey', 916545, 1, 'survey', 0, 1, 0, 1, 0, 0),
(9, 'survey', 916545, 1, 'surveysecurity', 1, 1, 1, 1, 0, 0),
(10, 'survey', 916545, 1, 'surveylocale', 0, 1, 1, 0, 0, 0),
(11, 'survey', 916545, 1, 'surveyactivation', 0, 0, 1, 0, 0, 0),
(12, 'survey', 916545, 1, 'surveysettings', 0, 1, 1, 0, 0, 0),
(13, 'survey', 916545, 1, 'quotas', 1, 1, 1, 1, 0, 0),
(14, 'survey', 136962, 1, 'responses', 1, 1, 1, 1, 1, 1),
(15, 'survey', 136962, 1, 'translations', 0, 1, 1, 0, 0, 0),
(16, 'survey', 136962, 1, 'tokens', 1, 1, 1, 1, 1, 1),
(17, 'survey', 136962, 1, 'statistics', 0, 1, 0, 0, 0, 0),
(18, 'survey', 136962, 1, 'assessments', 1, 1, 1, 1, 0, 0),
(19, 'survey', 136962, 1, 'surveycontent', 1, 1, 1, 1, 1, 1),
(20, 'survey', 136962, 1, 'survey', 0, 1, 0, 1, 0, 0),
(21, 'survey', 136962, 1, 'surveysecurity', 1, 1, 1, 1, 0, 0),
(22, 'survey', 136962, 1, 'surveylocale', 0, 1, 1, 0, 0, 0),
(23, 'survey', 136962, 1, 'surveyactivation', 0, 0, 1, 0, 0, 0),
(24, 'survey', 136962, 1, 'surveysettings', 0, 1, 1, 0, 0, 0),
(25, 'survey', 136962, 1, 'quotas', 1, 1, 1, 1, 0, 0),
(44, 'global', 0, 2, 'auth_db', 0, 1, 0, 0, 0, 0),
(27, 'template', 0, 2, 'default', 0, 1, 0, 0, 0, 0),
(43, 'global', 0, 2, 'surveys', 1, 1, 1, 0, 0, 1),
(31, 'survey', 188694, 2, 'responses', 1, 1, 1, 1, 1, 1),
(32, 'survey', 188694, 2, 'translations', 0, 1, 1, 0, 0, 0),
(33, 'survey', 188694, 2, 'tokens', 1, 1, 1, 1, 1, 1),
(34, 'survey', 188694, 2, 'statistics', 0, 1, 0, 0, 0, 0),
(35, 'survey', 188694, 2, 'assessments', 1, 1, 1, 1, 0, 0),
(36, 'survey', 188694, 2, 'surveycontent', 1, 1, 1, 1, 1, 1),
(37, 'survey', 188694, 2, 'survey', 0, 1, 0, 1, 0, 0),
(38, 'survey', 188694, 2, 'surveysecurity', 1, 1, 1, 1, 0, 0),
(39, 'survey', 188694, 2, 'surveylocale', 0, 1, 1, 0, 0, 0),
(40, 'survey', 188694, 2, 'surveyactivation', 0, 0, 1, 0, 0, 0),
(41, 'survey', 188694, 2, 'surveysettings', 0, 1, 1, 0, 0, 0),
(42, 'survey', 188694, 2, 'quotas', 1, 1, 1, 1, 0, 0),
(45, 'global', 0, 2, 'auth_webserver', 0, 1, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `lime_plugins`
--

CREATE TABLE IF NOT EXISTS `lime_plugins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `lime_plugins`
--

INSERT INTO `lime_plugins` (`id`, `name`, `active`) VALUES
(1, 'Authdb', 1),
(2, 'AuditLog', 1),
(3, 'ModulePlugin', 0),
(4, 'AuthLDAP', 0),
(5, 'Authwebserver', 1),
(6, 'ExportR', 0),
(7, 'ExportSTATAxml', 0),
(8, 'AuthCAS', 1);

-- --------------------------------------------------------

--
-- 表的结构 `lime_plugin_settings`
--

CREATE TABLE IF NOT EXISTS `lime_plugin_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plugin_id` int(11) NOT NULL,
  `model` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `model_id` int(11) DEFAULT NULL,
  `key` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `value` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- 转存表中的数据 `lime_plugin_settings`
--

INSERT INTO `lime_plugin_settings` (`id`, `plugin_id`, `model`, `model_id`, `key`, `value`) VALUES
(1, 8, NULL, NULL, 'casAuthServer', '"ids.hit.edu.cn"'),
(2, 8, NULL, NULL, 'casAuthPort', '"443"'),
(3, 8, NULL, NULL, 'casAuthUri', '"\\/authserver"'),
(4, 8, NULL, NULL, 'autoCreate', '"0"'),
(5, 8, NULL, NULL, 'server', 'null'),
(6, 8, NULL, NULL, 'ldapport', 'null'),
(7, 8, NULL, NULL, 'ldapversion', 'null'),
(8, 8, NULL, NULL, 'ldapoptreferrals', 'null'),
(9, 8, NULL, NULL, 'ldaptls', 'null'),
(10, 8, NULL, NULL, 'searchuserattribute', 'null'),
(11, 8, NULL, NULL, 'usersearchbase', 'null'),
(12, 8, NULL, NULL, 'extrauserfilter', 'null'),
(13, 8, NULL, NULL, 'binddn', 'null'),
(14, 8, NULL, NULL, 'bindpwd', 'null'),
(15, 2, 'Survey', 188694, 'auditing', '"0"'),
(16, 5, NULL, NULL, 'strip_domain', '"1"'),
(17, 5, NULL, NULL, 'serverkey', '"REMOTE_USER"'),
(18, 5, NULL, NULL, 'is_default', '"1"');

-- --------------------------------------------------------

--
-- 表的结构 `lime_questions`
--

CREATE TABLE IF NOT EXISTS `lime_questions` (
  `qid` int(11) NOT NULL AUTO_INCREMENT,
  `parent_qid` int(11) NOT NULL DEFAULT '0',
  `sid` int(11) NOT NULL DEFAULT '0',
  `gid` int(11) NOT NULL DEFAULT '0',
  `type` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'T',
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `question` text COLLATE utf8_unicode_ci NOT NULL,
  `preg` text COLLATE utf8_unicode_ci,
  `help` text COLLATE utf8_unicode_ci,
  `other` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `mandatory` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `question_order` int(11) NOT NULL,
  `language` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `scale_id` int(11) NOT NULL DEFAULT '0',
  `same_default` int(11) NOT NULL DEFAULT '0' COMMENT 'Saves if user set to use the same default value across languages in default options dialog',
  `relevance` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`qid`,`language`),
  KEY `questions_idx2` (`sid`),
  KEY `questions_idx3` (`gid`),
  KEY `questions_idx4` (`type`),
  KEY `parent_qid_idx` (`parent_qid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `lime_questions`
--

INSERT INTO `lime_questions` (`qid`, `parent_qid`, `sid`, `gid`, `type`, `title`, `question`, `preg`, `help`, `other`, `mandatory`, `question_order`, `language`, `scale_id`, `same_default`, `relevance`) VALUES
(1, 0, 916545, 1, 'T', 'Q1', '这是第一个问题', '', '这是一个帮助', 'N', 'N', 1, 'zh-Hans', 0, 0, '1'),
(2, 0, 136962, 2, 'L', 'Q1', '这是一份问卷调查吗？请选择', '', '', 'Y', 'Y', 1, 'zh-Hans', 0, 0, '1'),
(3, 0, 188694, 3, 'L', 'Q1', '鬼打鬼', '', 'dasdas', 'N', 'N', 1, 'zh-Hans', 0, 0, '1');

-- --------------------------------------------------------

--
-- 表的结构 `lime_question_attributes`
--

CREATE TABLE IF NOT EXISTS `lime_question_attributes` (
  `qaid` int(11) NOT NULL AUTO_INCREMENT,
  `qid` int(11) NOT NULL DEFAULT '0',
  `attribute` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `language` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`qaid`),
  KEY `question_attributes_idx2` (`qid`),
  KEY `question_attributes_idx3` (`attribute`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_quota`
--

CREATE TABLE IF NOT EXISTS `lime_quota` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `qlimit` int(11) DEFAULT NULL,
  `action` int(11) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  `autoload_url` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `quota_idx2` (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_quota_languagesettings`
--

CREATE TABLE IF NOT EXISTS `lime_quota_languagesettings` (
  `quotals_id` int(11) NOT NULL AUTO_INCREMENT,
  `quotals_quota_id` int(11) NOT NULL DEFAULT '0',
  `quotals_language` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `quotals_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quotals_message` text COLLATE utf8_unicode_ci NOT NULL,
  `quotals_url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quotals_urldescrip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`quotals_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_quota_members`
--

CREATE TABLE IF NOT EXISTS `lime_quota_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  `quota_id` int(11) DEFAULT NULL,
  `code` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sid` (`sid`,`qid`,`quota_id`,`code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_saved_control`
--

CREATE TABLE IF NOT EXISTS `lime_saved_control` (
  `scid` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL DEFAULT '0',
  `srid` int(11) NOT NULL DEFAULT '0',
  `identifier` text COLLATE utf8_unicode_ci NOT NULL,
  `access_code` text COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ip` text COLLATE utf8_unicode_ci NOT NULL,
  `saved_thisstep` text COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `saved_date` datetime NOT NULL,
  `refurl` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`scid`),
  KEY `saved_control_idx2` (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_sessions`
--

CREATE TABLE IF NOT EXISTS `lime_sessions` (
  `id` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `expire` int(11) DEFAULT NULL,
  `data` longblob,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_settings_global`
--

CREATE TABLE IF NOT EXISTS `lime_settings_global` (
  `stg_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `stg_value` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`stg_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_settings_global`
--

INSERT INTO `lime_settings_global` (`stg_name`, `stg_value`) VALUES
('DBVersion', '182'),
('SessionName', '2:XkVQz=:>Up#!sQ$Jtw#z%.6F@iA,4vYz].c7+WuoWks''PtslsLZC.Y;Z<v\\rjL'),
('sitename', '哈工大调查问卷网'),
('siteadminname', 'Administrator'),
('siteadminemail', 'your-email@example.net'),
('siteadminbounce', 'your-email@example.net'),
('defaultlang', 'zh-Hans'),
('updateversions', '{"master":{"build":"150731","versionnumber":"2.06+","branch":"master","created":"2015-07-31 10:50:39"}}'),
('updateavailable', '1'),
('updatebuild', '150731'),
('updateversion', '2.06+'),
('updatelastcheck', '2015-08-12 13:40:35'),
('restrictToLanguages', 'zh-Hans'),
('updatecheckperiod', '0'),
('updatenotification', ''),
('defaulthtmleditormode', 'inline'),
('defaultquestionselectormode', 'default'),
('defaulttemplateeditormode', 'default'),
('defaulttemplate', 'default'),
('admintheme', 'gringegreen'),
('adminthemeiconsize', '32'),
('emailmethod', 'mail'),
('emailsmtphost', 'localhost'),
('emailsmtppassword', 'enteredpassword'),
('bounceaccounthost', ''),
('bounceaccounttype', 'off'),
('bounceencryption', 'off'),
('bounceaccountuser', ''),
('emailsmtpssl', ''),
('emailsmtpdebug', '0'),
('emailsmtpuser', 'admin'),
('filterxsshtml', '1'),
('shownoanswer', '1'),
('showxquestions', 'choose'),
('showgroupinfo', 'choose'),
('showqnumcode', 'choose'),
('repeatheadings', '25'),
('maxemails', '50'),
('iSessionExpirationTime', '7200'),
('ipInfoDbAPIKey', ''),
('pdffontsize', '9'),
('pdfshowheader', 'N'),
('pdflogowidth', '50'),
('pdfheadertitle', ''),
('pdfheaderstring', ''),
('googleMapsAPIKey', ''),
('googleanalyticsapikey', ''),
('googletranslateapikey', ''),
('force_ssl', 'neither'),
('surveyPreview_require_Auth', '1'),
('RPCInterface', 'off'),
('rpc_publish_api', ''),
('timeadjust', '+0 minutes'),
('usercontrolSameGroupPolicy', '1');

-- --------------------------------------------------------

--
-- 表的结构 `lime_surveys`
--

CREATE TABLE IF NOT EXISTS `lime_surveys` (
  `sid` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `admin` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `expires` datetime DEFAULT NULL,
  `startdate` datetime DEFAULT NULL,
  `adminemail` varchar(254) COLLATE utf8_unicode_ci DEFAULT NULL,
  `anonymized` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `faxto` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `format` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `savetimings` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `template` varchar(100) COLLATE utf8_unicode_ci DEFAULT 'default',
  `language` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `additional_languages` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datestamp` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `usecookie` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `allowregister` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `allowsave` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `autonumber_start` int(11) NOT NULL DEFAULT '0',
  `autoredirect` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `allowprev` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `printanswers` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `ipaddr` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `refurl` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `datecreated` date DEFAULT NULL,
  `publicstatistics` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `publicgraphs` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `listpublic` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `htmlemail` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `sendconfirmation` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `tokenanswerspersistence` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `assessments` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `usecaptcha` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `usetokens` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `bounce_email` varchar(254) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attributedescriptions` text COLLATE utf8_unicode_ci,
  `emailresponseto` text COLLATE utf8_unicode_ci,
  `emailnotificationto` text COLLATE utf8_unicode_ci,
  `tokenlength` int(11) NOT NULL DEFAULT '15',
  `showxquestions` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'Y',
  `showgroupinfo` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'B',
  `shownoanswer` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'Y',
  `showqnumcode` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'X',
  `bouncetime` int(11) DEFAULT NULL,
  `bounceprocessing` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `bounceaccounttype` varchar(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bounceaccounthost` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bounceaccountpass` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bounceaccountencryption` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bounceaccountuser` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `showwelcome` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'Y',
  `showprogress` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'Y',
  `questionindex` int(11) NOT NULL DEFAULT '0',
  `navigationdelay` int(11) NOT NULL DEFAULT '0',
  `nokeyboard` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `alloweditaftercompletion` varchar(1) COLLATE utf8_unicode_ci DEFAULT 'N',
  `googleanalyticsstyle` varchar(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `googleanalyticsapikey` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_surveys`
--

INSERT INTO `lime_surveys` (`sid`, `owner_id`, `admin`, `active`, `expires`, `startdate`, `adminemail`, `anonymized`, `faxto`, `format`, `savetimings`, `template`, `language`, `additional_languages`, `datestamp`, `usecookie`, `allowregister`, `allowsave`, `autonumber_start`, `autoredirect`, `allowprev`, `printanswers`, `ipaddr`, `refurl`, `datecreated`, `publicstatistics`, `publicgraphs`, `listpublic`, `htmlemail`, `sendconfirmation`, `tokenanswerspersistence`, `assessments`, `usecaptcha`, `usetokens`, `bounce_email`, `attributedescriptions`, `emailresponseto`, `emailnotificationto`, `tokenlength`, `showxquestions`, `showgroupinfo`, `shownoanswer`, `showqnumcode`, `bouncetime`, `bounceprocessing`, `bounceaccounttype`, `bounceaccounthost`, `bounceaccountpass`, `bounceaccountencryption`, `bounceaccountuser`, `showwelcome`, `showprogress`, `questionindex`, `navigationdelay`, `nokeyboard`, `alloweditaftercompletion`, `googleanalyticsstyle`, `googleanalyticsapikey`) VALUES
(916545, 1, 'Administrator', 'Y', '2015-08-17 06:31:38', NULL, 'your-email@example.net', 'N', '', 'A', 'N', 'default', 'zh-Hans', '', 'N', 'N', 'N', 'Y', 0, 'N', 'N', 'N', 'N', 'N', '2015-08-12', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'N', 'N', 'your-email@example.net', NULL, '', '', 15, 'Y', 'B', 'Y', 'X', NULL, 'N', NULL, NULL, NULL, NULL, NULL, 'Y', 'Y', 0, 0, 'N', 'N', '0', ''),
(136962, 1, 'Administrator', 'Y', NULL, NULL, 'your-email@example.net', 'N', '', 'G', 'N', 'default', 'zh-Hans', '', 'N', 'N', 'N', 'Y', 10, 'N', 'N', 'N', 'N', 'N', '2015-08-17', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'N', 'N', 'your-email@example.net', NULL, '', '', 15, 'Y', 'B', 'Y', 'X', NULL, 'N', NULL, NULL, NULL, NULL, NULL, 'Y', 'Y', 0, 0, 'N', 'N', '0', ''),
(188694, 2, 'rccoder', 'Y', NULL, NULL, 'rccoder.net@gmail.com', 'N', '', 'G', 'N', 'default', 'zh-Hans', '', 'N', 'N', 'N', 'Y', 0, 'N', 'N', 'N', 'N', 'N', '2015-08-25', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'R', 'N', 'rccoder.net@gmail.com', NULL, '', '', 15, 'Y', 'B', 'Y', 'X', NULL, 'N', NULL, NULL, NULL, NULL, NULL, 'Y', 'Y', 0, 0, 'N', 'N', '0', '');

-- --------------------------------------------------------

--
-- 表的结构 `lime_surveys_languagesettings`
--

CREATE TABLE IF NOT EXISTS `lime_surveys_languagesettings` (
  `surveyls_survey_id` int(11) NOT NULL,
  `surveyls_language` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `surveyls_title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `surveyls_description` text COLLATE utf8_unicode_ci,
  `surveyls_welcometext` text COLLATE utf8_unicode_ci,
  `surveyls_endtext` text COLLATE utf8_unicode_ci,
  `surveyls_url` text COLLATE utf8_unicode_ci,
  `surveyls_urldescription` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surveyls_email_invite_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surveyls_email_invite` text COLLATE utf8_unicode_ci,
  `surveyls_email_remind_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surveyls_email_remind` text COLLATE utf8_unicode_ci,
  `surveyls_email_register_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surveyls_email_register` text COLLATE utf8_unicode_ci,
  `surveyls_email_confirm_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surveyls_email_confirm` text COLLATE utf8_unicode_ci,
  `surveyls_dateformat` int(11) NOT NULL DEFAULT '1',
  `surveyls_attributecaptions` text COLLATE utf8_unicode_ci,
  `email_admin_notification_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email_admin_notification` text COLLATE utf8_unicode_ci,
  `email_admin_responses_subj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email_admin_responses` text COLLATE utf8_unicode_ci,
  `surveyls_numberformat` int(11) NOT NULL DEFAULT '0',
  `attachments` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`surveyls_survey_id`,`surveyls_language`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_surveys_languagesettings`
--

INSERT INTO `lime_surveys_languagesettings` (`surveyls_survey_id`, `surveyls_language`, `surveyls_title`, `surveyls_description`, `surveyls_welcometext`, `surveyls_endtext`, `surveyls_url`, `surveyls_urldescription`, `surveyls_email_invite_subj`, `surveyls_email_invite`, `surveyls_email_remind_subj`, `surveyls_email_remind`, `surveyls_email_register_subj`, `surveyls_email_register`, `surveyls_email_confirm_subj`, `surveyls_email_confirm`, `surveyls_dateformat`, `surveyls_attributecaptions`, `email_admin_notification_subj`, `email_admin_notification`, `email_admin_responses_subj`, `email_admin_responses`, `surveyls_numberformat`, `attachments`) VALUES
(916545, 'zh-Hans', '这是标题', '这是描述', '这是欢迎信息', '这是结束 ', 'http://www.rccoder.net', '这是结束URL', '参加调查的邀请', '您好， {FIRSTNAME},\n\n现邀请您参加一个调查。\n\n该调查的名字为：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的连接。\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击此处做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}\n\n如果您被列入了黑名单并想参与本调查、希望能接收到邀请的话，请点击下面链接：\n{OPTOUTURL}', '提请参加调查', '您好， {FIRSTNAME},\n\n最近我们邀请您参加一项调查。\n\n我们注意到您尚未完成这项调查，如果您想参与的话，该项调查还在进行中。\n\n调查标题：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的链接。\n\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击这里做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}', '调查注册确认', '您好 {FIRSTNAME},\n\n您或者其他人用您的邮件地址注册参与了名为{SURVEYNAME}的在线调查。\n\n要完成这个调查，请点击下面的URL:\n\n{SURVEYURL}\n\n如果您有其他问题，或者您没有注册参与并认为这封邮件有误，请通过{ADMINEMAIL}联系{ADMINNAME}。', '确认参加调查', '您好 {FIRSTNAME},\n\n这封邮件是为了确认您已经完成了名为{SURVEYNAME}的调查，您的反馈已经被保存。感谢参与。\n\n如果您对这封邮件有任何问题，请 通过{ADMINEMAIL}联系 {ADMINNAME}.\n\n\n{ADMINNAME}', 6, NULL, '调查反馈提交{SURVEYNAME}', '您好,\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}', '带结果的调查反馈提交{SURVEYNAME}', '您好，\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}\n\n\n下列答案由参与者提供:\n{ANSWERTABLE}', 0, NULL),
(136962, 'zh-Hans', '哈工大网络中心日常监测问卷调查', '这是一个用来描述的日常监测问卷调查，主要用来说明可能会遇到的各种问题，请大家认真的完成问卷调查', '欢迎来到问卷调查页面，完成后还有相关的奖励吆', '感谢你完成问卷调查', '', '', '参加调查的邀请', '您好， {FIRSTNAME},\n\n现邀请您参加一个调查。\n\n该调查的名字为：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的连接。\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击此处做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}\n\n如果您被列入了黑名单并想参与本调查、希望能接收到邀请的话，请点击下面链接：\n{OPTOUTURL}', '提请参加调查', '您好， {FIRSTNAME},\n\n最近我们邀请您参加一项调查。\n\n我们注意到您尚未完成这项调查，如果您想参与的话，该项调查还在进行中。\n\n调查标题：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的链接。\n\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击这里做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}', '调查注册确认', '您好 {FIRSTNAME},\n\n您或者其他人用您的邮件地址注册参与了名为{SURVEYNAME}的在线调查。\n\n要完成这个调查，请点击下面的URL:\n\n{SURVEYURL}\n\n如果您有其他问题，或者您没有注册参与并认为这封邮件有误，请通过{ADMINEMAIL}联系{ADMINNAME}。', '确认参加调查', '您好 {FIRSTNAME},\n\n这封邮件是为了确认您已经完成了名为{SURVEYNAME}的调查，您的反馈已经被保存。感谢参与。\n\n如果您对这封邮件有任何问题，请 通过{ADMINEMAIL}联系 {ADMINNAME}.\n\n\n{ADMINNAME}', 6, NULL, '调查反馈提交{SURVEYNAME}', '您好,\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}', '带结果的调查反馈提交{SURVEYNAME}', '您好，\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}\n\n\n下列答案由参与者提供:\n{ANSWERTABLE}', 0, NULL),
(188694, 'zh-Hans', 'rccoder测试的问卷调查', '的撒的撒大飒飒', '等三大杀手', '等三大杀手', 'http://的撒的撒', '的撒的撒', '参加调查的邀请', '您好， {FIRSTNAME},\n\n现邀请您参加一个调查。\n\n该调查的名字为：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的连接。\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击此处做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}\n\n如果您被列入了黑名单并想参与本调查、希望能接收到邀请的话，请点击下面链接：\n{OPTOUTURL}', '提请参加调查', '您好， {FIRSTNAME},\n\n最近我们邀请您参加一项调查。\n\n我们注意到您尚未完成这项调查，如果您想参与的话，该项调查还在进行中。\n\n调查标题：\n"{SURVEYNAME}"\n\n"{SURVEYDESCRIPTION}"\n\n确认参加，请点击下面的链接。\n\n\n{ADMINNAME} ({ADMINEMAIL})\n\n----------------------------------------------\n点击这里做调查：\n{SURVEYURL}\n\n如果您不想参与本调查，并且不再希望接收邀请，请点击下面链接：\n{OPTOUTURL}', '调查注册确认', '您好 {FIRSTNAME},\n\n您或者其他人用您的邮件地址注册参与了名为{SURVEYNAME}的在线调查。\n\n要完成这个调查，请点击下面的URL:\n\n{SURVEYURL}\n\n如果您有其他问题，或者您没有注册参与并认为这封邮件有误，请通过{ADMINEMAIL}联系{ADMINNAME}。', '确认参加调查', '您好 {FIRSTNAME},\n\n这封邮件是为了确认您已经完成了名为{SURVEYNAME}的调查，您的反馈已经被保存。感谢参与。\n\n如果您对这封邮件有任何问题，请 通过{ADMINEMAIL}联系 {ADMINNAME}.\n\n\n{ADMINNAME}', 6, NULL, '调查反馈提交{SURVEYNAME}', '您好,\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}', '带结果的调查反馈提交{SURVEYNAME}', '您好，\n\n一个新反馈已提交至您的调查 ''{SURVEYNAME}''.\n\n点击下列链接可重新载入调查:\n{RELOADURL}\n\n点击下列链接可查看个人反馈:\n{VIEWRESPONSEURL}\n\n点击下列链接可编辑个人反馈:\n{EDITRESPONSEURL}\n\n点击此处可查看统计:\n{STATISTICSURL}\n\n\n下列答案由参与者提供:\n{ANSWERTABLE}', 0, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lime_survey_136962`
--

CREATE TABLE IF NOT EXISTS `lime_survey_136962` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) COLLATE utf8_unicode_ci DEFAULT NULL,
  `submitdate` datetime DEFAULT NULL,
  `lastpage` int(11) DEFAULT NULL,
  `startlanguage` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `136962X2X2` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `136962X2X2other` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_survey_token_136962_44913` (`token`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_survey_188694`
--

CREATE TABLE IF NOT EXISTS `lime_survey_188694` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) COLLATE utf8_unicode_ci DEFAULT NULL,
  `submitdate` datetime DEFAULT NULL,
  `lastpage` int(11) DEFAULT NULL,
  `startlanguage` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `188694X3X3` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_survey_token_188694_27846` (`token`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `lime_survey_188694`
--

INSERT INTO `lime_survey_188694` (`id`, `token`, `submitdate`, `lastpage`, `startlanguage`, `188694X3X3`) VALUES
(1, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A4'),
(2, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'A4'),
(4, NULL, NULL, NULL, 'zh-Hans', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lime_survey_916545`
--

CREATE TABLE IF NOT EXISTS `lime_survey_916545` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(36) COLLATE utf8_unicode_ci DEFAULT NULL,
  `submitdate` datetime DEFAULT NULL,
  `lastpage` int(11) DEFAULT NULL,
  `startlanguage` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `916545X1X1` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `idx_survey_token_916545_39809` (`token`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `lime_survey_916545`
--

INSERT INTO `lime_survey_916545` (`id`, `token`, `submitdate`, `lastpage`, `startlanguage`, `916545X1X1`) VALUES
(1, NULL, '1980-01-01 00:00:00', 1, 'zh-Hans', 'fwerfwerwe'),
(2, NULL, NULL, NULL, 'zh-Hans', NULL),
(3, NULL, NULL, NULL, 'zh-Hans', NULL),
(4, NULL, NULL, NULL, 'zh-Hans', NULL),
(5, NULL, NULL, NULL, 'zh-Hans', NULL),
(6, NULL, NULL, NULL, 'zh-Hans', NULL),
(7, NULL, NULL, NULL, 'zh-Hans', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lime_survey_links`
--

CREATE TABLE IF NOT EXISTS `lime_survey_links` (
  `participant_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `token_id` int(11) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_invited` datetime DEFAULT NULL,
  `date_completed` datetime DEFAULT NULL,
  PRIMARY KEY (`participant_id`,`token_id`,`survey_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `lime_survey_url_parameters`
--

CREATE TABLE IF NOT EXISTS `lime_survey_url_parameters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL,
  `parameter` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `targetqid` int(11) DEFAULT NULL,
  `targetsqid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `lime_templates`
--

CREATE TABLE IF NOT EXISTS `lime_templates` (
  `folder` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `creator` int(11) NOT NULL,
  PRIMARY KEY (`folder`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_templates`
--

INSERT INTO `lime_templates` (`folder`, `creator`) VALUES
('basic', 1),
('bluengrey', 1),
('citronade', 1),
('clear_logo', 1),
('default', 1),
('eirenicon', 1),
('limespired', 1),
('mint_idea', 1),
('sherpa', 1),
('vallendar', 1),
('副本default', 1);

-- --------------------------------------------------------

--
-- 表的结构 `lime_users`
--

CREATE TABLE IF NOT EXISTS `lime_users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `users_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` blob NOT NULL,
  `full_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL,
  `lang` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(254) COLLATE utf8_unicode_ci DEFAULT NULL,
  `htmleditormode` varchar(7) COLLATE utf8_unicode_ci DEFAULT 'default',
  `templateeditormode` varchar(7) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default',
  `questionselectormode` varchar(7) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default',
  `one_time_pw` blob,
  `dateformat` int(11) NOT NULL DEFAULT '1',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `users_name` (`users_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `lime_users`
--

INSERT INTO `lime_users` (`uid`, `users_name`, `password`, `full_name`, `parent_id`, `lang`, `email`, `htmleditormode`, `templateeditormode`, `questionselectormode`, `one_time_pw`, `dateformat`, `created`, `modified`) VALUES
(1, 'admin', 0x38633639373665356235343130343135626465393038626434646565313564666231363761396338373366633462623861383166366632616234343861393138, 'Administrator', 0, 'zh-Hans', 'your-email@example.net', 'default', 'default', 'default', NULL, 1, '2015-08-12 19:40:31', NULL),
(2, 'rccoder', 0x33353630616630313961356233643639613239396232356131323538323763343439353963393166633266336333363963613963313736333630303836623235, 'rccoder', 1, 'auto', 'rccoder.net@gmail.com', 'default', 'default', 'default', NULL, 1, '2015-08-25 11:36:57', '2015-08-25 11:37:54');

-- --------------------------------------------------------

--
-- 表的结构 `lime_user_groups`
--

CREATE TABLE IF NOT EXISTS `lime_user_groups` (
  `ugid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `owner_id` int(11) NOT NULL,
  PRIMARY KEY (`ugid`),
  UNIQUE KEY `lug_name` (`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `lime_user_groups`
--

INSERT INTO `lime_user_groups` (`ugid`, `name`, `description`, `owner_id`) VALUES
(1, '测试组', '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `lime_user_in_groups`
--

CREATE TABLE IF NOT EXISTS `lime_user_in_groups` (
  `ugid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`ugid`,`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lime_user_in_groups`
--

INSERT INTO `lime_user_in_groups` (`ugid`, `uid`) VALUES
(1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
