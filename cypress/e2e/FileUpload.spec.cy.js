describe("File upload",()=>{
    it("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('API Testing Handbook.pdf')
        cy.get("#file-submit").click();
        cy.get('//*[@id="content"]/div').should('have.text','File Uploaded!')

    })
    it("File upload-Rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'API Testing Handbook.pdf',fileName:'API.pdf'})
        cy.get("#file-submit").click();
        cy.get('//*[@id="content"]/div').should('have.text','File Uploaded!')

    })
    it("File upload -Drag and Drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile('API Testing Handbook.pdf',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('be.visible')
       

    })
    it("Multiple files upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(['API Testing Handbook.pdf','Playwright.pdf'])
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')


    })
    it.only("File upload -Shadow DOM",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("API Testing Handbook.pdf")
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("API Testing Handbook.pdf")

    })

    

})