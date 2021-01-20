process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const connection = require("../connection");

describe("API", () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  afterAll(() => {
    return connection.destroy();
  });

  test("ERROR - 404 not found, incorrect endpoint", () => {
    return request(app)
      .get("/api/stadium")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Invalid endpoint");
      });
  });

  describe("API/STADIUMS", () => {
    test("GET - 200 - will return all stadiums", () => {
      return request(app)
        .get("/api/stadiums")
        .expect(200)
        .then((res) => {
          expect(res.body.stadiums).toEqual(expect.any(Array));
          expect(res.body.stadiums.length).toBe(4);
        });
    });
  });

  test("GET - 200 - queries will default to club asc", () => {
    return request(app)
      .get("/api/stadiums")
      .expect(200)
      .then((res) => {
        //console.log(res.body);
        expect(res.body.stadiums[0].name).toBe("Amex Stadium");
      });
  });

  test("GET - 200 - ignores query if sort_by is incorrect", () => {
    return request(app)
      .get("/api/stadiums?sort_by=capacity&order=desc")
      .expect(200)
      .then((res) => {
        // console.log('---->',res.body);
        expect(res.body.stadiums.length).toBe(4);
      });
  });

  test.only("GET - 400 - Invalid sort_by row", () => {
    return request(app)
      .get("/api/stadiums?sort_by=capaty&order=desc")
      .expect(400)
      .then(({ body }) => {
        console.log("---->", body.msg);
        expect(body.msg).toBe("Bad Request");
      });
  });

  test("GET - 200 - responds with stadiums filtered by query", () => {
    return request(app)
      .get("/api/stadiums?sort_by=capacity&order=desc")
      .expect(200)
      .then((res) => {
        // console.log('---->',res.body);
        expect(res.body.stadiums[0].name).toBe("Old Trafford");
      });
  });
});
