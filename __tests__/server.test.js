const express = require('express');
const app = require('../server/app');
const request = require('supertest');

test('the api request has json Content-Type', () => {
  // expect.assertions(1);
  return request(app)
  .get('/api/rooms/1/reviews')
  .expect('Content-Type', /json/)
  .expect(200);
  // .then((data) => {
  // .expect(data).toBeTruthy();
  // });
});