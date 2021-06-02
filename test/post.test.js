let mongoose = require('mongoose')
let Post = require('../models/Post')

//Подключаем dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index')
let should = chai.should()

chai.use(chaiHttp)
//Наш основной блок
describe('Parties', () => {
  /*
   * Тест для /GET
   */
  describe('/GET book', () => {
    it('it should GET all the parties', (done) => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('it should Post all the party', (done) => {
      chai
        .request(server)
        .post('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})
describe('User', () => {
  it('it should GET user', (done) => {
    chai
      .request(server)
      .get('/user/Honchar007')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })
})
describe('/POST party', () => {
  it('it should not POST a party without name of the party', (done) => {
    let party = {
      city: 'Kiev',
      text: 'party without name',
      imgUrl: 'some img',
      bees: true,
      street: 'Khreshatyk',
      numberHouse: '30',
      phone: '38068058585',
    }
    chai
      .request(server)
      .post('/add')
      .send(party)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('title')
        res.body.errors.should.have.property('title')
        done()
      })
  })
  it('it should POST a party', (done) => {
    let party = {
      title: 'KISS KISS, KISS KISS',
      city: 'Kiev',
      text: 'party without name',
      imgUrl: 'some img',
      bees: true,
      street: 'Khreshatyk',
      numberHouse: '30',
      phone: '38068058585',
    }
    chai
      .request(server)
      .post('/add')
      .send(party)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})
