import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../models/server";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input()
  server: Server;

  constructor() {
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.server.status;
  }

  getColor() {
    return this.getServerStatus() == 'online' ? 'green' : this.getServerStatus() == 'offline' ? 'red' : 'grey';
  }

  toggleServerStatus(server: Server) {
    if (server.status == 'online')
      server.status = 'offline';
    else if (server.status == 'offline')
      server.status = 'online';
  }
}
