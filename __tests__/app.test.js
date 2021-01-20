process.env.NODE_ENV = 'test';
const app = require('../app');
const request = require('supertest');
const connection = require('../connection');
const { expect } = require('@jest/globals');

describe('API', () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  afterAll(() => {
    return connection.destroy();
  });

  describe('API/STADIUMS', () => {
    test('GET - 200 - will return all stadiums', () => {
      return request(app)
        .get('/api/stadiums')
        .expect(200)
        .then((res) => {
          expect(res.body.stadiums).toEqual(expect.any(Array));
          expect(res.body.stadiums.length).toBe(4);
        });
    });
  });
});
