'use strict';

// In last working configuration was in backend package's root called "handler.js"

// npm's aws-sdk installed because serverless-stack told me to 
// npm's uuid installed because serverless-stack told me to

// import...
// import awssdk from "aws-sdk" // serverless-stack says so 

module.exports.worldstate = async (event, context) => {
  
  var body = {
    //requestEvent: event, // For debugging, probably not a great idea to deploy to prod
    //requestContext: context, // For debugging, probably not a great idea to deploy to prod
      news: [
        {
          id: 0,
          type: "tender",
          client: "United Stars",
          budget: 3000,
          targetTonnage: 2750,
          quantity: 1,
          role: "Multi-role"
        }
      ]
  };
  
  return {
    statusCode: 200,
    headers: {
      // Permit access from a frontend on a different domain
      'Access-Control-Allow-Origin': '*' // This should be tightened once I host the client online. 
      // 'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// What IS the recieved (event, context)? Here's a real example event
// 
// {"event":{"resource":"/hello","path":"/hello","httpMethod":"GET","headers":{"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Host":"m1c6e25h0l.execute-api.us-east-1.amazonaws.com","upgrade-insecure-requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36","Via":"2.0 b8c7ca6d200a4b87d5b25c2d6f760752.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"NJTAh8ibnQk2Z7IMBa5oeipGA8dX5Uw8wxZWIFSFcv-BWkCp8segiw==","X-Amzn-Trace-Id":"Root=1-5c195ca8-319d1705a885e1a91f133948","X-Forwarded-For":"51.6.82.238, 52.46.38.97","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"],"Accept-Encoding":["gzip, deflate, br"],"Accept-Language":["en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobile-Viewer":["false"],"CloudFront-Is-SmartTV-Viewer":["false"],"CloudFront-Is-Tablet-Viewer":["false"],"CloudFront-Viewer-Country":["GB"],"Host":["m1c6e25h0l.execute-api.us-east-1.amazonaws.com"],"upgrade-insecure-requests":["1"],"User-Agent":["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"],"Via":["2.0 b8c7ca6d200a4b87d5b25c2d6f760752.cloudfront.net (CloudFront)"],"X-Amz-Cf-Id":["NJTAh8ibnQk2Z7IMBa5oeipGA8dX5Uw8wxZWIFSFcv-BWkCp8segiw=="],"X-Amzn-Trace-Id":["Root=1-5c195ca8-319d1705a885e1a91f133948"],"X-Forwarded-For":["51.6.82.238, 52.46.38.97"],"X-Forwarded-Port":["443"],"X-Forwarded-Proto":["https"]},"queryStringParameters":null,"multiValueQueryStringParameters":null,"pathParameters":null,"stageVariables":null,"requestContext":{"resourceId":"bmh6ox","resourcePath":"/hello","httpMethod":"GET","extendedRequestId":"SHtqSECvoAMF7Fg=","requestTime":"18/Dec/2018:20:46:32 +0000","path":"/dev/hello","accountId":"533996033834","protocol":"HTTP/1.1","stage":"dev","domainPrefix":"m1c6e25h0l","requestTimeEpoch":1545165992247,"requestId":"005fb480-0306-11e9-9668-298cbc8b1def","identity":{"cognitoIdentityPoolId":null,"accountId":null,"cognitoIdentityId":null,"caller":null,"sourceIp":"51.6.82.238","accessKey":null,"cognitoAuthenticationType":null,"cognitoAuthenticationProvider":null,"userArn":null,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36","user":null},"domainName":"m1c6e25h0l.execute-api.us-east-1.amazonaws.com","apiId":"m1c6e25h0l"},"body":null,"isBase64Encoded":false}} 