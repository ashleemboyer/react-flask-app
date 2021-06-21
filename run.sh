# Tell Flask where the entry point is
export FLASK_APP=backend/app

# Change to frontend directory
cd frontend

# Install the frontend dependencies
yarn

# Build the frontend
yarn build

# Change directories out of the frontend
cd ..

# Copy frontend build into backend/static
cp frontend/dist/app.bundle.js backend/static/app.bundle.js
cp frontend/dist/index.html backend/static/index.html

# Start backend server
flask run
