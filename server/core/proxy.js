import httpProxy from 'http-proxy';
const proxy = httpProxy.createProxyServer({
	proxyTimeout:100000
});
proxy.on('error', function (err, req, res) {
  res.writeHead(503, {
    'Content-Type': 'text/plain'
  });
  res.end('The server is not connected to the local server!');
});
let port_proxy = null;
export default {
  "init":(port)=>{
    port_proxy = port;
    return;
  },
  "http": (req,res)=>{
    proxy.web(req, res, {
  	  target: {
        "host":"localhost",
  			"port":port_proxy
      }
  	});
  }
};
