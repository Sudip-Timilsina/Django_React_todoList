# Todo App (React & Django)

This is a full-stack Todo application built with React for the frontend and Django for the backend. It allows users to manage their tasks, with the ability to create, update, delete, and view completed/incomplete tasks. The app integrates with a Django API to manage the todo list.

## Features

- **Add New Task:** Create new tasks with a title and description.
- **Edit Task:** Update existing tasks.
- **Delete Task:** Remove tasks from the list.
- **View Incomplete/Completed Tasks:** Filter tasks based on their completion status.
- **Modal for Task Details:** Interactive modal window for task management.
  
## Technologies Used

- **Frontend:** React, Bootstrap, Axios
- **Backend:** Django, Django REST Framework (DRF)
- **Styling:** Bootstrap for responsive layout
- **State Management:** React state and lifecycle methods
- **API Integration:** Axios for HTTP requests to the Django API

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Sudip-Timilsina/Django_React_todoList.git
cd Django_React_todoList


# Set up the backend (Django)
cd backend

# Create and activate a virtual environment
python3 -m venv env
source env/bin/activate  # On Windows, use 'env\Scripts\activate'

# Install the required dependencies for the backend
pip install -r requirements.txt

# Run migrations and start the Django server
python manage.py migrate
python manage.py runserver &

# Set up the frontend (React)
cd ../frontend

# Install dependencies for the frontend
npm install

# Start the React development server
npm run dev
```