-- MySQL Script generated by MySQL Workbench
-- Wed Aug 14 20:45:53 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tutor-up
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tutor-up
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tutor-up` DEFAULT CHARACTER SET utf8 ;
USE `tutor-up` ;

-- -----------------------------------------------------
-- Table `tutor-up`.`University`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`University` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Faculty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Faculty` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `University_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Faculty_University_idx` (`University_id` ASC) VISIBLE,
  CONSTRAINT `fk_Faculty_University`
    FOREIGN KEY (`University_id`)
    REFERENCES `tutor-up`.`University` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Program`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Program` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `Faculty_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Program_Faculty1_idx` (`Faculty_id` ASC) VISIBLE,
  CONSTRAINT `fk_Program_Faculty1`
    FOREIGN KEY (`Faculty_id`)
    REFERENCES `tutor-up`.`Faculty` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Tutor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Tutor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `surname` VARCHAR(100) NOT NULL,
  `e-mail` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `Program_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Tutor_Program1_idx` (`Program_id` ASC) VISIBLE,
  CONSTRAINT `fk_Tutor_Program1`
    FOREIGN KEY (`Program_id`)
    REFERENCES `tutor-up`.`Program` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `surname` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `e-mail` VARCHAR(255) NOT NULL,
  `Program_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Student_Program1_idx` (`Program_id` ASC) VISIBLE,
  CONSTRAINT `fk_Student_Program1`
    FOREIGN KEY (`Program_id`)
    REFERENCES `tutor-up`.`Program` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_subject` VARCHAR(255) NOT NULL,
  `Program_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Subject_Program1_idx` (`Program_id` ASC) VISIBLE,
  CONSTRAINT `fk_Subject_Program1`
    FOREIGN KEY (`Program_id`)
    REFERENCES `tutor-up`.`Program` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Offer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Offer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `location` ENUM("online", "live") NOT NULL,
  `date` TIMESTAMP(6) NOT NULL,
  `price` DECIMAL(6,2) NOT NULL,
  `Tutor_id` INT NOT NULL,
  `Subject_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Offer_Tutor1_idx` (`Tutor_id` ASC) VISIBLE,
  INDEX `fk_Offer_Subject1_idx` (`Subject_id` ASC) VISIBLE,
  CONSTRAINT `fk_Offer_Tutor1`
    FOREIGN KEY (`Tutor_id`)
    REFERENCES `tutor-up`.`Tutor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Offer_Subject1`
    FOREIGN KEY (`Subject_id`)
    REFERENCES `tutor-up`.`Subject` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tutor-up`.`Request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tutor-up`.`Request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `accepted` TINYINT NOT NULL,
  `Student_id` INT NOT NULL,
  `Offer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Request_Student1_idx` (`Student_id` ASC) VISIBLE,
  INDEX `fk_Request_Offer1_idx` (`Offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_Request_Student1`
    FOREIGN KEY (`Student_id`)
    REFERENCES `tutor-up`.`Student` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_Offer1`
    FOREIGN KEY (`Offer_id`)
    REFERENCES `tutor-up`.`Offer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
