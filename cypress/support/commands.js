
  Cypress.Commands.add("getUsers", () => {
    return cy.request({
        method: 'GET',
        url: 'api/users', // Relative URL (baseUrl will be prepended)
    })    
});


Cypress.Commands.add("getSingleUser", function(id) {
    return cy.request({
        method: 'GET',
        url: 'api/users/'+id, 
    })

});

    Cypress.Commands.add("CreateUser", function(name, job) {
        return  cy.request({
            method: 'POST',
            url: 'api/users/', 
            body : 
            {
                "name" : name,
                "job" : job

            }
        })
    })   
    Cypress.Commands.add("UpdateUser", function(id, name, job) {
       return  cy.request({
            method: 'PUT',
            url: 'api/users/'+id, 
            body: {
                name: name,
                job: job
            }
        })
    })   


 Cypress.Commands.add("DeleteUser", function(id) {
      
        return cy.request({
            method: 'DELETE',
            url: `api/users/${id}`
        })
    });


    Cypress.Commands.add("NFErrorValidation", function() {

    return cy.request({
        method: 'GET',
        url: `api/users/23`,
        failOnStatusCode: false // Prevents Cypress from failing the test on 404
    })
    })
    Cypress.Commands.add("PaginatedUsers", function(pageno, perpage) {

    cy.request({
        method: 'GET',
        url: 'api/users',
        qs: { page: pageno, per_page: perpage } // Query parameters to paginate the list
    })
})

Cypress.Commands.add("checkResponseTime", function() {
   return  cy.request('GET', 'api/users')
})

Cypress.Commands.add("Login", function(email, password) {
   return cy.request({
    method: 'POST',
    url: 'api/login', 
    body:  {
        "email": email,
        "password": password
    },
    failOnStatusCode: false 
})
})


Cypress.Commands.add("Registration", function(email, password) {
    return cy.request({
     method: 'POST',
     url: 'api/register', 
     body:  {
         "email": email,
         "password": password
     },
     failOnStatusCode: false // Prevents Cypress from failing the test on 404
 })
 })