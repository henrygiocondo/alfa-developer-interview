import supertest from 'supertest'
import app from '../src/index'
const request = supertest(app)
const PATH_PEOPLE = '/people'

const people = {
  "UserName": "hc3",
  "FirstName": "Eliel",
  "LastName": "Santos",
  "Emails": [
    "eliel@example.com"
  ],
  "AddressInfo": [
    {
      "Address": "228 Rua XXWWK Ln.",
      "City": {
        "CountryRegion": "United States",
        "Name": "Boise",
        "Region": "ID"
      }
    }
  ],
  "Gender": "Male"
}

describe('DEVELOPER INTERVIEW - ALFA ERP', () => {

  test('Server está online?', async done => {
    const { status, body } = await request.get(`/is-alive`).query({ username: 'Henry' }).send()
    expect(status).toBe(200)
    expect(body).toBe(true)
    done()
  })

  test('Tentar consultar pessoas sem enviar a query username', async done => {
    const { status } = await request.get(`${PATH_PEOPLE}`).send()
    expect(status).toBe(500)
    done()
  })

  test('Consultar nome e sobrenome das pessoas com nome de usuário que contenha Henry', async done => {
    const { status, body: { response } } = await request.get(`${PATH_PEOPLE}`).query({ username: 'Henry' }).send()
    expect(status).toBe(200)
    expect(response.length).toBeGreaterThan(0)
    done()
  })

  test('***Incluir*** uma pessoa', async done => {
    const { status } = await request.post(`${PATH_PEOPLE}`).send(people).set('Content-Type', 'application/json')
    expect(status).toBe(200)
    done()
  })

})

