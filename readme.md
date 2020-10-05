### Predict the price of an asset

We would like to send predictions to the API for bitcoin, moderna, etc.  Let's see how accurate our predictions are over time.
### Commands

Invoke Lambda on local machine (and get list of predictions)
`serverless invoke local --function app --path data/dynamodevlist.json`

Invoke Lambda on local machine (and create a new prediction)
`serverless invoke local --function app --path data/dynamodevcreate.json`


### Start the UI

```
# Navigate to the UI directory
cd prediction-ui

# install dependencies
yarn install

# start the server
yarn start

```

### Progress Screenshot

![UI MVP](/prediction-ui/public/MVP1.png?raw=true) 