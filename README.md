# Game Of Thrones House Details Page, by Jason Simms

1. Clone or copy this repository
2. $ npm install
3. $ npm start
4. Go to `http://localhost:3000`

- To Test -  $ npm test

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-   Source information comes from : https://anapioficeandfire.com/

## Challenges
1.  An Api of Ice and Fire is paginated, in order to display all houses the API must be retrieved several times to get the almost 400 Houses.  

- Solution: The list of houses displayed is controled by the paginator at the top of the list.  This changes the API call address to load houses on state change.  This ensures live data in case there has been a change since the last load.

2.  House Details from the API come as an object with varying amount of keys.

- Solution: Before being displayed an array of Object keys is built and then iterated as a map referencing the original object.


3.  Some House details are URL references to other API endpoints. This is not ideal to display to end users.

- Solution: React-Axios package used to populate fields containing URLS with names from resulting endpoints.


****

## Future Improvements

- Layout CSS
- Additional information popups on Links from API URLS instead of just displaying .name.
- Alphabetized Pagination or Search Bar (NOTE: API OF ICE AND FIRE SUPPORTS FILTER BY NAME)
- Sounds / Animations
- Graphics