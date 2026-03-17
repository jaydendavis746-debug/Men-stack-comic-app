
<img width="1902" height="898" alt="comicuniverse" src="https://github.com/user-attachments/assets/98fd087e-c680-46cc-839a-c08c19546482" />
This is the link to my deployed page. Hope you enjoy
https://men-stack-comics-app-c28ddb016a20.herokuapp.com/


This is the link to my project plan via trello
On the trello page includes links to my wireframes and Schema relationships and host my orginal intention with craeting the app.
It is enjoyable to see how much the finished app both varies and follows my plan hopefully highlighting that projects do not have to be super strict to the plan but that there is flexibilty for changes 
But that does not mean completely going against the plan. Though there is flexibilty there should always be some structure you are folloeing to make it easier for yourself to create the app.
https://trello.com/b/uP0MiBnO/comics-project-plan


# 🦸 Comic MEN Stack App

A full‑stack **Comic Management App** built with the **MEN stack (MongoDB, Express, Node.js)**. This app lets users explore and manage comics through a clean API‑driven backend and frontend.

---

## 🚀 Features
* Sign-in/sign-up to an account
* ➕ Add genres
* 📚 Browse and view comics details
* ➕ Add, update, and delete comics
* 🔍 Filter comics via genres
* ❤️ Heart comics and a most popular comics section on landing page
* 🌑 Night mode toggle availability
* ➕ Add a support request
* 🔍 View and delete  all active queries from the specific account.
* 🧾 RESTful API architecture
* 🛡️ Secure environment configuration
* ⚡ Fast and scalable backend with Node & Express



---

## 🛠️ Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Frontend** 

* EJS/ CSS / JavaScript


**Other Tools**

* dotenv
* nodemon
* bcrypt
* morgan
* express-session
* method-override

---

## 📂 Project Structure

```
comic-men-stack-app/
│
├── models/        # Mongoose schemas
├── views/         # Express routes
├── controllers/   # Route logic
├── middleware/    # Custom middleware
├── public/        # Assets for css, images and js 
├── server.js      # App entry point
├── gitignore      
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
touch server.js
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory and add:

```env
SESSION_SECRET=wahtever-you-want-it-to-be
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the app

``` server.js
Import all appropriate dependencies
Create the app const
Connect to MongoDB using mongoose
Have the app listen for a port
Have the app get a landing page(index page)

```
``` terminal
run nodemon or node server.js
```
Server will start on:

http://localhost:(port)
Whatever your port is defined as for my comic app  port = 3000
---

## 🔌 API Endpoints for comics

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | /comics         | Get all comics   |
| GET    | /comics/:id     | Get single comic |
| POST   | /comics/new     | Add new comic    |
| PUT    | /comics/:id/edit| Update comic     |
| DELETE | /comics/:id     | Delete comic     |

---




## 🌱 Future Improvements


* 📱 Mobile‑friendly UI
* 📖 Abiltiy to read comics on  page 
---
## 👤 Author
Jayden Davis
GitHub: [@jaydendavis746-debug](https://github.com/jaydendavis746-debug)




