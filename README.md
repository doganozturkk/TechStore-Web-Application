<h1 align="center">
  <span style="
    background: linear-gradient(to right, #0d6efd, #20c997);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 40px;
    font-weight: 900;
  ">
    TechStore Web Application
  </span>
</h1>

<p align="center" style="
  font-size: 18px;
  color: #555;
  margin-top: -10px;
">
  <i>A complete online technology store developed progressively through four web development assignments</i>
</p>

<p align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2djbWdpNnZvY3VsOWxwaGFxeHE1N2wyMTZsdWpuZjc5ZDBsZGh1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AFdcYElkoNAUE/giphy.gif" width="320" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-E34F26?logo=html5&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/CSS-Styling-1572B6?logo=css3&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/Bootstrap-Responsive%20UI-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-Dynamic%20Functionality-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white&style=for-the-badge">
  <img src="https://img.shields.io/badge/Express.js-REST%20API-E34F26?logo=express&logoColor=white&style=for-the-badge">
</p>

---

## 📌 Overview

**TechStore** is a complete online technology store developed progressively through four web development assignments.

The project starts with a static website built using **HTML and CSS** and gradually evolves into a responsive and interactive web application with **Bootstrap, JavaScript, JSON data handling, and a Node.js / Express backend**.

The store focuses on technology products such as:

* 💻 Laptops
* 📱 Smartphones
* 🎧 Audio Devices
* ⌚ Accessories

The application includes product categories, product details, a product gallery, product management forms, login functionality, dynamic product loading, membership calculations, promotional countdowns, and a backend API for managing store data.

Each assignment represents a new stage of development and builds upon the functionality implemented in the previous stage.

---

## 📁 Project Structure

```text
TechStore-Web-Application/
│
├── Task-1-HTML-CSS/
│   └── ...
│
├── Task-2-Bootstrap/
│   └── ...
│
├── Task-3-JavaScript/
│   └── ...
│
├── Task-4-NodeJS/
│   ├── add-product.html
│   ├── categories.html
│   ├── details.html
│   ├── gallery.html
│   ├── index.html
│   ├── login.html
│   │
│   ├── style.css
│   ├── script.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   │
│   ├── items.json
│   ├── users.json
│   ├── items.txt
│   ├── categories.txt
│   ├── suppliers.txt
│   │
│   └── product images
│
└── README.md
```

The repository is organized by assignment so that the development process and evolution of the application can be clearly followed from the first static implementation to the final Node.js-powered version.

---

# 🧩 Assignment Progression

The project was developed incrementally across four assignments. Each stage introduced new technologies and functionality while extending the existing online store.

---

## Assignment 01 — HTML & CSS

The first assignment establishes the basic structure and visual identity of the TechStore website.

The project begins as a static online store containing multiple HTML pages and prepared product data stored in TXT files.

### Main Pages

The website includes:

* 🏠 **Home Page**
* 📦 **Product Categories**
* 🔎 **Product Details**
* 🖼️ **Product Gallery**
* ➕ **Add Product**

### Product Data

Temporary TXT files were prepared to represent the store's data, including:

* Product information
* Product categories
* Supplier information

Product data contains properties such as:

* Product ID
* Product name
* Price
* Supplier
* Category
* Purchase information

### HTML Structure

The website makes use of semantic HTML5 elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

The pages also demonstrate common HTML elements including:

* Headings
* Paragraphs
* Links
* Images
* Tables
* Ordered and unordered lists
* Text formatting
* Horizontal separators

### Product Pages

The store provides dedicated pages for product categories and individual product details.

Product detail pages contain information such as:

* Product name
* Description
* Price
* Category
* Supplier
* Product image
* Additional properties

### Product Form

An HTML form was created to allow users to add a new product to the store.

The form demonstrates different HTML form controls including:

* Text inputs
* Number inputs
* Text areas
* Dropdown menus
* Selections
* Required fields
* Basic form validation

### CSS Styling

A separate CSS stylesheet is used throughout the website.

The styling covers:

* Text colors
* Background colors
* Borders
* Buttons
* Transparency
* Margins
* Padding
* Classes
* IDs
* Combined selectors

Additional styling was implemented for:

* Navigation menus
* Hover effects
* Active links
* Visited links
* Custom fonts
* List icons
* General page layout

---

# Assignment 02 — Bootstrap

The second assignment upgrades the existing website by introducing **Bootstrap** and responsive web design.

The main goal of this stage is to make the online store visually cleaner and usable across different screen sizes.

### Responsive Layout

The website uses the **Bootstrap Grid System** to create responsive layouts.

The interface adapts to:

* Desktop screens
* Tablets
* Mobile devices

Bootstrap columns and responsive utility classes are used throughout the pages.

### Navigation

The navigation system was upgraded with Bootstrap components.

The menu includes:

* Responsive navigation
* Dropdown functionality
* Active navigation states
* Mobile-friendly behavior

### Bootstrap Components

Bootstrap was used to style several parts of the application, including:

* Buttons
* Forms
* Input fields
* Links
* Headings
* Text
* Tables
* Alerts

The appearance of alerts was also customized to better match the TechStore design.

### Footer

A structured footer was added to the website to provide a consistent ending section across the pages.

---

# Assignment 03 — JavaScript

The third assignment introduces **JavaScript** and transforms the website from a primarily static interface into an interactive web application.

JavaScript is used to implement dynamic content, calculations, validation, and JSON-based product loading.

---

## 🕒 Date & Time

The current date and time are dynamically displayed on the website.

The displayed value is updated every second using JavaScript.

The date is formatted using the JavaScript `Date` object and localized date/time formatting.

---

## ⏳ Happy Hour Countdown

TechStore includes a promotional **Happy Hour** countdown.

The application calculates the remaining:

* Hours
* Minutes
* Seconds

until the end of the promotional period.

The countdown is updated every second.

Example:

```text
5h 32m 18s remaining
```

---

## ✅ Form Validation

JavaScript validation was added to the product form.

The application checks whether required fields satisfy the expected input requirements.

Validation can be used to detect:

* Empty fields
* Inputs that are too short
* Inputs that are too long
* Invalid values

Appropriate messages are displayed when the submitted data does not satisfy the required conditions.

---

## 💳 Membership Fee Calculator

A membership form was added to the online store.

Users can calculate membership fees based on different membership packages.

The available options include different membership durations such as:

* Monthly membership
* Yearly membership

The calculator dynamically determines the appropriate membership fee based on the selected package.

---

## 📦 JSON Product Data

The product catalog was extended using a JSON document.

The JSON data contains multiple products and their properties.

Each product includes information such as:

* ID
* Name
* Category
* Price
* Supplier
* Stock
* Rating
* Purchase date
* Description

The JSON document is parsed using JavaScript and its contents are displayed dynamically inside an HTML table.

The product data is loaded whenever the page is loaded, demonstrating the use of the `onload` / page-load functionality.

---

# Assignment 04 — Node.js & Express Backend

The fourth assignment transforms TechStore into a client-server web application by introducing **Node.js and Express.js**.

The frontend communicates with a backend server using HTTP requests.

The backend is responsible for:

* User login
* Product retrieval
* Product creation
* JSON data management

The Node.js server runs on:

```text
http://localhost:3000
```

---

## 🟢 Node.js Server

The backend is implemented using **Express.js**.

The server uses middleware for:

* JSON request parsing
* URL-encoded form data
* CORS
* Static file serving

The main backend file is:

```text
server.js
```

The project dependencies are defined in:

```text
package.json
```

The main dependencies are:

* `express`
* `cors`

---

# 🔐 Login System

The final version includes a simulated user login system.

Users enter their credentials through the login page.

The frontend sends the login information to the backend using:

```http
POST /login
```

The server reads the user information from:

```text
users.json
```

and checks whether a matching username and password exist.

### Successful Login

If the credentials are correct, the server returns the user's ID.

Example response:

```json
{
  "userId": 1,
  "message": "Login successful."
}
```

The returned user information is then stored on the client side using:

```javascript
sessionStorage
```

This allows the website to recognize the logged-in user during the current browser session.

### Unsuccessful Login

If the credentials are incorrect, the server returns an HTTP `401` response together with an error message.

```text
401 Unauthorized
```

---

# 📦 Product Loading

The product catalog is no longer loaded only from static frontend data.

Instead, products are requested from the Node.js backend using:

```http
GET /products
```

The server reads the product information from:

```text
items.json
```

and returns the available products as JSON.

The frontend then processes the response and dynamically generates the product information.

This creates a clear separation between:

```text
Frontend
   │
   │ GET /products
   ▼
Node.js / Express
   │
   ▼
items.json
```

---

# 📊 Dynamic Product Tables

Products received from the backend are displayed dynamically inside HTML tables.

The frontend uses JavaScript to:

1. Send a request to the backend.
2. Receive the product JSON data.
3. Process the returned array.
4. Generate HTML table rows.
5. Insert the generated content into the page.

This means the product table is generated from the current backend data rather than being manually hard-coded into the HTML.

---

# ➕ Product Adding

The final version also allows users to add new products through the product form.

When the form is submitted, the product information is sent to the backend using:

```http
POST /products
```

The Node.js server:

1. Reads the existing `items.json` file.
2. Parses the product data.
3. Determines the next available product ID.
4. Adds the new product.
5. Writes the updated data back to `items.json`.
6. Returns the newly created product.

The server responds with:

```text
201 Created
```

when the product has been successfully added.

The basic process is:

```text
Product Form
     │
     ▼
JavaScript
     │
     │ POST /products
     ▼
Express Server
     │
     ▼
items.json
     │
     ▼
Updated Product List
```

---

# 🔄 Client–Server Architecture

The final version of TechStore follows a simple client-server architecture.

```text
┌──────────────────────────────┐
│        Frontend              │
│                              │
│ HTML + CSS + Bootstrap       │
│ JavaScript                   │
└──────────────┬───────────────┘
               │
               │ HTTP Requests
               ▼
┌──────────────────────────────┐
│        Node.js Server        │
│                              │
│ Express.js                   │
│ CORS                         │
│ JSON Parsing                 │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        JSON Storage          │
│                              │
│ users.json                   │
│ items.json                   │
└──────────────────────────────┘
```

The architecture separates the user interface from the server-side logic and data storage.

---

# 🛍️ Store Features

The completed TechStore application provides a range of online store functionality.

### Product Management

* Product categories
* Product details
* Product gallery
* Product tables
* Product search
* Product creation
* Dynamic product loading

### User Interaction

* Login form
* Login validation
* Session storage
* Product form validation
* Membership fee calculator
* Happy Hour countdown
* Live date and time

### Backend

* Express.js server
* REST-style HTTP endpoints
* `GET` requests
* `POST` requests
* JSON file reading
* JSON file writing
* Dynamic product IDs
* HTTP status codes
* CORS middleware

---

# 🌐 API Endpoints

The Node.js backend provides the following main endpoints.

| Method | Endpoint    | Description                         |
| ------ | ----------- | ----------------------------------- |
| `POST` | `/login`    | Authenticate a user                 |
| `GET`  | `/products` | Retrieve all products               |
| `POST` | `/products` | Add a new product                   |
| `GET`  | `/`         | Check whether the server is running |

### Login

```http
POST /login
```

Receives:

```json
{
  "username": "username",
  "password": "password"
}
```

Returns the user's ID after successful authentication.

### Get Products

```http
GET /products
```

Returns the complete product collection from `items.json`.

### Add Product

```http
POST /products
```

Receives a new product object and adds it to the existing product collection.

---

# 📋 Data Model

The application uses JSON files as a lightweight data storage mechanism.

### Products

```text
items.json
```

contains the online store's product catalog.

Products contain multiple properties, including:

* ID
* Name
* Category
* Price
* Supplier
* Stock
* Rating
* Purchase date
* Description

### Users

```text
users.json
```

contains the users used by the simulated login system.

---

# 🎨 User Interface

The TechStore interface is designed around a clean technology-store aesthetic.

The application uses:

* Responsive layouts
* Bootstrap components
* Custom CSS
* Product images
* Navigation menus
* Tables
* Forms
* Alerts
* Cards and sections
* Interactive elements

The same visual structure is progressively improved throughout the four assignments.

---

# ✨ Key Features

✔ Online technology store concept

✔ Semantic HTML5 structure

✔ Custom CSS styling

✔ Responsive Bootstrap layout

✔ Bootstrap navigation and dropdowns

✔ Product categories

✔ Product details

✔ Product gallery

✔ Product management form

✔ JavaScript date and time

✔ Happy Hour countdown

✔ JavaScript form validation

✔ Membership fee calculator

✔ JSON product data

✔ Dynamic HTML product tables

✔ Node.js backend

✔ Express.js server

✔ Simulated user authentication

✔ `sessionStorage` user session

✔ GET product API

✔ POST product API

✔ Dynamic product creation

✔ JSON-based data persistence

✔ HTTP status handling

✔ CORS middleware

---

# 🛠️ Technologies

* **HTML5**
* **CSS3**
* **Bootstrap**
* **JavaScript**
* **JSON**
* **Node.js**
* **Express.js**
* **REST-style HTTP APIs**
* **Fetch API**
* **Session Storage**
* **Responsive Web Design**

---

# 📈 Project Evolution

The main purpose of the project was to demonstrate how a web application can gradually evolve from a static website into a client-server application.

```text
HTML & CSS
     │
     ▼
Basic Online Store
     │
     ▼
Bootstrap
     │
     ▼
Responsive User Interface
     │
     ▼
JavaScript
     │
     ▼
Interactive Web Application
     │
     ▼
JSON Data
     │
     ▼
Dynamic Product Management
     │
     ▼
Node.js + Express
     │
     ▼
Client–Server Web Application
```

Each assignment introduces a new layer of functionality while preserving and extending the work from the previous stage.

---

# 🎯 Learning Objectives

This project demonstrates practical knowledge of several fundamental web development concepts.

### HTML & CSS

* Semantic HTML
* Page structure
* Forms
* Tables
* Images
* Links
* CSS selectors
* Layout
* Spacing
* Navigation styling

### Bootstrap

* Grid system
* Responsive design
* Navigation components
* Dropdown menus
* Buttons
* Forms
* Tables
* Alerts
* Responsive utilities

### JavaScript

* DOM manipulation
* Event handling
* Form validation
* Date and time handling
* Timers
* Countdown calculations
* JSON parsing
* Dynamic HTML generation
* Fetch API
* Session storage

### Node.js

* Express.js
* HTTP request handling
* Middleware
* REST-style endpoints
* GET requests
* POST requests
* JSON file operations
* Backend validation
* HTTP status codes
* Client-server communication

---

# 🚀 How to Run

## 1. Clone the Repository

```bash
git clone https://github.com/doganozturkk/TechStore-Web-Application.git
```

Navigate into the project:

```bash
cd TechStore-Web-Application
```

---

## 2. Navigate to Task 4

```bash
cd Task-4-NodeJS
```

---

## 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

This installs the dependencies defined in `package.json`, including:

```text
express
cors
```

---

## 4. Start the Server

Run:

```bash
npm start
```

The server will start on:

```text
http://localhost:3000
```

---

## 5. Open the Application

Open the application in a web browser through:

```text
http://localhost:3000
```

The Node.js server serves the frontend files as well as the backend API.

---

# 📊 Project Architecture

The final project can be summarized into three main layers:

```text
┌───────────────────────────────────────┐
│              PRESENTATION             │
│                                       │
│ HTML • CSS • Bootstrap • JavaScript   │
└───────────────────┬───────────────────┘
                    │
                    │ Fetch / HTTP
                    ▼
┌───────────────────────────────────────┐
│               BACKEND                 │
│                                       │
│ Node.js • Express • CORS              │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│             DATA STORAGE              │
│                                       │
│ items.json • users.json               │
└───────────────────────────────────────┘
```

This structure demonstrates the transition from frontend-only development to a basic full-stack web application.

---

# 🎓 Academic Context

This project was developed as a progressive web development assignment consisting of four stages:

1. **HTML & CSS**
2. **Bootstrap**
3. **JavaScript**
4. **Node.js**

The assignments were designed to progressively introduce frontend development, responsive design, client-side programming, JSON data processing, and backend web development.

---

# 📄 License

This project is licensed under the MIT License — feel free to fork it, extend it, and experiment with new ideas!

---

# 🙌 Author

Developed by: **[@doganozturkk](https://github.com/doganozturkk)**
