Introduction to database + postgress installation
what is data ? facts and statics collected together for reference or analysis
what is database? is an organized collection of structured information or data typically stored electronically in a computer system
what is DBMS? A Database Management System (DBMS) is software that lets users create, read, update, and delete data in a database
what is RDBMS?(Relational database managemen system)It is a software program used to store, organize, and manage data in a structured
what is difference between SQL&NOSQL?

creatig first database

Create database my_first_database

creating table

create table users (
ID serial,
username varchar (256),
password varchar (256),
joined_at date default current_date,
);
//gelint xog table
insert into users (username,password)
values('ahmed','admin123');

//soo aqrint xogta

select \* from users;

select username,password from users;

sqlshel commands;

//to enter the database

\c database name

//to see table for that database
\d
