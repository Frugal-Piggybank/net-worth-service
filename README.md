# Net Worth Service

Service designed to return data specifically for tracking net worth on the Frugal Piggybank playground.

## Prerequisites

- [Azure Functions Core Tools CLI](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash#v2) (currently version 3.x)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) (currently version 2.x) for deployments.

## Set up

Install required dependencies

```bash
yarn install
```

Ensure you have a `local.settings.json` file at the root of the project, and make sure to supply the necessary values:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "FIREBASE_PROJECT_ID": "",
    "FIREBASE_CLIENT_EMAIL": "",
    "FIREBASE_PRIVATE_KEY": ""
  }
}
```

## Run the project locally

```bash
yarn build
yarn start
```

Navigate to http://localhost:7071/graphql to perform GraphQL queries
