const program = require('commander');


program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com')
  .action(()=>{console.log("from set");});

program
  .command('show')
  .description('Show API Key')
  .action(()=>{console.log("from show");});

program
  .command('remove')
  .description('Remove API Key')
  .action(()=>{console.log("from remove");});

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
