## Welcome to the FruitShop React APP

This is a simple Web App made with Reactjs which works with a custom API made on Expressjs
Fetches live exchange rate from Apilayer to convert price of products listed in GBP to the conversion in USD. 

## Step by step instructions to setup in local environment

** Note: Make sure you have your API setup and your Apilayer access key. 

1. Clone repo and save it on your computer in a separate folder
2. Open root folder with Visual Studio Code
3. Run the following command:
### `npm i`
4. Create a .env file in the root folder and add the following environment variables:
REACT_APP_API_URL= "Your API URL, if the API is running locally it's probably going to be `http://localhost:4000`.
REACT_APP_EAPI_KEY= "Your API key from API Layer"

## Once all the above steps are complete run the following command and your react app will start running on the first available port, if there is no other local app running the port will be `http://localhost:3000`

### `npm start`


**Note this App is configured to run with the following API, deploy on your local environment to run the complete fullstack app. 

`https://github.com/salmankhawar/CTD-API`

Additional Link:
API Layer: `https://apilayer.com/marketplace/fixer-api`



