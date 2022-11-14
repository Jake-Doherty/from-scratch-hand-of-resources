const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('routes for plants', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/credit-cards should return a list of credit cards', async () => {
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
  afterAll(() => {
    pool.end();
  });
});
