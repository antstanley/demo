# Announcing AutographQL

Develop, Bundle & Deploy GraphQL API's to Serverless Platforms quickly and easily. AutographQL is built for Javascript developers looking to leverage the full power of GraphQL and Cloud platforms. With AutographQL you can define a GraphQL API and deploy it to a host of Functions as a Service platforms including

- AWS Lambda
- AWS Lambda@Edge
- Azure Functions
- Cloudflare Workers
- Google Cloud Functions
- IBM Cloud Functions
- Now
- Netlify Functions
    
It is built on top of Rollup and Babel, with additional integration with the [Serverless Framework](https://serverless.com) and [Architect Framework](https://arc.codes). 

It allows you to create a GraphQL API using GraphQL's Schema Definition Language (SDL), and either write your own JavaScript resolvers, or generate it's own resolvers, then deploy them to the cloud provider environment of your choice, through a simple configuration file.

AutographQL has a number of extensions that provides abstractions over other services you can use to develop cloud independent services. These include normalised SDK's for

*NoSQL Databases*
- AWS DynamoDB
- Azure CosmosDB
- Google Firestore
- Cloudflare Workers KV

*Pub/Sub Messaging*
- AWS SNS
- Azure EventGrid
- Google Cloud Pub/Sub

*Blob Storage*
- AWS S3
- Azure Blob
- Google Cloud Storage

*Authentication*
- OpenID Connect SDK
    - Any OpenID Connect compliant provider Auth0, Azure Active Directory, AWS Cognito, etc
- Generic Role Based Access Framework

*Key Management*
- AWS KMS
- Azure KeyVault
- Google KMS

The aim of AutoGraphQL is to let developers focus on building features, and let the framework and cloud platforms provide all the undifferentiated features that every application must have today.