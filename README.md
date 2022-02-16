## Pharmacy technical test
I have been asked to create a Javascript application with two main functionality:
* Create formulary (pharmacy.js/ addMedication):
    - Medication can be added to formulary only from the medications list (datasamp.js)
    - Medication can only be added once to the formulary
    - Return list of added medications

* Create Inventory (pharmacy.js/ createInventory)
    - Only medication on medications list can be added to the inventory list 
    - Only medication in formulary can be added to the list(the formulary which is created by addMedication)

## Run the App with node.js
* make sure node.js is installed on your computer
* clone reposiroty and and cd into root directory
* install dependencies:
```npm install`
* type: ```node src/pharmacy.js```  to run the app in your console (please note you will see an error thrown at the end, because the last medication being added to the inventory is not in the formulary)

## Run the App with live server in VS code
* clone reposiroty and and cd into root directory
* install dependencies:
```npm install`
* If you are using VS Code, install [Live Server package](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* Once inctalled on the bottom click Go Live and you can access the app in your browser

## Run the tests
* make sure you change all ``xìt`` to ``ìt``
* make sure you comment out the functions being called in pharmacy.js
* type: ```npm run test` in your terminal
