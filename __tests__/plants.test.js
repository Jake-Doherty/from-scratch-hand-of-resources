const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for plants', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it.skip('PUT /plants/1 should update plant with id 1', async () => {
    const resp = await request(app).put('/plants/1').send({
      common_name: 'Buxbaumia Moss',
      plant_family: 'Buxbaumiaceae',
      plant_scientific_name: 'Buxbaumia aphylla Hedw',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.common_name).toEqual('Buxbaumia Moss');
    expect(resp.body.plant_family).toEqual('Buxbaumiaceae');
    expect(resp.body.plant_scientific_name).toEqual('Buxbaumia aphylla Hedw');
  });
  it.skip('POST /should create a new plant in the db', async () => {
    const newPlant = {
      common_name: 'Foxtail Prairie Clover',
      plant_family: 'Fabaceae',
      plant_scientific_name: 'Dalea leporina (Aiton) Bullock',
    };
    const resp = await request(app).post('/plants').send(newPlant);
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "common_name": "Foxtail Prairie Clover",
        "id": "11",
        "plant_family": "Fabaceae",
        "plant_scientific_name": "Dalea leporina (Aiton) Bullock",
      }
    `);
  });
  it.skip('GET /plant/:id should get a detail of a plant by id', async () => {
    const resp = await request(app).get('/plants/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      common_name: 'Mustang Monardella',
      plant_family: 'Lamiaceae',
      plant_scientific_name:
        'Monardella lanceolata A. Gray var. microcephala A. Gray',
    });
  });
  it.skip('GET /plants should get a list of all plants', async () => {
    const resp = await request(app).get('/plants');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "common_name": "Mustang Monardella",
          "id": "1",
          "plant_family": "Lamiaceae",
          "plant_scientific_name": "Monardella lanceolata A. Gray var. microcephala A. Gray",
        },
        Object {
          "common_name": "Silky Lupine",
          "id": "2",
          "plant_family": "Fabaceae",
          "plant_scientific_name": "Lupinus sericeus Pursh ssp. sericeus",
        },
        Object {
          "common_name": "Mt. Hamilton Mock Stonecrop",
          "id": "3",
          "plant_family": "Crassulaceae",
          "plant_scientific_name": "Sedella pentandra H. Sharsm.",
        },
        Object {
          "common_name": "Puerto Rico Stopper",
          "id": "4",
          "plant_family": "Myrtaceae",
          "plant_scientific_name": "Eugenia bellonis Krug & Urb.",
        },
        Object {
          "common_name": "Catch Me If You Can",
          "id": "5",
          "plant_family": "Euphorbiaceae",
          "plant_scientific_name": "Acalypha amentacea Roxb.",
        },
        Object {
          "common_name": "Marsh Sandwort",
          "id": "6",
          "plant_family": "Caryophyllaceae",
          "plant_scientific_name": "Arenaria paludicola B.L. Rob.",
        },
        Object {
          "common_name": "Pohlia Moss",
          "id": "7",
          "plant_family": "Bryaceae",
          "plant_scientific_name": "Pohlia melanodon (Brid.) Shaw",
        },
        Object {
          "common_name": "Syngonanthus",
          "id": "8",
          "plant_family": "Eriocaulaceae",
          "plant_scientific_name": "Syngonanthus Ruhl.",
        },
        Object {
          "common_name": "Pinkflower Hedgehog Cactus",
          "id": "9",
          "plant_family": "Cactaceae",
          "plant_scientific_name": "Echinocereus fendleri (Engelm.) Sencke ex J.N. Haage ssp. fendleri",
        },
        Object {
          "common_name": "Moco De Pavo",
          "id": "10",
          "plant_family": "Poaceae",
          "plant_scientific_name": "Eriochrysis cayennensis P. Beauv.",
        },
      ]
    `);
  });
  it.skip('GET /plants/826 should return a 404', async () => {
    const resp = await request(app).get('/plants/826');
    expect(resp.status).toBe(404);
  });
  it.skip('DELETE /plants/1 should delete plant with id 1', async () => {
    const resp = await request(app).delete('/plants/1');
    expect(resp.status).toBe(204);

    const getResp = await request(app).get('/plants/1');
    expect(getResp.status).toBe(404);
  });
  afterAll(() => {
    pool.end();
  });
});
