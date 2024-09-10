# project-internshipGroupX
Here's an enhanced and more interactive version of the project requirement for your README, complete with emojis to make it engaging:

---

## 🚀 Open to Intern Project Requirement

### 📁 Create a Group Database

- **Database Name:** `groupXDatabase`  
- You can clean the database you previously used and reuse it.
- Each group should work with **a single git branch**.  
  - Make sure every member **pulls the latest code** pushed by another team member before pushing their own changes.
  - Your branch will be checked as part of the demo.  
  - **Branch Naming Convention:** `project/internshipGroupX` (e.g., `project/internshipGroup1`).

### 🧭 Follow Naming Conventions

Ensure your backend code integrates smoothly with the frontend by adhering to the exact **request body** format.

---

## 📚 Models

### 🏫 College Model
```json
{
  "name": "iith", // Mandatory, unique (example: 'iith')
  "fullName": "Indian Institute of Technology, Hyderabad", // Mandatory (example)
  "logoLink": "https://s3-url.com", // Mandatory (Amazon S3 link)
  "isDeleted": false // Boolean, default: false
}
```

### 👩‍🎓 Intern Model
```json
{
  "name": "Jane Doe", // Mandatory
  "email": "jane.doe@iith.in", // Mandatory, valid email, unique
  "mobile": "90000900000", // Mandatory, valid mobile number, unique
  "collegeId": ObjectId("888771129c9ea621dc7f5e3b"), // Refers to College Model
  "isDeleted": false // Boolean, default: false
}
```

---

## 🌐 API Endpoints

### 1. **Create a College** - `POST /functionup/colleges`

- **Description:** Create a college document for each group member.  
- **Endpoint:** `BASE_URL/functionup/colleges`  
- The `logoLink` will be provided by the mentors (an Amazon S3 URL). Ensure the link is publicly accessible.  

**Example Request Body:**
```json
{
  "name": "iith",
  "fullName": "Indian Institute of Technology, Hyderabad",
  "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png"
}
```

### 2. **Create an Intern** - `POST /functionup/interns`

- **Description:** Create a document for an intern and save the `collegeId` along with the document.  
- **Request Body:** `{ name, mobile, email, collegeName }`  
- **Successful Response:**  
  - **HTTP Status:** `201`  
  - **Response Structure:**
  ```json
  {
    "status": true,
    "data": { /* Created Intern Document */ }
  }
  ```
- **Error Response:**  
  - **HTTP Status:** `400`  
  - **Response Structure:**
  ```json
  {
    "status": false,
    "message": "Invalid request"
  }
  ```

### 3. **Get College Details** - `GET /functionup/collegeDetails`

- **Description:** Returns details for the requested college, including a list of all interns who applied.  
- **Query Parameter:** `collegeName` (e.g., `iith`)  

**Example Successful Response:**
```json
{
  "status": true,
  "data": {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
    "interns": [
      {
        "_id": "123a47301a53ecaeea02be59",
        "name": "Jane Doe",
        "email": "jane.doe@iith.in",
        "mobile": "90000900000"
      },
      // More interns...
    ]
  }
}
```

---

## 🛠️ Testing

- Create a **Postman Collection** named `Project 2 Internship`.
- Add a new request for each API and name them appropriately, like **Create College**, **Get College Details**, etc.
- Ensure all requests are running successfully for each team member.

### 📑 Sample Documents

- **College:**
  ```json
  {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
    "isDeleted": false
  }
  ```
- **Intern:**
  ```json
  {
    "isDeleted": false,
    "name": "Jane Doe",
    "email": "jane.doe@iith.in",
    "mobile": "90000900000",
    "collegeId": ObjectId("888771129c9ea621dc7f5e3b")
  }
  ```

---
