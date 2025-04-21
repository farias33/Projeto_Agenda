# 📒 Contact Agenda Project

## 🌟 Overview

Imagine a simple, yet functional digital agenda where you can:
- 📥 Add contacts
- 🔍 View all contacts
- ✏️ Edit contact details
- ❌ Delete a contact
- 🔐 Create an account and log in

All of this with a touch of security: CSRF protection and password hashing using bcrypt.

---

## 🚀 Technologies Used

- **Node.js** & **Express** – Backend development
- **MongoDB** – Database for storing contacts
- **Mongoose** – Schema and model structure
- **EJS** – Templating for rendering HTML
- **Bootstrap** – Responsive, clean design
- **bcryptjs** – Password security
- **express-session** & **connect-mongo** – Session handling
- **express-flash** – Feedback messages for users
- **csurf** – CSRF protection

---

## 👤 Features

### 🧾 Authentication
- Account creation with validation
- Login with encrypted passwords
- Persistent user sessions

### 📇 Contacts
- Form to create a new contact
- Full contact list
- Edit and delete contacts
- Key validations: name required, valid email, at least one way to reach out (email or phone)

---

## 📂 How to Run the Project Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/contact-agenda.git
