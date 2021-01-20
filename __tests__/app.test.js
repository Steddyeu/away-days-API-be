process.env.NODE_ENV = 'test';
const app = require('../app');
const request = require('supertest');
const connection = require('../connection');
const { describe, expect } = require('@jest/globals');

describe('API', () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  afterAll(() => {
    return connection.destroy();
  });

  test('ERROR - 404 not found, incorrect endpoint', () => {
    return request(app)
      .get('/api/stadium')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe('Invalid endpoint');
      });
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

    test('GET - 200 - queries will default to club asc', () => {
      return request(app)
        .get('/api/stadiums')
        .expect(200)
        .then((res) => {
          //console.log(res.body);
          expect(res.body.stadiums[0].name).toBe('amex stadium');
        });
    });

    test('GET - 200 - ignores query if sort_by is incorrect', () => {
      return request(app)
        .get('/api/stadiums?sort_by=capacity&order=desc')
        .expect(200)
        .then((res) => {
          expect(res.body.stadiums.length).toBe(4);
        });
    });

    test('GET - 400 - Invalid sort_by row', () => {
      return request(app)
        .get('/api/stadiums?sort_by=capaty&order=desc')
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).toBe('Bad Request');
        });
    });

    test('GET - 200 - responds with stadiums filtered by query', () => {
      return request(app)
        .get('/api/stadiums?sort_by=capacity&order=desc')
        .expect(200)
        .then((res) => {
          expect(res.body.stadiums[0].name).toBe('old trafford');
        });
    });

    test('ERROR - 405 method not allowed - all stadiums', () => {
      return request(app)
        .post('/api/stadiums')
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).toBe('Method not allowed');
        });
    });

    test('GET - 200 - responds with stadium by id', () => {
      return request(app)
        .get('/api/stadiums/1')
        .expect(200)
        .then((res) => {
          expect(res.body.stadium.name).toBe('anfield');
        });
    });

    test('ERROR - 404 not found, incorrect endpoint', () => {
      return request(app)
        .get('/api/stadiums/500')
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).toBe('No stadium with the id 500 found');
        });
    });

    test('ERROR - 405 method not allowed - get stadium by name', () => {
      return request(app)
        .post('/api/stadiums/bigstadium')
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).toBe('Method not allowed');
        });
    });
    describe('/API/STADIUMS/STADIUMID/COMMENTS', () => {
      test.only('GET - 200 - will return all comments for stadium', () => {
        return request(app)
          .get('/api/stadiums/1/comments')
          .expect(200)
          .then((res) => {
            expect(res.body.comments.length).toBe(3);
          });
      });
    });
  });
});
