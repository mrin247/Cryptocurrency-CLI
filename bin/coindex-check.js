const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check price of coins')
  .action(()=>{console.log("from check price");});

program.parse(process.argv);


