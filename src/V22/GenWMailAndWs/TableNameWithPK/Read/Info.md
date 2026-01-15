💡 Read :

📌 **1.AsIs** = A GET API that retrieves all data from the table without any filtering or modification.

📌 **2.RowDataWithPk** = Returns a single row from the table based on the provided primary key (PK).

📌 **3.SelColsAsArray** = This API accepts an array of column names and returns only array of arrays the specified columns from the table.

- Example request (POST):

[ "exampleKey" ]

- Response

[
  [
    "vasuK",
    20
  ],
  [
    "KKk",
    40
  ]
]

📌 **4.SelColumns** = Similar to SelColsAsArray, but the response returns the selected columns as an array of objects.

- Response

[
  {
    "start": 20,
    "title": ""
  },
  {
    "start": 40,
    "title": ""
  }
]

📌 **5.SingleColumn** =Returns an array of values from a single column. The column name is sent as a parameter, and the response contains only the values of that column.

- Response

[
  "Sreenivaas",
  "Ram",
  "Keshav",
  "Title",
  "Title",
  "Sreenivaas"
]


📌 **6_SetSingleColumn** = Similar to 5_SingleColumn, but returns only unique values from the specified column (duplicates are removed).

- Example inserted format:
[
  "Sreenivaas",
  "Ram",
  "Keshav",
  "Title"
]

📌 **7_KeyCount** = Returns the count of each unique value from the specified column (column name is sent as a parameter). The response contains key–value pairs where the key is the column value and the value is its count.

- Example inserted format:
{
  "Sreenivaas": 2,
  "Title": 2,
  "Ram": 1,
  "Keshav": 1
}

📌 **8_MaxRow** = Returns the last (most recent) record from the table.

- Response:
{
  "title": "",
  "start": "",
  "className": "",
  "pk": 100,
  "ServerInsertedTimeStamp": "2025-11-03T10:06:47.251Z"
}

