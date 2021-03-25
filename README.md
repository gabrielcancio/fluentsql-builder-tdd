## :computer: Project
**FluentSQL** is the a mock of a query builder made with Node.js using the Fluent Interface pattern with Builder Pattern. The purpose of this project is to create a way to a large data volume using JavaScript Performatically on demand.

---

## :rocket: Technologies
### **Main:**
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)
- [Nodemon](https://nodemon.io/)

### **Design Patterns**
- Fluent Interface
- Builder

### **Software development process**
- Test-driven development

### **Other used softwares :**
- [VScode](https://code.visualstudio.com/)
- [Json Generator](https://next.json-generator.com/NJafGjxXq) (Generate the mock of database)

---


## :gear: Installing
1. Make a clone of this repository with command: 
```bash
$ git clone https://github.com/gabrielcancio/fluentsql-builder-tdd.git
```

2. Install the dependencies(*You need [yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/get-npm) installed*): 
```bash
$ yarn
```
Or
```bash
$ npm install
```

---

## :zap: Running
1. You can run the application running the follow command:
```bash
$ yarn start
```
Or
```bash
$ npm start
```
2. You can run the tests with follow command:
```bash
$ yarn test
```
Or
```bash
$ npm test
``` 

3. A sample to select from data.json (mock of database) all people who registered in 2020 or 2019, who belong to the developer, secutiry and quality assurance categories, who have phone DDD equal to 852 or 982. In this sample has only selected the name, company and category fields, and it's sorted by category and the results are limited in 3 registers.
  
```js
import FluentSQLBuilder from "./fluentSQL.js";
import data from './database/data.json';

const result = FluentSQLBuilder.for(data)
  .where({ registered: /^(2020|2019)/ })
  .where({ category: /^(developer|security|quality assurance)$/})
  .where({ phone: /\((852|982)\)/ })
  .select(['name', 'company', 'category'])
  .orderBy('category')
  .limit(3)
  .build();

console.table(result);
```
---
Developed with :green_heart: by Gabriel Cancio!
