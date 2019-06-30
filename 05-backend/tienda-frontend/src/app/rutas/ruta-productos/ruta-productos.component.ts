import { Component, OnInit } from '@angular/core';
import {ProductoHttpService} from "../../servicios/http/producto-http.service";
import {Producto} from "../../dto/producto";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MensajeDialogoComponent} from "../../componentes/mensaje-dialogo/mensaje-dialogo.component";

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.css']
})
export class RutaProductosComponent implements OnInit {

  listaProductos:Producto[];

  constructor(
    private readonly _productoHttpService: ProductoHttpService,
    public dialog: MatDialog,
    ) { }

  refrescarLista(){
    const $productoListar = this._productoHttpService.listar()
      .subscribe(
        (productos)=>{
          this.listaProductos = productos;
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
   this.refrescarLista();
  }

  borrarProducto(producto:Producto): void {
    console.log(producto);
    const dialogRef = this.dialog.open(MensajeDialogoComponent, {
      data:producto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refrescarLista();
      //
    });
  }


}
