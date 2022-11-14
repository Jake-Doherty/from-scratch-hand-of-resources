const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/users should get a list of users', async () => {
    const resp = await request(app).get('/users');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "first_name": "Chevy",
          "id": "1",
          "last_name": "Silversmidt",
        },
        Object {
          "first_name": "Estelle",
          "id": "2",
          "last_name": "Mitie",
        },
        Object {
          "first_name": "Gwenni",
          "id": "3",
          "last_name": "Marien",
        },
        Object {
          "first_name": "Wynny",
          "id": "4",
          "last_name": "Weymont",
        },
        Object {
          "first_name": "Raimund",
          "id": "5",
          "last_name": "Balshen",
        },
        Object {
          "first_name": "Erena",
          "id": "6",
          "last_name": "Eyeington",
        },
        Object {
          "first_name": "Reeba",
          "id": "7",
          "last_name": "MacBrearty",
        },
        Object {
          "first_name": "Dael",
          "id": "8",
          "last_name": "Denty",
        },
        Object {
          "first_name": "Ronica",
          "id": "9",
          "last_name": "Widdows",
        },
        Object {
          "first_name": "Tabor",
          "id": "10",
          "last_name": "Smithend",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
