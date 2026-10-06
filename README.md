# BulletinBoard
An interactive virtual event board
## Backend Progress

### September 15, 2026

- Cloned the BulletinBoard repository locally.
- Created a `backend` folder.
- Initialized a Node.js project.
- Installed Express.
- Created `server.js`.
- Configured the server to run on port 3000.
- Successfully tested the backend at `http://localhost:3000`.
- Added `.gitignore` so the `node_modules` folder is not committed to GitHub.
- Committed the initial backend setup.

### Current Test Result
### Backend Server Screenshot

The initial Express backend successfully running at `http://localhost:3000`.
The backend successfully displays:

`BulletinBoard backend is running!`
<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/5a60d7b5-ea77-4fa3-9111-6c26979aa443" />

### Backend Server Screenshot

### Next Steps

- Set up the database.
- Create user registration and login functionality.
- Add flyer/event data.
- Create API routes for viewing, adding, editing, and deleting flyers.

### September 29, 2026

- Added consistent SQLite database path using `__dirname`.
- Enabled SQLite foreign key enforcement.
- Added flyer creation with `POST /flyers`.
- Added retrieval of all flyers with `GET /flyers`.
- Added retrieval of a single flyer with `GET /flyers/:id`.
- Tested flyer creation and retrieval successfully using PowerShell.

### Current Backend Features 

- User registration backend
- User login backend
- Password hashing with bcrypt
- SQLite database storage
- Create flyers through the React frontend
- View all flyers
- View flyer details
- added PUT /flyers/:id
- added DELETE /flyers/:id
- verified update and delete behavior with PowerShell
- flyer CRUD is now complete
- Added flyer category filtering using `GET /flyers?category=...`.
- Tested filtering successfully with Academic and Social categories.
- Added ownership checks so users can only edit or delete flyers they created.
- Added CORS support for the React frontend running at `http://localhost:5173`.

### October 5, 2026

- Connected the React frontend to the Express backend.
- Replaced hardcoded bulletin board flyer data with live data retrieved using `GET /flyers`.
- Added frontend loading and error handling for flyer retrieval.
- Connected the Upload Flyer form to `POST /flyers`.
- Flyer submissions now persist to the SQLite database and appear on the bulletin board.
- Added temporary demo user handling with `created_by` for flyer creation.
- Added optional flyer image upload support.
- Converted uploaded images to Base64 data URLs for temporary storage in SQLite.
- Increased the Express JSON request size limit to support uploaded image data.
- Added support for flyers without images by storing `image_url` as `null`.
- Tested flyer creation, database persistence, and frontend display successfully.
- Reviewed frontend/backend architecture and identified remaining integration requirements.
- Discussed future administrator-level CRUD access and refinement of user ownership permissions.
- - Connected flyer detail pages to `GET /flyers/:id`, replacing hardcoded flyer detail data.
 
### Current Full-Stack Features

- User registration backend
- User login backend
- Password hashing with bcrypt
- SQLite database storage
- Create flyers through the React frontend
- View database flyers on the React bulletin board
- View flyer details
- Update flyer API
- Delete flyer API
- Flyer category filtering
- Flyer ownership checks for update and delete operations
- Optional image uploads using Base64 data storage
- React frontend communicates with Express through HTTP API requests
- CORS support for the React frontend running at `http://localhost:5173`
