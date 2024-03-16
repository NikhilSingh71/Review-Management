# after cloning the repo

cd backend
npm i
npm start

# new terminal

cd frontend
npm i
npm start

#Problem Statement
A button to create new review - clicking on which user will be redirected to /new/ route
Basic Table layout with all reviews
Table should have 6 columns: #, Title, Content, Date-time, Edit, Delete
# - Static count number starting with 1
Edit - a edit button, clicking on which user will be redirected to /:id route
Delete - a delete button, clicking on which review will be deleted
Show each review in separate row
Latest review should be displayed first
This should be a live list view with implementation of web-socket, so whenever any review is added/edited/deleted, it should immediately update the table without user needing to refresh the page

# -Completed
Create List Delete Update Both frontend and backend
