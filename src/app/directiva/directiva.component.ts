import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
listaCurso:string [] = ['TypeScript','JavaSacript', 'Java SE', 'c#','PHP'];
constructor(){

}
}
