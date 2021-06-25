const express = require('express');
const supertest = require('supertest');

function testServer(route) {
  const app = express(); // nueva app de express
  route(app);
  return supertest(app);
}

module.exports = testServer;