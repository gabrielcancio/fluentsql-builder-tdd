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