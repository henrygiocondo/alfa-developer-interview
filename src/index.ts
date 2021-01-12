import express from 'express'
import * as bodyParser from 'body-parser'
import axios from 'axios'

interface ResponsePeople {
  "nome": string,
  "sobrenome": string,
}

const BASE_URL = 'https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW'

const getPeopleFactory = (peoples: any[]): ResponsePeople[] => peoples.map(el => ({ nome: el.FirstName, sobrenome: el.LastName }))

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};

class App {

  public app: express.Application

  constructor() {
    this.app = express()
    this.app.get('/is-alive', async (_req, res) => res.send(true))
    this.app.get('/people', async (req, res) => {
      try {
        const { query: { username } } = req
        if (!username) throw new Error('username é obrigatório na query da requisição.')
        const { data: { value } } = await axios.get(`${BASE_URL}/People?$filter=contains(UserName, '${username}')&$select=FirstName, LastName`)
        const response = getPeopleFactory(value)
        return res.send({ response })
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })

    this.app.post('/people', async (req, res) => {
      try {
        const { body } = req
        const x = await axios.post(`${BASE_URL}/People`, JSON.stringify(body), axiosConfig)
        console.log(x)
        return res.send({})
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })


    this.config()
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    // this.app.use(express.static('src/public'))
  }
}

export default new App().app