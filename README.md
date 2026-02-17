# CrudExtension
write end points in nodejs

## Features

- Helps you establish CRUD and also to write SubRoutes and insert EndPoints of your wish.

## Usage

1. Open an Empty Folder.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Search for and run (`GenerateWMail FrontAndBack NonSecured`).
4. Find the available options there ( like `GenerateWMail FrontAndBack`, `GenerateWMail OnlyBackEnd`).
5. All the Folders and Files are copied to your empty Folder.
6. .env file the place where you define ( Data Path and Port Number ).
7. app.js is entry file.
8. on successfull completion, node will automatically run at port number in .env file

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
- https://marketplace.visualstudio.com/items?itemName=humao.rest-client
- https://www.npmjs.com/package/gulp-cli
- https://git-scm.com/
- https://nodejs.org/en/download (22 is tested)
  
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

### 0.8.1

- Generate.FrontAndBackWithGulp User working good

### 0.8.2

- Generate.FrontAndBackWithGulp   "isAutoFocus": true working good

### 0.8.3

- LastRun folder started

### 0.8.4

- still working on group by...

### 0.8.5

- Group By working on rest files...

### 0.8.6

- Group By perfect

### 1.9.1

- mail perfect for registration

### 1.9.3

- GenerateWMail started...

### 1.9.4

- GenerateWMail.FrontAndBackWithGulp working perfect

### 1.9.5

- image also added

### 1.9.6

- folder added

### 1.9.7

- menu added for ui

### 1.9.8

- batch file changed

### 1.9.9

- for unique started

### 1.9.10

- .env changed

### 1.9.11

- register perfect with unique

### 1.10.1

- front end changed

### 1.10.2

- batch file hooked to new front repo

### 1.10.3

- schemas in folder

### 1.10.4

- schema defaultvalue added to tasks

### 1.10.5

- OnlyBackEnd good

### 1.11.1

- v10 bad

### 1.11.2

- v11 case changed for ubuntu

### 1.11.3

- readme is better

### 1.11.4

- genwmail LocalDefaultObjectToInsert perfect

### 1.11.5

- new version and more perfect

### 1.12.1

- GenerateWMail.BackEnd.Only started

### 1.12.2

- GenerateWMail.BackEnd.Only not tested

### 1.13.1

- GenerateWMail insert asinand ts changed

### 1.14.1

- GenerateWMail.OnlyBackEnd.NonSecured perfect

### 1.14.2

- GenerateWMail.OnlyBackEnd.Both perfect, restfiles commented so need to be fixed

### 1.14.3

- GenerateWMail.OnlyBackEnd.Both perfect, rest folder started

### 1.14.4

- GenerateWMail.OnlyBackEnd.Both Read, asis rest perfect

### 1.14.5

- GenerateWMail.OnlyBackEnd.Both error handled for SubRoutes key in Json Schema

### 1.14.6

- GenerateWMail.OnlyBackEnd all 3 perfect, rest all commented

### 1.14.7

- GenerateWMail.OnlyBackEnd all 3 perfect, UnSecured, middleware removed

### 1.14.8

- GenerateWMail.OnlyBackEnd all 3 perfect, UnSecured, max version fixed here only

### 1.14.9

- GenerateWMail.OnlyBackEnd started working on secured...

### 1.15.1

- GenerateWMail.FrontAndBack started...

### 1.15.2

- working on filter

### 1.16.1

- only backend nonsec schema from files not static

### 1.16.2

- schema check perfect

### 1.16.3

- new import added in insert

### 1.17.1

- new version just started

### 1.17.2

- Sub Route error fixed

### 1.17.3

- import bulk update perfect

### 1.17.4

- OnlyBackEnd perfect with 3

### 1.18.1

- 18 just started

### 1.18.2

- Both with frontend still need to be done

### 1.18.3

- ServerRun file name changed

### 1.18.4

- insert with checks and image working good with specific UI

### 1.18.5

- InsertWithChecks perfect

### 1.18.6

- Working on Secured batch files

### 1.19.1

- unwanted folders deleted in GenerateWMail

### 1.19.2

- secured batch files seperate added

### 1.19.3

- BackupDataOnly just started

### 1.19.4

- still working on secured for interns backed

### 1.19.5

- OnlyBackEnd.NonSecured backup need to be tested

### 1.19.6

- OnlyBackEnd.NonSecured backup 3 perfect

### 1.19.7

- OnlyBackEnd.NonSecured backup Linked perfect

### 1.19.8

- OnlyBackEnd.NonSecured token creation perfect, but need to handle kill token

### 1.19.9

- OnlyBackEnd subroute : Sort started...

### 1.19.10

- SubRoutes added

### 1.20.1

- single websocket started

### 1.20.2

- GenWMailAndWs.OnlyBackEnd.Secured, started not tested

### 1.20.3

- GenWMailAndWs added to FrontAndBack

### 1.20.4

- GenDataFromPk.FrontAndBack still working on

### 1.20.5

- GenDataFromPk.FrontAndBack still working on Data folder common tables left

### 1.20.6

- GenDataFromPk.OnlyBackEnd perfect with common json tables and data tables inside folders

### 1.20.7

- GenDataFromPk.OnlyBackEnd perfect with TokenTable

### 1.20.8

- GenWMailAndWs.OnlyBackEnd.Secured removed batch files, still working on...

### 1.20.9

- GenWMailAndWs.OnlyBackEnd.Secured,still working on api.json...

### 1.20.10

- GenWMailAndWs.OnlyBackEnd.Secured perfect with check and NonSecured.SubRoutes in json

### 1.20.11

- Table check, stop execution.

### 1.20.12

- GenWMailAndWs.OnlyBackEnd.Secured perfect with secured alse

### 1.21.1

- started for gendata with pk

### 1.21.2

- gendata with pk is perfect

### 1.21.3

- GenWMailAndWs.OnlyBackEnd.NonSecured TasksTable Schema changed

### 1.21.4

- GenFromPkWithMeta 2 started

### 1.21.5

- GenWMailAndWs.OnlyBackEnd.Secured tested for sub route

### 1.21.6

- GenWMailAndWs.OnlyBackEnd.Secured perfect with front and back also

### 1.22.1

- GenWMailAndWs.OnlyBackEnd.Secured perfect with front and back also with ui.json

### 1.22.2

- GenFromPkWithMeta.OnlyBackEnd perfect with data pk different

### 1.22.3

- GenFromPkWithMeta ui also perfect

### 1.22.4

- GenFromPkWithMeta ui dist Api fixed

### 1.22.5

- GenFromPkWithMeta , gitignore, package.json

### 1.22.6

- GenFromPkWithMeta.OnlyBackEnd Backup complete is perfect

### 1.22.7

- GenFromPkWithMeta, GenWMailAndWs env added and GenWMailAndWs Secured fixed

### 1.22.8

- GenFromPkWithMeta perfect

### 1.22.9

- GenFromPkWithMeta file deleted

### 1.22.10

- GenWMailAndWs NonSec Ui Repo perfect

### 1.22.11

- GenWMailAndWs.OnlyBackEnd.NonSecured tested for ui .js 

### 1.22.12

- GenFromPkWithMeta.OnlyBackEnd more perfect

### 1.22.13

- GenFromPkWithMeta.OnlyBackEnd.NonSecured rest need to be altered and in commonfuncs add datapk
  
### 1.22.14

- GenFromPkWithMeta.OnlyBackEnd and FrontAndBack ready with both Secured and NonSecured

### 1.22.15

- GenFromPkWithMeta.OnlyBackEnd.Secured CopyCode Ui also perfect for TableNames show

### 1.22.16

- GenWMailAndWs.OnlyBackEnd.NonSecured frontend js fixed for path

### 1.22.17

- GenWMailAndWs.OnlyBackEnd.Secured Alter and delete added

### 1.22.18

- GenWMailAndWs.OnlyBackEnd.Secured Js case changed

### 1.22.19

- TableName variable added

### 1.22.20

- GenFromPkWithMeta.OnlyBackEnd.Secured : TableNameWithPK : 2 changes for pk, and image

### 1.22.21

- GenFromPkWithMeta.OnlyBackEnd.Secured : TableNameWithPK : Sort Rest Clients perfect, but need to add Api

### 1.22.22

- GenFromPkWithMeta.OnlyBackEnd.Secured : RestClients Folder fixed with loop recursive

### 1.22.23

- GenFromPkWithMeta.OnlyBackEnd.Secured : Sort/Top10 pefect

### 1.22.24

- GenFromPkWithMeta.OnlyBackEnd.Secured : RestClients fixed

### 1.22.25

- GenFromPkWithMeta.OnlyBackEnd.Secured : Api/Middleware fixed for 401 cookie

### 1.22.26

- GenFromPkWithMeta.OnlyBackEnd.Secured : Api/Middleware fixed for 401 cookie

### 1.22.27

- GenWMailAndWs.OnlyBackEnd.NonSecured : for api json

### 1.22.28

- GenWMailAndWs.OnlyBackEnd.NonSecured : for Insert/10 with ts

### 1.22.29

- GenFromPkWithMeta:TableNameWithPK:InsertWithChecks added GenFromPkWithMeta

### 1.22.30

- GenFromPkWithMeta:TableNameWithPK:InsertWithChecks added from TableNameWithPK

### 1.22.31

- GenFromPkWithMeta:TableNameWithPK:InsertWithChecks:UniqImageDefault added

### License

MIT