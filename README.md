# 🚀 TaskFlow – Smart Task Manager

## 📖 Description

TaskFlow is a full-stack web application that allows users to create, manage, and track tasks efficiently. Users can organize tasks by priority, set due dates, and mark tasks as completed to stay productive.

---

## 🧠 User Story

As a user, I want to create, organize, and track my tasks so that I can stay productive and manage my time effectively.

---

## ✅ Acceptance Criteria

* Users can view all tasks
* Users can add new tasks
* Users can mark tasks as complete
* Users can delete tasks
* Users can filter tasks by priority
* The application is responsive and works on different screen sizes

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* HTML
* CSS
* JavaScript

---

## 🚀 Features

* Add tasks with title, description, priority, and due date
* View all tasks dynamically
* Mark tasks as completed
* Delete tasks
* Filter tasks by priority (Low, Medium, High)
* Responsive design

---

## 📁 Project Structure

```
taskflow/
│
├── server.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
│
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

---

## 🔌 API Routes

* GET `/api/tasks` → Retrieve all tasks
* POST `/api/tasks` → Create a new task
* PUT `/api/tasks/:id` → Update a task (mark complete)
* DELETE `/api/tasks/:id` → Delete a task

---

## 🔮 Future Enhancements

* User authentication (login/signup)
* Dark mode
* Task analytics dashboard
* “Today’s Tasks” filter
* Notifications for due dates

---

## 👨‍💻 Author

Jonathan Wynman-Comas

---

## 📄 License

This project is open-source and available under the MIT License.
