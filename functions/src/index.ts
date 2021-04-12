import * as functions from 'firebase-functions';
const fetch = require('node-fetch');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


export const helloVindi = functions.https.onRequest((request, response) => {
    // response.send("Hello from Firebase and Vindi");
    const body = {
       "name": "ClienteTeste4cd.",
       "email": "catalunha.mj@gmail.com",
       "registry_code": "240.712.380-89",
       "code": "ClienteTeste4API",
       "notes": "notas",
       "metadata": "metadata",
       "address": {
         "street": "rua 1",
         "number": "1a",
         "additional_details": "perto da rua 2",
         "zipcode": "77018018",
         "neighborhood": "vizinho",
         "city": "Palmas",
         "state": "TO",
         "country": "BR"
       },
       "phones": [
         {
          "phone_type": "mobile",
          "number": "5563984495508",
          "extension": ""
         }
       ]
     };
    fetch("https://sandbox-app.vindi.com.br/api/v1/customers", {
       method: "POST",
headers: {'Content-Type': 'application/json','authorization': 'Basic TzlxR0dOeVlmQjBzVmxSSTlsMWt5VE1vTHlCQ0VDOWdFdU5KcnI5YXhYdzp1bmRlZmluZWQ='},
body: JSON.stringify(body),
     })
    //  .then((response2:any)=>{
    //    console.log(response2.json());
    //    response.send(response2.json());
    //  });
    .then((res:any) => {res.json()})
    .then((json:any) => {console.log(json);response.send(json)});
   });

//    'API_KEY': 'O9qGGNyYfB0sVlRI9l1kyTMoLyBCEC9gEuNJrr9axXw',
// headers: {'Content-Type': 'application/json','authorization': 'Basic TzlxR0dOeVlmQjBzVmxSSTlsMWt5VE1vTHlCQ0VDOWdFdU5KcnI5YXhYdzp1bmRlZmluZWQ='},
// headers: {'Content-Type': 'application/json','API_KEY': 'O9qGGNyYfB0sVlRI9l1kyTMoLyBCEC9gEuNJrr9axXw'},
