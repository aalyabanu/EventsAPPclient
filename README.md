
# Events App

A full stack events app that allows creation, reading, updating and deletion of events (CRUD operations). Only the source codes for the frontend is stored in this repository. For the backend, please check [this](https://github.com/aalyabanu/finalBACKEND.git) repository.


## Functionality

The events app includes the following functionality:
- A single page application.
- Visitors arriving at the site are presented with options to login or register.
- Once registration/ log in credentials are submitted, the app will pass login credentials to the API which will check these against the db.
- A logged in user will be able to:
  - View a list of events.
  - Add a new event to the list.
  - Update an existing event with new information.
  - Delete an event.

- Each event includes the following information:
  - Name
  - Location
  - Precis of event information
  - Date/ time of event
  
 
### Installing

1.  clone the repository
2.  run `npm install` in the repository directory


## Screenshot(s)

### Login screen
![a](https://user-images.githubusercontent.com/40723510/103588631-89b6d180-4ee1-11eb-8785-275c15fa28bb.png)

### Registration screen
![b](https://user-images.githubusercontent.com/40723510/103588683-aa7f2700-4ee1-11eb-8ae8-d2c9bf8bab1d.png)

### Events Board
![c](https://user-images.githubusercontent.com/40723510/103588719-bf5bba80-4ee1-11eb-9758-7c684d9c44dd.png)

## Future extensions
The app could be extended by allowing the user to view events by location or date or find an individual event by id or name.
