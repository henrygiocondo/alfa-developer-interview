import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

interface ResponsePeople {
  "nome": string,
  "sobrenome": string,
}

const BASE_URL = 'https://services.odata.org/v4/(S(34wtn2c0hkuk5ekg0pjr513b))/TripPinServiceRW'

const getPeopleFactory = (peoples: any[]): ResponsePeople[] => peoples.map(el => ({ nome: el.FirstName, sobrenome: el.LastName }))

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'If-Match': '*'
  }
}

class App {

  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.app.get('/is-alive', async (_req, res) => res.send(true))

    this.app.get('/airports', async (req, res) => {
      try {
        const { query: { address } } = req
        if (!address) throw new Error('address é obrigatório na query da requisição.')
        const { data: { value } } = await axios.get(`${BASE_URL}/Airports?$filter=contains(Location/Address, '${address}')`, axiosConfig)
        return res.send({ response: value })
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })

    this.app.get('/people', async (req, res) => {
      try {
        const { query: { username } } = req
        if (!username) throw new Error('username é obrigatório na query da requisição.')
        const { data: { value } } = await axios.get(`${BASE_URL}/People?$filter=contains(UserName, '${username}')&$select=FirstName, LastName`, axiosConfig)
        const response = getPeopleFactory(value)
        return res.send({ response })
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })

    this.app.post('/people', async (req, res) => {
      try {
        const { body } = req
        const { status } = await axios.post(`${BASE_URL}/People`, body, axiosConfig)
        if (status !== 201) throw new Error('Erro ao salvar registro')
        return res.send({ message: 'Sucesso' })
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })

    this.app.delete('/people/:username', async (req, res) => {
      try {
        const { params: { username } } = req
        await axios.delete(`${BASE_URL}/People('${username}')`, axiosConfig)
        return res.send({ message: 'Sucesso' })
      } catch (error) {
        return res.status(500).send({ err: true, message: error.message })
      }
    })
  }

  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
}

export default new App().app