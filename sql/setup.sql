-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
drop table
  if exists users;

create table
  users (
    id bigint generated always as identity primary key,
    first_name varchar,
    last_name varchar
  );

insert into
  users (first_name, last_name)
values
  ('Chevy', 'Silversmidt'),
  ('Estelle', 'Mitie'),
  ('Gwenni', 'Marien'),
  ('Wynny', 'Weymont'),
  ('Raimund', 'Balshen'),
  ('Erena', 'Eyeington'),
  ('Reeba', 'MacBrearty'),
  ('Dael', 'Denty'),
  ('Ronica', 'Widdows'),
  ('Tabor', 'Smithend')