const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for locations', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /cars should return a list of cars', async () => {
    const resp = await request(app).get('/cars');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "make": "Chevrolet",
          "model": "Suburban 1500",
          "vin": "5FNYF3H34FB584723",
          "year": 2001,
        },
        Object {
          "id": "2",
          "make": "Mercedes-Benz",
          "model": "500SEL",
          "vin": "1FTWW3A55AE856951",
          "year": 1992,
        },
        Object {
          "id": "3",
          "make": "Ford",
          "model": "Transit Connect",
          "vin": "WBAYE8C56ED859682",
          "year": 2012,
        },
        Object {
          "id": "4",
          "make": "Volkswagen",
          "model": "Golf III",
          "vin": "WBAUP9C58BV789946",
          "year": 1994,
        },
        Object {
          "id": "5",
          "make": "Hyundai",
          "model": "Accent",
          "vin": "WP0AA2A83EK341325",
          "year": 2010,
        },
        Object {
          "id": "6",
          "make": "Ford",
          "model": "EXP",
          "vin": "1FMJK1J59AE335687",
          "year": 1987,
        },
        Object {
          "id": "7",
          "make": "Audi",
          "model": "4000s Quattro",
          "vin": "1FTEX1EW7AF684786",
          "year": 1986,
        },
        Object {
          "id": "8",
          "make": "Acura",
          "model": "NSX",
          "vin": "5NPEB4ACXCH450889",
          "year": 1993,
        },
        Object {
          "id": "9",
          "make": "Jaguar",
          "model": "XF",
          "vin": "4T1BK1EB3EU598356",
          "year": 2011,
        },
        Object {
          "id": "10",
          "make": "GMC",
          "model": "Suburban 1500",
          "vin": "1C3CCBHG2CN883340",
          "year": 1992,
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
