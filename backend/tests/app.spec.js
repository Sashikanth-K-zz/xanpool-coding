const request = require("supertest");
const app = require("../app");

const booksData = require("../app/services/booksData");

describe("Test the books rest api", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/books/");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toEqual(booksData.length);
  });

  test("It should get the book details by bookid", async () => {
    const response = await request(app).get("/books/1");
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toEqual(booksData[0]);
  });

  test("It should not get the book details by bookid ", async () => {
    const response = await request(app).get("/books/5994");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});
