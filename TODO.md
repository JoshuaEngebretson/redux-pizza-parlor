# TODO

- [ ] Order - Display all pizzas
  - located at '/'
  - [ ] Order - Select Pizza
    - [ ] Condintionally render add / remove button
    - [ ] Add pizza to cart
      - Add this to redux cart state
    - [ ] Remove pizza from cart
      - Remove this from redux cart state
    - [ ] As pizzas added / removed keep running total in upper right

- [ ] Order - Enter Customer Information
  - located at '/customerInformation'
  - [ ] state in app for Name, Street Address, City, Zip
  - [ ] onClick for Next button will set state in redux 
  - [ ] radio button for Pickup / Delivery

- [ ] Order - Checkout
  - located at /checkout
  - [ ] Pulls all the info from redux and displays on the DOM
  - [ ] onClick for Checkout button
    - [ ] will POST all the data to the database
    - [ ] show a confirmation dialog
      - example "Order Placed"
    - [ ] clear the redux cart
    - [ ] useHistory to send back to order page
      - back to '/'

- [ ] Admin - Orders
  - located at '/admin'
  - useEffect? to load everytime the page is opened
  - [ ] GET all 👇 data from the database, display in a table
    - name, time and order total for each of the orders placed 

- [ ] Create project
  - Do ALL the things

- [ ] Project running for all team members
    - This was not a task on the ReadMe, but in order to select pizzas, a user will need to see the pizzas on the view. This task could be broken down further by assigning one person to make the axios GET request and one person to make the DOM render the resulting array (while using a mock array to see what it would look like).

- [X] Inventory tasks and add cards as needed
    - This project has a list of starting tasks, but might not be as detailed or exactly how you would like to break up the tasks. Talk with your team about adding more to this list or adding more specific descriptions around some of the tasks to avoid conflicts.
    - Look at Order - Display all pizzas
      TODO
      for an example of how to further break down the tasks.

# Stretch Goals
- [ ] Back to previous page
- [ ] Styling
- [ ] Display list of pizza for each order
- [ ] Add pictures to the `public/images` folder
- [ ] Add button on orders page to track delivery status
- [ ] Create order details views