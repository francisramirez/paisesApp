import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  criterio:string = "";
  constructor(private paisService:PaisService) { }
  hayError:boolean=false;
  ngOnInit(): void {
  }
  buscar(){
    this.hayError =false;
    this.paisService.buscarPais(this.criterio).subscribe((paises) => {
        console.log(paises);
      },(err) => {
          console.log(err.error.status);
          this.hayError=true;
      });

  }

}
