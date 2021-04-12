const fetch = require('node-fetch');
const body = {
    "name": "ClienteTeste5API",
    "email": "catalunha.mj@gmail.com",
    "registry_code": "692.842.180-04",
    "code": "ClienteTeste5API",
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
  }).then((response2)=>{
    console.log(response2);
  });
