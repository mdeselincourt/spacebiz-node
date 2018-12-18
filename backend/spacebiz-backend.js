exports.handler = function(event, context) {
    context.done(null, exports.getData()); 
};

console.log("spacebiz-backend.js execution finished");