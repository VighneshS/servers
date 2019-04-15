import {Component} from '@angular/core';
import {Server} from "./models/server";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servers';
  nwServer: Server;
  serverCreated = false;
  servers: Set<Server>;
  constructor() {
    this.nwServer = new Server();
    this.servers = new Set<Server>();
  }

  createServer() {
    this.serverCreated = true;
    this.nwServer.id = Math.ceil(Math.random()*100);
    this.nwServer.status = "online";
    let clonedNwServer = Object.assign({}, this.nwServer); // Deep copy.
    this.servers.add(clonedNwServer);
    setTimeout(function () {
      this.serverCreated = false;
      this.nwServerName = '';
    }.bind(this), 2000);
  }
}
