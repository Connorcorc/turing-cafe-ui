describe('app testing', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations').as('reservations')
    cy.visit('localhost:3000/')
    cy.wait('@reservations')
    cy.stub({
"id": 1,
"name": "Christie",
"date": "12/29",
"time": "7:00",
"number": 12
})

  })

  it('should visit the app page', () => {
    cy.url('localhost:3000/')
  })

  it('should display a form to make a reservation', () => {
    cy.get('form')
  })

  it('should have a header', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('should have a container for reservations', () => {
    cy.get('.res-container')
  })

  it('should have a name, date, time, and number of guests in a reservation', () => {
    cy.get('.res-container > :nth-child(1)').contains('Christie')
    cy.get('.res-container > :nth-child(1)').contains('12/29')
    cy.get('.res-container > :nth-child(1)').contains('Time: 7:00')
    cy.get('.res-container > :nth-child(1)').contains('Number of Guests: ')
  })

  it('should be able to input data into form fields', () => {
    cy.get(`[placeholder="Name"]`).type("Bob")
    cy.get(`[type="date"]`).type("2022-10-10")
    cy.get(`[type="time"]`).type("20:00")
    cy.get(`[placeholder="guests"]`).type("4")
    cy.get(`form > button`).click()
    cy.get('.res-container > :nth-child(10)').contains('Bob')
    cy.get('.res-container > :nth-child(10)').contains('2022-10-10')
    cy.get('.res-container > :nth-child(10)').contains('Time: 20:00')
    cy.get('.res-container > :nth-child(10)').contains('Number of Guests: 04')
  })
})
