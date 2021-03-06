/*
  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice
*/

var http = require("http");

const routes = {
  "/whoami:get": async (request, response) => {
    const { headers } = request;

    let resolved = {
      /*
        A request to /api/whoami should return a JSON object with your IP address
        in the ipaddress key.
      */
      ipaddress: headers["true-client-ip"],
      /*
        A request to /api/whoami should return a JSON object with your preferred
        language in the language key.
      */
      language: headers["accept-language"],
      /*
         A request to /api/whoami should return a JSON object with your software
         in the software key.
      */
      software: headers["user-agent"]
    };

    console.log(JSON.stringify(resolved));
    response.write(JSON.stringify(resolved));
    response.end();
  },
  default: (request, response) => {
    response.write("Hello!");
    response.end();
  }
};

const handler = (request, response) => {
  console.log("============================");
  const { url, method } = request;
  const [, , route] = url.split("/");
  const key = `/${route}:${method.toLowerCase()}`;
  console.log("key", key);

  const chosen = routes[key] || routes.default;

  /** CORS */
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json"
    /** add other headers as per requirement */
  };

  if (response.method === "OPTIONS") {
    response.writeHead(204, headers);
    return chosen(request, response);
  }

  if (["GET"].indexOf(request.method) > -1) {
    response.writeHead(200, headers);
    return chosen(request, response);
  }

  response.writeHead(405, headers);
  response.end(`${request.method} is not allowed for the request.`);
  /** */
};

//create a server object:
http.createServer(handler).listen(8080); //the server object listens on port 8080
