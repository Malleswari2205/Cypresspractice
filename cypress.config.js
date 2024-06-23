const { defineConfig } = require("cypress");
const { on } = require("events");

module.exports = defineConfig({
  video :true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners her
     pageLoadTimeout:6000
   
    
    
      
     
    }
    
  },
  
  "compilerOptions": {
    "types": ["cypress", "@testing-library/cypress"]
  }

});
