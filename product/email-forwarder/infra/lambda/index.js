const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello from AWS Lambda!',
  }),
})

// eslint-disable-next-line no-undef
module.exports = { handler }
