import { Component,OnInit, importProvidersFrom } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.jsaon';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
clientes : Cliente[] = [];
constructor(){}
  ngOnInit(){
    this.clientes=CLIENTES;
  }
}
