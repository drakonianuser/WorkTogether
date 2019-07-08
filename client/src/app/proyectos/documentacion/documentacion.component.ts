import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documentacion:Array<any>=[
    {texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!',imagen:'assets/icono2.png'},
    {texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!',imagen:'assets/icono2.png'},
    {texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!',imagen:'assets/icono2.png'}
    
  ] 

}
