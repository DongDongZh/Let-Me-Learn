USE letMeLearn_db;

CREATE TABLE student
(
  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT null,
	email varchar(255) NOT null,
  description varchar(8000) NOT null,
  rating INT NOT null,
	PRIMARY KEY (id)
);

CREATE TABLE teacher
(
  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT null,
  email varchar(255) NOT null,
  description varchar(8000),
  rating INT NOT null,
	PRIMARY KEY (id)
);

CREATE TABLE task
(
  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	category varchar(255) NOT null,
  subject varchar(255) NOT null,
  description varchar(8000) NOT null,
  complete BOOLEAN default false,
  created_at DATETIME not null DEFAULT current_timestamp,
	PRIMARY KEY (id)
);