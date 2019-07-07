import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  foros:Array<any>=[
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'}
    
  ] 

}
