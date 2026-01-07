💡 Insert :

📌 **1.WithPk** = Inserts data where the primary key is automatically generated. The system creates the PK during insertion, ensuring each record has a unique identifier without requiring it in the input.

📌 **2.AsIsNoPk** = Inserts data without a primary key. No primary key is generated for this operation.

📌 **3.AsIsAndTS** = Inserts data with a primary key and a timestamp. The primary key and timestamp are automatically generated during insertion.

📌 **4.ColumnExit** = Inserts data only when the fields match the existing schema columns. Extra or undefined columns are not accepted.

📌 **5.SchemaColumnsOnly** = While inserting data, at least one key in the incoming data must match a column defined in the schema. If none of the keys match the schema columns, the insertion should be rejected. This ensures that only valid and structured data is stored, preventing accidental or incorrect entries.

📌 **7_Default** = Inserts data using predefined default keys (e.g., "sample1", "sample2"). When inserting, the structure includes these keys, and the system also adds additional fields such as the primary key (pk) and ServerInsertedTimeStamp.

- Example inserted format:
{
  "sample1": {},
  "sample2": {},
  "pk": 16,
  "ServerInsertedTimeStamp": "2025-11-03T10:02:35.146Z"
}

📌 **8_OnlyDefault** = Inserts data using only the default schema columns. No additional or custom fields are accepted. The inserted record contains only the predefined columns along with system-generated fields like pk and ServerInsertedTimeStamp.

- Example inserted format:
{
  "title": {},
  "start": {},
  "className": {},
  "pk": 1,
  "ServerInsertedTimeStamp": "2025-11-03T10:06:47.251Z"
}
