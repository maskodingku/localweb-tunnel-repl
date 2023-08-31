import net from "net";
import getPort from 'get-port';

export default {
	"init" : async (port)=>{
		return new Promise((resolve)=>{
			const server = net.createServer().listen(port, () => {
			  	// console.log('Server TCP listening on port :',port_tcp);
			  	resolve(server);
			});
		});
	},
  "getPort":async ()=>{
    const port_tcp = await getPort();
    return port_tcp;
  }
};
