
async function handler(event, context ) {

  console.log('Booting up')

  console.log(event);
  console.log(context);
  const { pathParameters } = event
  if (!pathParameters || !pathParameters.company)
    return { headers: {}, statusCode: 400, body: {  error: 'Need company path parameter' } };

  return { statusCode: 200, headers: {}, body: { alive: true, version: '2', event: JSON.stringify(event, null, 2) } };

}

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = handler; 
