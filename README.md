# csstd4
# Get winter festivals in departement 93 

The objective of this library is to provide comprehensive information about all winter festivals taking place in 93. It will allow you to access details such as the festival's name, start and end dates, location, and the type of festival it represents.

## Local development

```bash
npm install
```

```bash
npm run test
```

In order to test the function, you can create a directory build with the file index.js.
In this file, add the code below :
```bash
const test = require('../index');

(async() => {
    console.log(await test())
})();
```

Finally, run the command below, to see every winter festival 93.
```bash
node build/index.js
```