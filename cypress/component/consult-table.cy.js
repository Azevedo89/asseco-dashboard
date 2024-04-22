const { Table } = require('pages/consult/components/ConsultTable')

const data = [
  {
    address: '372 Asia Common Apt. 031',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    birthDate: '1996-06-12',
    cc: 526887033,
    codigoResidencia: 'RP',
    company: 'Koepp Group',
    email: 'Eunice24@gmail.com',
    firstName: 'Eunice',
    id: 2,
    jobAdmission: '2021-03-21',
    jobCompany: 'Howell - Weber',
    jobTitle: 'Human Implementation Agent',
    lastName: 'Wuckert',
    nationality: 'Peruvian',
    naturality: 'Saint Helena',
    nif: 338889110,
    phone: '+351 901 100 471',
    sex: 'female',
  },
  {
    address: '7598 Kutch Rue Suite 564',
    avatar: 'https://randomuser.me/api/portraits/men/92.jpg',
    birthDate: '1979-02-28',
    cc: 524761514,
    codigoResidencia: 'RP',
    company: 'Kerluke, Macejkovic and Hauck',
    email: 'Samuel.OKeefe40@hotmail.com',
    firstName: 'Samuel',
    id: 4,
    jobAdmission: '2018-12-11',
    jobCompany: 'Torphy, Gibson and Feil',
    jobTitle: 'Lead Brand Engineer',
    lastName: "O'Keefe",
    nationality: 'Guatemalan',
    naturality: 'Cayman Islands',
    nif: 626590879,
    phone: '+351 963 733 291',
    sex: 'male',
  },
]

describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
  })

  it('renders', () => {
    cy.mount(<Table tableData={[]} />)
    cy.contains('Cartão de Cidadão').should('exist')
    cy.contains('Primeiro Nome').should('exist')
    cy.contains('Último Nome').should('exist')
    cy.contains('Email').should('exist')
    cy.contains('Sexo').should('exist')
    cy.contains('Sem dados').should('exist')
  })

  it('measure performance', () => {
    cy.measurePerformance(<Table tableData={[]} />).then((result) => cy.log('measurePerformance', result))
  })

  it('has 2 rows', () => {
    cy.mount(<Table tableData={data} />)
    cy.contains('Sem dados').should('not.exist')
    cy.get('tbody > tr').should('have.length', 2)
  })

  it('measure performance', () => {
    cy.measurePerformance(<Table tableData={data} />).then((result) => cy.log('measurePerformance', result))
  })
})
