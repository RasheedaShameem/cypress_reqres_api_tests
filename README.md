# Cypress API Automation Tests

This repository contains Cypress tests for testing public APIs **ReqRes** → [https://reqres.in/].

## Tools and Libraries Used
- **Cypress** - For API automation testing.
- **Faker.js** - For generating dynamic test data (e.g., random user names, job titles).
- **Chai Assertions** - For assertions on response data.
- **Cypress Custom Commands** - To modularize and reuse test logic.
- **Mochaawesome** - For test report generation

## Running the Tests

To execute the tests, follow these steps:

1. Install dependencies:
    ```bash
    npm install    
    ```
2. Run the tests:
    ```bash
    npm test   
    ```
3. View test reports (stored in `cypress/reports` directory).

## Test Scenarios
### **User Management**
- Fetch a list of users
- Fetch a single user by ID
- Create a new user
- Update user information
- Delete a user
- Response schema validation

### **Error Handling and Utilities**
- Validate response for a non-existent user
- Paginated list of users
- Validate API response time
- Login validation with missing/null data
- Registration with missing data

### **Authentication**
- Login validation
- Registration validation
  
