# Setup Database:

##     step 1:-
    Required Sowftware : mysql-installer-community-8.0.15.0 or You can download any mysql also.
    Download and install mysql with Default installation.

##      step 2:-
    Use Username : root
        Password : 123456

##      step 3:-
    Create Database : Query is
    /*   CREATE DATABASE `db_call-log-mgt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;    */

##      step 4:-
    Create Table : Query is
    /*   CREATE TABLE `tb_calllogfrm` (
  `uname` varchar(20) NOT NULL,
  `phonenumber` varchar(20) NOT NULL,
  `timeofcall` varchar(30) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `reportedby` varchar(50) DEFAULT NULL,
  `callpriority` int(11) DEFAULT NULL,
  `callseverity` int(11) DEFAULT NULL,
  `call_log_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`call_log_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;    */

##      step 5:-
    Go to Visual Studio Code .
    Open Terminal and type command > npm install mysql

##      step 6:-
    All details of connectivity is Already there in a mock-server.js

    /***** Thank you u r good to go ******/

### Stock-Inventory Tables :

  Create Table : Query for Transition table is
  /* CREATE TABLE `db_call-log-mgt`.`tb_transition` (
  `id` INT NOT NULL,
  `stock_name` VARCHAR(45) NULL,
  `quantity` INT NULL,
  `transition_type` VARCHAR(20) NULL,
  `date` VARCHAR(20) NULL,
  `discription` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)); */

Create Table : Query for Stock table is
  /* CREATE TABLE `db_call-log-mgt`.`tb_stock_inventory` (
  `id` INT NOT NULL,
  `stock_name` VARCHAR(45) NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`id`));
  */