const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for users', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it.skip('PUT /users/1 should update user with id 1', async () => {
    const resp = await request(app)
      .put('/users/1')
      .send({ last_name: 'Biglastname' });
    expect(resp.status).toBe(200);
    expect(resp.body.last_name).toEqual('Biglastname');
  });
  it.skip('POST /should create a new user in the database', async () => {
    const newUser = {
      first_name: 'Jason',
      last_name: 'Jasonson',
    };
    const resp = await request(app).post('/users').send(newUser);
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Jason",
        "id": "11",
        "last_name": "Jasonson",
      }
    `);
  });
  it.skip('GET /users/:id should return a user detail by id', async () => {
    const resp = await request(app).get('/users/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      first_name: 'Chevy',
      last_name: 'Silversmidt',
    });
  });
  it.skip('GET /users should get a list of users', async () => {
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
  it.skip('GET /users/999 should return a 404', async () => {
    const resp = await request(app).get('/users/999');
    expect(resp.status).toBe(404);
  });
  it.skip('DELETE /users/1 should delete user with id 1', async () => {
    const resp = await request(app).delete('/users/1');
    expect(resp.status).toBe(204);

    const getResp = await request(app).get('/users/1');
    expect(getResp.status).toBe(404);
  });
  afterAll(() => {
    pool.end();
  });
});
