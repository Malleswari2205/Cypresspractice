describe("practice",()=>{
  it("sample",()=>{
    cy.visit("https://demoqa.com/elements")
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    
  })
})