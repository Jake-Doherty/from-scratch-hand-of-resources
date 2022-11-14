-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
drop table
  if exists users;

drop table
  if exists plants;

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
  ('Tabor', 'Smithend');

create table
  plants (
    id bigint generated always as identity primary key,
    common_name varchar,
    plant_family varchar,
    plant_scientific_name varchar
  );

insert into
  plants (common_name, plant_family, plant_scientific_name)
values
  ('Mustang Monardella', 'Lamiaceae', 'Monardella lanceolata A. Gray var. microcephala A. Gray'),
  ('Silky Lupine', 'Fabaceae', 'Lupinus sericeus Pursh ssp. sericeus'),
  ('Mt. Hamilton Mock Stonecrop', 'Crassulaceae', 'Sedella pentandra H. Sharsm.'),
  ('Puerto Rico Stopper', 'Myrtaceae', 'Eugenia bellonis Krug & Urb.'),
  ('Catch Me If You Can', 'Euphorbiaceae', 'Acalypha amentacea Roxb.'),
  ('Marsh Sandwort', 'Caryophyllaceae', 'Arenaria paludicola B.L. Rob.'),
  ('Pohlia Moss', 'Bryaceae', 'Pohlia melanodon (Brid.) Shaw'),
  ('Syngonanthus', 'Eriocaulaceae', 'Syngonanthus Ruhl.'),
  ('Pinkflower Hedgehog Cactus', 'Cactaceae', 'Echinocereus fendleri (Engelm.) Sencke ex J.N. Haage ssp. fendleri'),
  ('Moco De Pavo', 'Poaceae', 'Eriochrysis cayennensis P. Beauv.')