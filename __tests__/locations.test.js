const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for locations', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /locations/1 should return a detail of location with id 1', async () => {
    const resp = await request(app).get('/locations/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      street_address: '097 Prairieview Circle',
      latitude: -8.5803424,
      longitude: 116.3654707,
    });
  });
  it('GET /locations should return a list of locations', async () => {
    const resp = await request(app).get('/locations');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "latitude": -8.5803424,
          "longitude": 116.3654707,
          "street_address": "097 Prairieview Circle",
        },
        Object {
          "id": "2",
          "latitude": -7.0827518,
          "longitude": 108.5166348,
          "street_address": "5 Cordelia Plaza",
        },
        Object {
          "id": "3",
          "latitude": -20.5805385,
          "longitude": 164.2740515,
          "street_address": "311 Hooker Pass",
        },
        Object {
          "id": "4",
          "latitude": 8.662577,
          "longitude": -75.128872,
          "street_address": "439 Dovetail Circle",
        },
        Object {
          "id": "5",
          "latitude": 53.0155306,
          "longitude": 21.3375451,
          "street_address": "8 Coolidge Terrace",
        },
        Object {
          "id": "6",
          "latitude": -7.5450262,
          "longitude": 111.6556388,
          "street_address": "5810 Emmet Hill",
        },
        Object {
          "id": "7",
          "latitude": 23.759956,
          "longitude": 116.157387,
          "street_address": "30055 Debra Circle",
        },
        Object {
          "id": "8",
          "latitude": 39.0000158,
          "longitude": 140.0433007,
          "street_address": "70 Bartelt Alley",
        },
        Object {
          "id": "9",
          "latitude": 23.105394,
          "longitude": 113.874335,
          "street_address": "8091 Messerschmidt Pass",
        },
        Object {
          "id": "10",
          "latitude": 52.664639,
          "longitude": 35.8136035,
          "street_address": "4 Vermont Drive",
        },
      ]
    `);
  });
  it('POST /should add a location to the db', async () => {
    const newLocation = {
      street_address: '301 Southridge Avenue',
      latitude: -7.1651833,
      longitude: 115.7930198,
    };
    const resp = await request(app).post('/locations').send(newLocation);
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": "11",
        "latitude": -7.1651833,
        "longitude": 115.7930198,
        "street_address": "301 Southridge Avenue",
      }
    `);
  });
  it('PUT /locations/1 should update location with id of 1', async () => {
    const resp = await request(app).put('/locations/1').send({
      street_address: '4 Crownhardt Court',
      latitude: -7.7920677,
      longitude: 113.479098,
    });
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      street_address: '4 Crownhardt Court',
      latitude: -7.7920677,
      longitude: 113.479098,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
