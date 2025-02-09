import { Component } from '@angular/core';
import { EliminarService } from '../eliminar.service';
import { gsap } from "gsap";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ngOnInit() {
    gsap.from(".logo", {
      rotation: 270,
      opacity: 0, 
      y: 100, 
      duration: 1.5
    });
    gsap.from(".txt1", {
      opacity: 0, 
      y: 100, 
      duration: 1.5
    });
    gsap.from(".txt2", {
      opacity: 0, 
      y: 100, 
      duration: 1.5
    });
    gsap.from(".but", {
      opacity: 0, 
      x: 100, 
      duration: 3
    });
  }
  constructor(private serv:EliminarService) {}
  mostrarHora(){
    this.serv.eliminar();
  }

}
