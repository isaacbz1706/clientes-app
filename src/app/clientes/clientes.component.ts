import { Component,OnInit } from '@angular/core';
import { Cliente } from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
Clientes : Cliente[] = [{id:1, nombre:'Isaac', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:2, nombre:'lalo', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:3, nombre:'yos', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:4, nombre:'yamilet', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:5, nombre:'jesus', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:6, nombre:'celia', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:7, nombre:'david', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:8, nombre:'rosa', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:9, nombre:'rodrigo', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:10, nombre:'shak', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'},
{id:11, nombre:'lili', apellido:'Becerra Zamora', email:'zamora.becerra99@gmail.com', createAt:'1998-17-06'}




];
constructor(){}
  ngOnInit(){}
}
