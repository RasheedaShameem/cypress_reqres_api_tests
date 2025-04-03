describe("ReqRes API Testing - Error Handling and Utilities", () => {

    beforeEach(() => {
        cy.fixture("UserData").as("userData");
    });


    it("Should return 404 for non-existent user", function () {
        cy.NFErrorValidation().then((response) => {
            expect(response.status).to.eq(404);
           
        })  
     
     });

    it("Should return paginated list of users", function () {
        const page =1;
        const perpage =12
        cy.PaginatedUsers(page ,perpage).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.page).to.eq(page);
            expect(response.body.per_page).to.eq(perpage);
            expect(response.body.data.length).to.eq(perpage);
        });
    });

    it("Should return response within acceptable time", function () {
        cy.checkResponseTime().then((response) => {
            expect(response.duration).to.be.lessThan(2000); // Ensure response time is under 2 seconds
        });
        
    });

    it("Should fail to register a new user with missing details", function () {
        const invalidUser = {
          email: "",  
          password : ""
        };      
        cy.Registration(invalidUser.email, invalidUser.password).then((response) => {

          expect(response.status).to.eq(400); // Expect a bad request due to missing fields
          expect(response.body.error).to.eq("Missing email or username");
        });
      });
  
      it("Should fail to login a user with missing password", function () {
     
        cy.Login(this.userData.loginData.email, "").then((response) => {
          expect(response.status).to.eq(400); // Expect a bad request due to missing fields
          expect(response.body.error).to.eq("Missing password");
        });
      });




})
