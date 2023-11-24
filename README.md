# goals-site

## Pre Requisite
- Install [volta](https://volta.sh/)
- Install yarn
```
volta install yarn
```
## Setup
- Install local dependencies
```
yarn
```
- Copy enviroment variables
> Create a new file `.env` at root level and copy its content from `.env.example`
- Setup [avoiding CORS](https://github.com/Real-Dev-Squad/docs/tree/main/docs/dev/https-dev-url-cors)

## Local Development
### With Staging backend-goals
You don't need to have backend-goals run locally 
- Run development command
```
yarn dev
```

### With Local backend-goals
Connect to local backend-goals
- Go to .env
- Set your `NUXT_PUBLIC_GOAL_API` value to `http://localhost:8000/api` (or a url of the backend-goals you want to connect to) 

It should look something like this -
```js
NUXT_PUBLIC_GOAL_API='http://localhost:8000/api'
```
- Restart the server

## Production Setup

- Generate the static content 
```
yarn run generate
```
- The output is generated in `.output` directory