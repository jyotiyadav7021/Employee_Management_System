
const employees = [
  {
      "id": 1,
      "firstName": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Prepare monthly report",
              "description": "Compile the financial data and prepare a report for management.",
              "date": "2025-03-10",
              "category": "Finance",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Update CRM records",
              "description": "Ensure all client interactions are recorded in the CRM system.",
              "date": "2025-03-12",
              "category": "Admin",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": { "active": 3, "newTask": 1, "completed": 2, "failed": 0 }
  },
  {
      "id": 2,
      "firstName": "Raj",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Design marketing campaign",
              "description": "Create visuals and messaging for the upcoming campaign.",
              "date": "2025-03-15",
              "category": "Marketing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Social media audit",
              "description": "Analyze engagement and performance metrics on social platforms.",
              "date": "2025-03-14",
              "category": "Marketing",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
      "id": 3,
      "firstName": "Vikram",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Customer follow-up calls",
              "description": "Reach out to customers for feedback on recent purchases.",
              "date": "2025-03-13",
              "category": "Customer Support",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
  },
  {
      "id": 4,
      "firstName": "Suresh",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Server maintenance",
              "description": "Perform a routine security check and update the server.",
              "date": "2025-03-16",
              "category": "IT",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
  },
  {
      "id": 5,
      "firstName": "Anjali",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Inventory check",
              "description": "Ensure all stock levels are up-to-date in the system.",
              "date": "2025-03-11",
              "category": "Operations",
              "active": false,
              "newTask": true,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": { "active": 0, "newTask": 1, "completed": 1, "failed": 0 }
  }
];

  
  
  
    const admin =  [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }]
      
    export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))

    }

    export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        
        return {employees,admin}
        
    }