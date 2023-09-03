/* Amplify Params - DO NOT EDIT
	API_PATHWAYS_GRAPHQLAPIENDPOINTOUTPUT
	API_PATHWAYS_GRAPHQLAPIIDOUTPUT
	API_PATHWAYS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

import {  gql } from 'graphql-tag';
import { AWS} from 'aws-sdk';
import { default as AWSAppSyncClient} from 'aws-appsync';

//const AWSAppSyncClient = require("aws-appsync").default;
//const gql = require("graphql-tag");
//const AWS = require("aws-sdk");
//global.fetch = require("node-fetch");

let graphqlClient;
let env;

const GRAPHQL_ENDPOINT = process.env.API_PATHWAYS_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;

const query = /* GraphQL */ `
query GetPWDetails ($id: ID!){
  getPathway(id: $id) {
    name
    description
    pathwayLatestPathwayVersionId
    latestPathwayVersion {
      id
    }
  }
}
`;


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(GRAPHQL_ENDPOINT);
  console.log(AWS_REGION);
  console.log(process.env.API_PATHWAYS_GRAPHQLAPIKEYOUTPUT);

  

  env = process.env;
  console.log(env);

  AWS.config.update({
    region: env.REGION,
    credentials: new AWS.Credentials(
      env.AWS_ACCESS_KEY_ID,
      env.AWS_SECRET_ACCESS_KEY,
      env.AWS_SESSION_TOKEN
    ),
  });
  const credentials = AWS.config.credentials;
  console.log(credentials);

  if (!graphqlClient) {
    graphqlClient = new AWSAppSyncClient({
      url: env.API_PATHWAYS_GRAPHQLAPIKEYOUTPUT,
      region: env.REGION,
      auth: {
        type: "AWS_IAM",
        credentials,
      },
      disableOffline: true,
    });
  }

  const res = await graphqlClient.query({
    query: gql(query),
    variables: { id: "ea3256d2-9ead-4bde-bdcf-96ede4b66571" },
  });

  return {
    statusCode,
    //  Uncomment below to enable CORS requests
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*"
    // }, 
    body: JSON.stringify(body)
  };
};