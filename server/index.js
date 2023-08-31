// import module ----------------------------------------------------------------------
import http from 'http';
// import module costom ---------------------------------------------------------------
import socket from "./core/socket.js";
import tcp from "./core/tcp.js";
import tunneling from "./core/tunneling.js";
import proxy from "./core/proxy.js";
//-- config ---------------------------------------------------------------------------
import config from "./config.js";
//----- main --------------------------------------------------------------------------
(async ()=>{
  const portTcp = await tcp.getPort();
  proxy.init(portTcp);
	const server_app = await http.createServer(proxy.http);
	const server_tcp = await tcp.init(portTcp);
	const server_tunnel = await socket.init(server_app,config);
	tunneling(server_tcp,server_tunnel,config);
})();
