# 🚀 **Todo Full-Stack App**

A clean Full-Stack Todo application (Node.js + Express backend, React frontend) — perfect for a project submission video.

---
## 🔧 Features
- Create / Read / Update / Delete tasks  
- React frontend with modern glass UI  
- Simple Node.js API (in-memory; easy to switch to MongoDB)  
- Ready for deployment (Render backend + Netlify frontend)
<img width="1875" height="921" alt="members" src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/bff5d4cc35f03be3fb1e22222c926836886c58c6/Screenshot%202025-11-17%20161309.png" />
---<img width="1875" height="921" alt="members" src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/52ef246ee346cc01735d4354773388c024b77468/todo%20-%20Made%20with%20Clipchamp.gif" />

## 🗂️ Folder Structure
todo-fullstack/
├─ backend/
└─ frontend/

yaml
Copy code

---

## ▶️ Quick start

**Backend**
```bash
cd backend
npm install
npm run dev
Frontend (Vite)

bash
Copy code
cd frontend
npm install
npm run dev
# open http://localhost:5173
📦 Deploy
Backend: Render or Railway (start: node server.js)

Frontend: Netlify or Vercel (build: npm run build)
<img width="1875" height="921" alt="members" src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/52ef246ee346cc01735d4354773388c024b77468/todo%20-%20Made%20with%20Clipchamp.gif" />



📦 3. Install Node Modules

Open the terminal inside VS Code:

npm install


This installs:

express

cors

▶️ 4. Start the Backend Server

Run this command:

node server.js


If everything is correct, you will see:

Server running on port 5000


🎉 Your backend is now LIVE at:

http://localhost:5000

🔍 5. Test API in Browser or Postman
✔️ To get all todos

Open browser and type:

http://localhost:5000/api/todos


You will get:

[]

✔️ To add a todo (use Postman)

POST → http://localhost:5000/api/todos

Body → JSON:

{
  "title": "Learn Node"
}
