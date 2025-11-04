💡 Filter :

📌 **1.BodyInArray** = filters data by using key/value pairs sent inside the body, usually in structured JSON object.

.You send JSON in the body like:

{
  "inKey": "element.",
  "inValue": ""
}

📌 **2.ByBody** = ByBody filters records based on the key and value sent in the request body instead of query parameters.

.You send JSON in the body like:
{
  "key": "city",
  "value": "Hyderabad"
}

📌 **3.ByKeyAndValue** = ByBody filters records based on the key and value sent in the request body.

.You send JSON in the body like:
{
  "key": "city",
  "value": "Hyderabad"
}

