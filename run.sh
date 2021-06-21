root=$(pwd)

# Tell Flask where the entry point is
export FLASK_APP=$root/backend/app

# Change to frontend directory
cd $root/frontend

# Install the frontend dependencies
yarn

# Build the frontend
yarn build

# Change directories out of the frontend
cd $root/backend/static

# Copy frontend build into backend/static
cp $root/frontend/dist/static/* $root/backend/static/

# Start backend server
flask run && cd $root
