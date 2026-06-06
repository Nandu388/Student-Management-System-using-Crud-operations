# ML- Crud Based Student Management System

A full-stack CRUD-based Student Management System built using Flask, SQLite, HTML, CSS, JavaScript, and Machine Learning.

This application allows users to:

* Create student records
* Read student details
* Update student information
* Delete student records
* Predict student performance using Machine Learning

The project uses SQLite database instead of storing data in JSON files.

---

# Features

✅ Create Student Records
✅ Read Student Data
✅ Update Student Details
✅ Delete Student Records
✅ Machine Learning Prediction
✅ SQLite Database Integration
✅ Flask REST API
✅ Responsive Frontend UI

---

# Technologies Used

| Technology   | Purpose             |
| ------------ | ------------------- |
| Python       | Backend Programming |
| Flask        | Web Framework       |
| SQLite       | Database            |
| HTML         | Frontend Structure  |
| CSS          | Styling             |
| JavaScript   | API Calls           |
| Scikit-learn | Machine Learning    |
| Git & GitHub | Version Control     |

---

# Project Structure

```plaintext
ml-crud-project/
│
├── app.py
├── model.py
├── database.db
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Nandu388/Student-Management-System-using-Curd-operations.git
```

## Move Into Project Folder

```bash
cd Student-Management-System-using-Curd-operations
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Run Project

```bash
python app.py
```

Open browser:

```plaintext
http://127.0.0.1:5000
```

---

# CRUD Operations

| Operation      | API Endpoint   | Method |
| -------------- | -------------- | ------ |
| Create Student | /students      | POST   |
| Get Students   | /students      | GET    |
| Update Student | /students/<id> | PUT    |
| Delete Student | /students/<id> | DELETE |

---

# Machine Learning Integration

The project includes a simple Machine Learning model using Logistic Regression.

The model predicts whether a student will:

* Pass
* Fail

Based on:

* Marks
* Attendance

---

# Database

This project uses SQLite database.

Database file:

```plaintext
database.db
```

Table Name:

```plaintext
students
```

Columns:

| Column     | Type    |
| ---------- | ------- |
| id         | INTEGER |
| name       | TEXT    |
| marks      | INTEGER |
| attendance | INTEGER |
| result     | TEXT    |

---

# Screenshots
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/5020e311-20d8-4313-b684-fc855bc0294e" />


## Home Page

* Add Student Form
* Student Records Table
* Edit and Delete Buttons

---

# Future Improvements

* User Authentication
* Bootstrap UI
* Search Functionality
* Dashboard Charts
* Export to PDF/Excel
* MySQL/PostgreSQL Integration
* Deployment on Render or Heroku

---

# Author

Nandini

---

# GitHub Repository

https://github.com/Nandu388/Student-Management-System-using-Curd-operations
