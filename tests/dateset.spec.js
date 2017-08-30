const app = require('../main');
const request = require('supertest')(app);
const expect = require('chai').expect;


describe('Datasets', () => {
  let id;
  describe('Create', () => {
      it('should POST to datasets and create a dataset', (done) => {
        request
            .post('/datasets/')
            .send({
              name:'Children',
              data: "educated: false, adult: 'no'",
              projectId:'59a544441d736b0d0e8b586e',
            })
            .end((err, res) => {
              expect(res.status).to.be.equal(201);
              expect(res.body).to.exist;
              expect(res.body).to.be.a('object');
              done();
            });
      });
    });

  describe('Dataset display', () => {
      it('validates that all /datasets are returned', (done) => {
        request
          .get('/datasets/')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(res.body.length).to.be.equal(16);
            id = res.body[5]._id;
            done();
          });
      });
    });

  describe('Update Dataset', () => {
    it('should update the dataset', (done) => {
        request
          .put(`/datasets/${id}`)
          .send({
            name:'Children the updated version',
            data: "educated: false, adult: no",
            projectId:'59a544441d736b0d0e8b586e',
          })
          .end((err, res) => {
            expect(res.status).to.be.equal(202);
            expect(res.body.message).to.exist;
            expect(res.body.message).to.be.equal('Dataset updated successfully!');
            done();
          });
      });
  });
  describe('Delete', () => {
    it('should delete the dataset with the given Id', (done) => {
      request
      .delete(`/datasets/${id}`)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('Delete successfull!');
        request
        .delete(`/datasets/${id}`)
        .end((err2, response) => {
          expect(response.status).to.be.equal(404);
          expect(response.err2).to.exist;
        });
        done();
      });
    });
  });
});
