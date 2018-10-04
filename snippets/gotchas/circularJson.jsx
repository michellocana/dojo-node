const json = { name: 'Michell' }
JSON.stringify(json) // -> '{"name":"Michell"}'

json.test = json
JSON.stringify(json) // -> TypeError: Converting circular structure to JSON
