import chaihttp from 'chai-http';
import chai, { expect } from 'chai';
import { NOT_FOUND, BAD_REQUEST, CREATED, OK } from 'http-status';

import app from '../src/index';
import dummyData from './dummyData';

chai.use(chaihttp);
const router = () => chai.request(app);

describe('TEST MOVIES APIs', async () => {
  let data = {};
  it('User should be able to add a movie', (done) => {
    router()
      .post('/api/v1/movies/add-movie')
      .send(dummyData[0])
      .end((error, response) => {
        data = response.body.data;
        expect(response).to.have.status(CREATED);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
  it('User should be able to view all movies', (done) => {
    router()
      .get('/api/v1/movies/view-movies')
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
  it('User should be able to view all movies pagination', (done) => {
    router()
      .get('/api/v1/movies/view-movies?page=1&limit=5')
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
  it('User should be able to view a single movie', (done) => {
    router()
      .get(`/api/v1/movies/view-movie/${data.id}`)
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
  it('User should be able to rank a movie', (done) => {
    router()
      .patch(`/api/v1/movies/ranking-movie/${data.id}`)
      .send(dummyData[1])
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
  it('User should be able to delete a movie', (done) => {
    router()
      .delete(`/api/v1/movies/delete-movie/${data.id}`)
      .end((error, response) => {
        expect(response).to.have.status(OK);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
  it('User should not be able to add a movie with missing attributes', (done) => {
    router()
      .post('/api/v1/movies/add-movie')
      .send(dummyData[1])
      .end((error, response) => {
        expect(response).to.have.status(BAD_REQUEST);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
  it('User should be not be able to view a single movie which does not exist', (done) => {
    router()
      .get(`/api/v1/movies/view-movie/${data.id}`)
      .end((error, response) => {
        expect(response).to.have.status(NOT_FOUND);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
  it('User should be not be able to view all movies when database table is empty', (done) => {
    router()
      .get('/api/v1/movies/view-movies')
      .end((error, response) => {
        expect(response).to.have.status(NOT_FOUND);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
  it('User should not be able to rank a movie which does not exist', (done) => {
    router()
      .patch(`/api/v1/movies/ranking-movie/${data.id}`)
      .send(dummyData[1])
      .end((error, response) => {
        expect(response).to.have.status(NOT_FOUND);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
  it('User should be able to delete a movie which does not exist', (done) => {
    router()
      .delete(`/api/v1/movies/delete-movie/${data.id}`)
      .end((error, response) => {
        expect(response).to.have.status(NOT_FOUND);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
});
