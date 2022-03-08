it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('default value is 0', () => {
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains(0)
  })

  for (let i = 0; i < 10; i++) {
    it('check keypad button ' + i, () => {
      cy.get('button').contains(i).click()
      cy.get('.components__DisplayComponent-sc-17khll6-0')
        .contains(i)
    })
  }
  
  it('expression check 1+1=2', () => {
    cy.get('button').contains(1).click()
    cy.get('button').contains('+').click()
    cy.get('button').contains(1).click()
    cy.get('button').contains('=').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('2')
  })
  it('expression check 2*2=4', () => {
    cy.get('button').contains(2).click()
    cy.get('button').contains('*').click()
    cy.get('button').contains(2).click()
    cy.get('button').contains('=').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('4')
  })
  it('expression check 2-1=1', () => {
    cy.get('button').contains(2).click()
    cy.get('button').contains('-').click()
    cy.get('button').contains(1).click()
    cy.get('button').contains('=').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('1')
  })
  it('expression check 4/2=2', () => {
    cy.get('button').contains(4).click()
    cy.get('button').contains('/').click()
    cy.get('button').contains(2).click()
    cy.get('button').contains('=').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('2')
  })
  it('expression check 2*(2+2)=8', () => {
    cy.get('button').contains(2).click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains(2).click()
    cy.get('button').contains('+').click()
    cy.get('button').contains(2).click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('=').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('8')
  })

  it('check keypad button C', () => {
    cy.get('button').contains(2).click()
    cy.get('button').contains('C').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('0')
  })
  it('check keypad button CE', () => {
    cy.get('button').contains(1).click()
    cy.get('button').contains(2).click()
    cy.get('button').contains(3).click()
    cy.get('button').contains('CE').click()
    cy.get('button').contains('CE').click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('1')
  })
  it('check keypad button .', () => {
    cy.get('button').contains(1).click()
    cy.get('button').contains('.').click()
    cy.get('button').contains(1).click()
    cy.get('.components__DisplayComponent-sc-17khll6-0')
      .contains('1.1')
  })
  
  it('check history', () => {
    cy.get('button').contains(1).click()
    cy.get('button').contains('+').click()
    cy.get('button').contains(1).click()
    cy.get('button').contains('=').click()
    cy.get('.components__HistoryItem-sc-1ydwq76-3')
      .contains('1 + 1 = 2')
  })

  it('check button clean history', () => {
    cy.get('button').contains(1).click()
    cy.get('button').contains('+').click()
    cy.get('button').contains(1).click()
    cy.get('button').contains('=').click()
    cy.visit('/settings')
    cy.get('.components__ClearButton-z3jwdb-3')
      .contains('Clear All History').click()
    cy.visit('/home')
    cy.get('.components__HistoryContainer-sc-1ydwq76-2')
      .should('be.empty')
  })
})

describe('Setting page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  it('check change Colored Theme', () => {
    cy.get('.components__ThemeSelect-z3jwdb-1')
      .select('Colored Theme')
    cy.get('.components__HeaderComponent-sc-1p8fyki-0')
      .should(
      'have.css',
      'background-color',
      'rgb(128, 0, 128)',
      )
    })
  it('check change Ligth Theme', () => {
    cy.get('.components__ThemeSelect-z3jwdb-1')
      .select('Ligth Theme')
    cy.get('.components__HeaderComponent-sc-1p8fyki-0')
      .should(
      'have.css',
      'background-color',
      'rgb(255, 250, 250)',
      )
  })
  it('check change Dark Theme', () => {
    cy.get('.components__ThemeSelect-z3jwdb-1')
      .select('Dark Theme')
    cy.get('.components__HeaderComponent-sc-1p8fyki-0')
      .should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
      )
  })
})
