/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
	API_ATREVI_COUNTERTABLE_ARN
	API_ATREVI_COUNTERTABLE_NAME
	API_ATREVI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

let AWS = require("aws-sdk")
AWS.config.update({region: process.env.REGION})
let docClient = new AWS.DynamoDB.DocumentClient()

exports.handler = event => {
  //eslint-disable-line
    console.log(JSON.stringify(event, null, 2))
    event.Records.forEach(async (record) => {
        console.log(record.eventID)
        console.log(record.eventName)
        console.log("DynamoDB Record: %j", record.dynamodb)
        const owner = record.dynamodb.NewImage.owner
        try {
            const b = await docClient.get({TableName: process.env.API_ATREVI_COUNTERTABLE_NAME, Key: {id: owner}}).promise()
            console.log(b)
        } catch (err) {
            console.log(err)
        }
    })
    return Promise.resolve("Successfully processed DynamoDB record")
}