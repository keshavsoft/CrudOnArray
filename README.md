# CrudExtension
write end points in nodejs

## Features

- Helps you establish CRUD and also to write SubRoutes and insert EndPoints of your wish.

## Usage

- Array (FrontEndBackEnd)

1. Open an Empty Folder.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Search for and run (`Generate FrontAndBack`).
4. Find the available options there ( like `Generate`).
5. All the Folders and Files are copied to your empty Folder.
6. .env file the place where you define ( Data Path and Port Number ).
7. app.js is entry file.

- Array (OnlyBackEnd)

1. Open an Empty Folder.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Search for and run (`Generate OnlyBackEnd`).
4. Find the available options there ( like `Generate`).
5. All the Folders and Files are copied to your empty Folder.
6. .env file the place where you define ( Data Path and Port Number ).
7. app.js is entry file.


## project-root/ 

├── app.js 
├── .env 
├── V1/ 
│ └── yourRoutes.js 
├──SV1/
│ └── yoursecureRoutes.js 
├── Token/ 
├── Schemas/ 
│ └── yourSchmea.json
├── Data/ 
| └── db.json
├──schema.json
└── public

## Requirements

- Visual Studio Code version 1.50.0 or higher.

## Extension Settings

.env

## Known Issues

- No known issues.

## Release Notes

### 0.1.1

- Initial release of the Sample Extension.

### 0.1.2

- Generate.FrontAndBack working good.

### 0.2.3

- package.json altered no errors to package

### 0.2.4

- data being posted good

### 0.3.2

- OnlyFrontEnd working good

### 0.4.1

- Async started...

### 0.5.1

- MongoDB. started...

### 0.6.1

- TokenTable good with secret...

### 0.6.2

- token delte working good

### 0.6.3

- Generate.FrontAndBackWithGulp .env moved to common

### 0.6.4

- Generate.FrontAndBackWithGulp UsersTable working good

### 0.7.1

- Generate.FrontAndBackWithGulp Secret and token in seperate folders

## License

MIT
