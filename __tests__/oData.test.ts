import supertest from 'supertest'
import app from '../src/index'
const request = supertest(app)
const PATH_PEOPLE = '/people'
const PATH_AIRPORTS = '/airports'
const USERNAME = 'hc3'

const makePeople = (username: string, firstname: string, lastname: string) => {
  return {
    UserName: username,
    FirstName: firstname,
    LastName: lastname,
    Emails: [
      `${firstname}_${lastname}@example.com`
    ],
    AddressInfo: [
      {
        Address: "228 Rua XXWWK Ln.",
        City: {
          CountryRegion: "United States",
          Name: "Boise",
          Region: "ID"
        }
      }
    ],
    Gender: "Male"
  }
}

beforeAll(async () => {
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry998', 'Henry', 'Costa')).set('Accept', 'application/json')
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry1998', 'Henry', 'Silva')).set('Accept', 'application/json')
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry9598', 'Henry', 'Junior')).set('Accept', 'application/json')
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry9988', 'Henry', 'Santos')).set('Accept', 'application/json')
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry998', 'Henry', 'Costa')).set('Accept', 'application/json')
  await request.post(`${PATH_PEOPLE}`).send(makePeople('Henry9948', 'Henry', 'Jesus')).set('Accept', 'application/json')
})

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
    const { status } = await request.post(`${PATH_PEOPLE}`).send(makePeople(USERNAME, 'Eliel', 'Santos')).set('Accept', 'application/json')
    expect(status).toBe(200)
    done()
  })

  test('***Excluir*** a pessoa que você incluiu acima', async done => {
    const { status } = await request.delete(`${PATH_PEOPLE}/${USERNAME}`)
    expect(status).toBe(200)
    done()
  })

  test('Consultar todos os aeroportos que o ***endereço da localização*** contenha a palavra District', async done => {
    const { status, body: { response } } = await request.get(`${PATH_AIRPORTS}`).query({ address: 'District' }).send()
    expect(status).toBe(200)
    expect(response.length).toBeGreaterThan(0)
    done()
  })

})

