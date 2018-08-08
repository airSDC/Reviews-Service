const request = require('supertest');
const app = require('./server/app');


describe('API', () => {
  describe('GET /api/rooms/:roomId/reviews', () => {
    test('should respond with status code 200', () => request(app)
      .get('/api/rooms/1/reviews')
      .expect(200));

    test('should respond with a array of reviews objects', () => request(app)
      .get('/api/rooms/1/reviews')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body).toBeTruthy();
      }));

    test('should respond with a 404 for invalid id', () => request(app)
      .get('/api/rooms/101/photos')
      .expect(404));
  });

  describe('POST /api/rooms/:roomId/reviews', () => {
    test('should respond with status code 200', () => request(app)
      .post('/api/rooms/1/reviews')
      .send()
      .expect(201));

    test('should respond with a 404 for invalid id', () => request(app)
      .post('/api/rooms/101/reviews')
      .send()
      .expect(404));
  });

  describe('PUT /api/rooms/:roomId/reviews', () => {
    test('should respond with status code 200', () => request(app)
      .put('/api/rooms/1/reviews')
      .expect(200));

    test('should respond with a 404 for invalid id', () => request(app)
      .put('/api/rooms/101/reviews')
      .expect(404));
  });

  describe('DELETE /api/rooms/:id/reviews', () => {
    test('should respond with status code 200', () => request(app)
      .delete('/rooms/1/reviews')
      .expect(200));

    test('should respond with a 404 for invalid id', () => request(app)
      .delete('/rooms/101/reviews')
      .expect(404));
  });
});
