// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import fs from 'fs';
import path from 'path';
import publicPath from '../utils/path'

// Configure chai
chai.use(chaiHttp);
chai.should();

// Clean up 'db.json'
const dbPath = path.join(publicPath, 'db', 'db.json')
fs.writeFileSync(dbPath, JSON.stringify([]), (err) => {
  if(err) throw err
  console.log("'db.json' has been cleaned, proceed to test phase")
})

describe("Todo", () => {
  describe("POST /todo", () => {
    it("should post a 'todo' object", (done) => {
      chai.request(app)
        .post('/todo')
        .type('json')
        .send({
          "title": "Todo title",
          "deadline": "2019-10-01"
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(1);
          res.body.should.have.property('title');
          res.body.title.should.equal("Todo title");
          res.body.should.have.property('done_flag');
          res.body.done_flag.should.equal("false");
          res.body.should.have.property('deadline');
          res.body.deadline.should.equal("2019-10-01");
          done()
        })
    })

    it("should REJECT a post without 'title' property", (done) => {
      chai.request(app)
        .post('/todo')
        .type('json')
        .send({
          "deadline": "2019-10-01"
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.have.property('errors')
          done()
        })
    })

    it("should REJECT a post if 'title' property is NOT a string", (done) => {
      chai.request(app)
        .post('/todo')
        .type('json')
        .send({
          "title": 1,
          "deadline": "2019-10-01"
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.have.property('errors')
          res.body['errors'][0].msg.should.equal("Must be a 'string' type")
          done()
        })
    })

    it("should REJECT a post without a 'deadline' property", (done) => {
      chai.request(app)
        .post('/todo')
        .type('json')
        .send({
          "title": "Doin' some work"
        })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.have.property('errors')
          done()
        })
    })

    it("should REJECT a post if a 'deadline' property is NOT in 'yyyy-mm-dd' format", (done) => {
      chai.request(app)
        .post('/todo')
        .type('json')
        .send({
          "title": "Doin' some work",
          "deadline": "10-11-2019"
        })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.have.property('errors')
          res.body['errors'][0].msg.should.equal("Must be in 'yyyy-mm-dd' format")          
          done()
        })
    })
  })

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

  describe("PUT /todo/:todoId", () => {
    it("should update todo 'done_flag' property  with id of 1 to 'true'", (done) => {
      const id = 1
      chai.request(app)
        .put(`/todo/${id}`)
        .type('json')
        .send({
          "done_flag": true
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(1);
          res.body.should.have.property('title');
          res.body.title.should.equal("Todo title");
          res.body.should.have.property('done_flag');
          res.body.done_flag.should.equal("true");
          res.body.should.have.property('deadline');
          res.body.deadline.should.equal("2019-10-01");
          done()
        })
    })

    it("should REJECT update because it can't find the todo of id '5'", (done) => {
      const id = 5
      chai.request(app)
        .put(`/todo/${id}`)
        .type('json')
        .send({
          "done_flag": true
        })
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.a('object');
          res.body.should.have.property('msg');
          res.body.msg.should.equal("Todo not found");
          done()
        })
    })
  })

  describe("DELETE /todo/:todoId", () => {
    it("should delete todo with the id of 1", (done) => {
      const id = 1
      chai.request(app)
        .delete(`/todo/${id}`)
        .type('json')
        .end((err, res) => {
          res.should.have.status(200)
          chai.expect(res.body).to.be.empty
          // I don't find similiar, code with 'should' keyword :(
          // And it's already 7 PM
          done()
        })
    })
  })
});