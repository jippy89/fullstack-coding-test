// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Todo", () => {
  describe("GET /todo", () => {
    // Test to get all todos'
    it("should get all todos", (done) => {
      chai.request(app)
        .get('/todo')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].should.be.a('object');
          res.body[0].should.have.property('id');
          res.body[0].id.should.equal(1);
          res.body[0].should.have.property('title');
          res.body[0].title.should.equal("Todo title");
          res.body[0].should.have.property('done_flag');
          res.body[0].done_flag.should.equal("false");
          res.body[0].should.have.property('deadline');
          res.body[0].deadline.should.equal("2019-10-01");
          done();
        });
    });        
    // // Test to get single student record
    it("should get a single 'todo' object", (done) => {
      const id = 1;
      chai.request(app)
        .get(`/todo/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(1);
          res.body.should.have.property('title');
          res.body.title.should.equal("Todo title");
          res.body.should.have.property('done_flag');
          res.body.done_flag.should.equal("false");
          res.body.should.have.property('deadline');
          res.body.deadline.should.equal("2019-10-01");
          done();
        });
    });
  });
});