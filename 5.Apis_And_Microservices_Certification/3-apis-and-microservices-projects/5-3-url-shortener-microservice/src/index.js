/*
    When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

  If you pass an invalid URL that doesn't follow the valid http://www.example.com format,
  the JSON response will contain { error: 'invalid url' }

  HINT: Do not forget to use a body parsing middleware to handle the POST requests.
  Also, you can use the function dns.lookup(host, cb) from the dns core module
  to verify a submitted URL.

  test: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice
*/

var http = require("http");
const { parse } = require("querystring");

const routes = {
  "/shorturl:post": async (request, response) => {
    /*
      You can POST a URL to /api/shorturl/new and get a JSON response
      with original_url and short_url properties.
      Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}
    */
    const { url } = request;
    const [, first, route, data] = url.split("/");
    console.log("post", first, route, data);

    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      console.log("parse", parse(body));
      body = parse(body);

      buildResponse(response, { original_url: body.url, short_url: 1 });
    });
  },
  "/shorturl:get": async (request, response) => {
    const { url } = request;
    const [, first, route, data] = url.split("/");
    console.log("get", first, route, data);

    buildResponse(response, "get!");
  },
  default: (request, response) => {
    buildResponse(response, "hello!");
  }
};

const buildResponse = (response, body) => {
  console.log("buildResponse", JSON.stringify(body));
  response.end(JSON.stringify(body));
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

  if (["GET", "POST"].indexOf(request.method) > -1) {
    response.writeHead(200, headers);
    return chosen(request, response);
  }

  response.writeHead(405, headers);
  response.end(`${request.method} is not allowed for the request.`);
  /** */
};

//create a server object:
http.createServer(handler).listen(8080); //the server object listens on port 8080
