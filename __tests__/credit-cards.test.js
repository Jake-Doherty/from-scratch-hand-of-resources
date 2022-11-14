const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for credit cards', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /credit-cards/1 should return a detail of credit-card with id 1', async () => {
    const resp = await request(app).get('/credit-cards/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      cc_number: '5641823826724519',
      cc_type: 'switch',
      department: 'Industrial',
    });
  });
  it('GET /credit-cards should return a list of credit cards', async () => {
    const resp = await request(app).get('/credit-cards');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "cc_number": "5641823826724519",
          "cc_type": "switch",
          "department": "Industrial",
          "id": "1",
        },
        Object {
          "cc_number": "3546317574494517",
          "cc_type": "jcb",
          "department": "Clothing",
          "id": "2",
        },
        Object {
          "cc_number": "3540914015922456",
          "cc_type": "jcb",
          "department": "Books",
          "id": "3",
        },
        Object {
          "cc_number": "6759633421929730529",
          "cc_type": "maestro",
          "department": "Sports",
          "id": "4",
        },
        Object {
          "cc_number": "3531227906245528",
          "cc_type": "jcb",
          "department": "Books",
          "id": "5",
        },
        Object {
          "cc_number": "633364232328160780",
          "cc_type": "switch",
          "department": "Electronics",
          "id": "6",
        },
        Object {
          "cc_number": "5602214166196830",
          "cc_type": "bankcard",
          "department": "Clothing",
          "id": "7",
        },
        Object {
          "cc_number": "3560901401242628",
          "cc_type": "jcb",
          "department": "Movies",
          "id": "8",
        },
        Object {
          "cc_number": "560224387873276780",
          "cc_type": "china-unionpay",
          "department": "Beauty",
          "id": "9",
        },
        Object {
          "cc_number": "337941592439540",
          "cc_type": "americanexpress",
          "department": "Toys",
          "id": "10",
        },
      ]
    `);
  });
  it('POST /should add a row to credit-cards data', async () => {
    const newCard = {
      cc_number: '30047394030592',
      cc_type: 'diners-club-carte-blanche',
      department: 'Industrial',
    };
    const resp = await request(app).post('/credit-cards').send(newCard);
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "cc_number": "30047394030592",
        "cc_type": "diners-club-carte-blanche",
        "department": "Industrial",
        "id": "11",
      }
    `);
  });
  it('PUT /credit-cards/1 should update credit-card with id of 1', async () => {
    const resp = await request(app).put('/credit-cards/1').send({
      cc_number: '201742534100411',
      cc_type: 'diners-club-enroute',
      department: 'Games',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.cc_number).toEqual('201742534100411');
    expect(resp.body.cc_type).toEqual('diners-club-enroute');
    expect(resp.body.department).toEqual('Games');
  });
  it('DELETE /credit-cards/1 should delete credit-credit', async () => {
    const resp = await request(app).delete('/credit-cards/1');
    expect(resp.status).toBe(204);

    const getResp = await request(app).get('/credit-cards/1');
    expect(getResp.status).toBe(404);
  });
  it('GET /credit-cards/1234 should return a 404', async () => {
    const resp = await request(app).get('/credit-cards/1234');
    expect(resp.status).toBe(404);
  });
  afterAll(() => {
    pool.end();
  });
});
