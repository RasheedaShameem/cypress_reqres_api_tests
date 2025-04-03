const { faker } = require('@faker-js/faker'); 

describe("ReqRes API Testing - User Management Scenarios", () => {

    beforeEach(() => {
        cy.fixture("UserData").as("userData");
    });


    it("Should fetch a list of users", () => {
        cy.getUsers().then((response) => {
            expect(response.status).to.eq(200); 
            cy.log("Page: " + response.body.page);
            cy.log("Total Users: " + response.body.total);
            console.log("Users Data:", response.body.data);

        });
    })

    it("Should fetch a single user", function () {
        cy.getSingleUser(this.userData.id).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.data.id).to.eq(1)
        });

    });

    it("Should create a new user", function () {
        const newUser = {
            name: faker.person.firstName(),
            job: faker.person.jobTitle()
        };
        cy.CreateUser(newUser.name, newUser.job).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body.name).to.eq(newUser.name); 
            expect(response.body.job).to.eq(newUser.job); 
         
        });
    });


    
    it("Should update user information", function () {
        const updatedUser = {
            name: faker.person.firstName(),
            job: faker.person.jobTitle()
        };
    
      cy.UpdateUser(2, updatedUser.name,updatedUser.job).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(updatedUser.name);
        expect(response.body.job).to.eq(updatedUser.job);
    });
      
    });

    
    it("Should delete a user", function () {
        const userIdToDelete = 2; // Specify a user ID to delete
        cy.DeleteUser(userIdToDelete).then((response) => {
            expect(response.status).to.eq(204); // Status code for successful deletion
        });
    
    });

    it("Should fetch a list of users and validate response schema", function () {
        cy.getUsers().then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).to.be.an('array');          
          // Validate schema of each user
          response.body.data.forEach((user) => {
            expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
            expect(user.id).to.be.a('number');
            expect(user.email).to.be.a('string');
            expect(user.first_name).to.be.a('string');
            expect(user.last_name).to.be.a('string');
            expect(user.avatar).to.be.a('string');
          });
        });
      });


})