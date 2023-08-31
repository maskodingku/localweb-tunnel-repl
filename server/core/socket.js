import { Server } from 'socket.io';
import authentication from "./authentication.js";
export default {
	"init" : async (server_app,config) => {
		return new Promise((resolve)=>{
			const port = 80;
			const tunnel = new Server(server_app,{
				'maxHttpBufferSize': 1000000
			}).use((socket, next)=>{
				authentication(socket, next, config);
			});
			server_app.listen(port, () => {
			  	console.log('Server Tunnel running on port :',port);
			  	resolve(tunnel);
			});
		});
	}
};
