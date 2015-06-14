var context = require.context('./source', true, /-spec\.js$/);
context.keys().forEach(context);
console.log(context.keys());