const argv = require('yargs');
/*
 https://medium.com/stackfame/how-to-run-shell-script-file-or-command-using-nodejs-b9f2455cb6b7
 https://dzone.com/articles/execute-unix-command-nodejs
 http://yargs.js.org/docs/#api-aliaskey-alias
*/


argv.command('add', 'Adds the arguments', () => {}, (args) => {
	console.log(args);
})
.option('size', {
    alias: 's',
    describe: 'choose a size',
    choices: ['xs', 's', 'm', 'l', 'xl']
  })
.alias('i', 'ingredient')
.help()
.argv;
