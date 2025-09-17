module.exports = async function (context, req) {
  context.log('Hello function processed a request.');
  context.res = {
    body: "Hello from Azure Function!"
  };
};
