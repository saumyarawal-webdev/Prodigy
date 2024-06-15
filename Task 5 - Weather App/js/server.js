const http = require('http');
const httpProxy = require('http-proxy');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const url = require('url');

const proxy = httpProxy.createProxyServer({});
const serve = serveStatic('./', {'index': ['index.html']});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/weather') {
    proxy.web(req, res, { 
      target: `https://weather-by-api-ninjas.p.rapidapi.com`,
      changeOrigin: true,
      headers: {
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': 'f700a4f1bemsh5590250c176984bp170922jsn3ba372de6f4d'
      }
    });
  } else {
    serve(req, res, finalhandler(req, res));
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
