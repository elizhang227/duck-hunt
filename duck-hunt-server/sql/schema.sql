CREATE DATABASE duck_hunt;

CREATE TABLE scores
(
    id serial primary key,
    username varchar(100),
    score integer
);