create table PRODUCTS
(
  ProductID   SERIAL PRIMARY KEY,
  Name        VARCHAR(255) not null,
  Price       double precision not null,
  CREATE_DATE Timestamp without time zone not null
) ;

insert into products (Name, Price, CREATE_DATE)
values ('Skittles', 0.99, current_timestamp);

insert into products (Name, Price, CREATE_DATE)
values ('Jolly Rancher', 1.50, current_timestamp);