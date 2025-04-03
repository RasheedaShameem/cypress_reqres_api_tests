
describe("ReqRes API Testing", () => {
    beforeEach(() => {
      cy.fixture("UserData").as("userData");
    });
   
  
    it("Should login successfully and return token", function () {
        cy.Login(this.userData.loginData.email, this.userData.loginData.password).then((response) => {
  
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            cy.log("Token: " + response.body.token); 
        });
    });

    it("Should register successfully", function () {

        cy.Registration(this.userData.RegData.email, this.userData.RegData.password).then((response) => {
   
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(4);
            expect(response.body).to.have.property('token');
            cy.log("Token: " + response.body.token); 
        });
    });
})