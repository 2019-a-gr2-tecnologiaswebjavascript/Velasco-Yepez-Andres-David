import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Producto} from "../../dto/producto";
import {ProductoHttpService} from "../../servicios/http/producto-http.service";
import {CarritoCompraService} from "../../servicios/carrito/carrito-compra.service";

@Component({
  selector: 'app-dialogo-agregar',
  templateUrl: './dialogo-agregar.component.html',
  styleUrls: ['./dialogo-agregar.component.css']
})

export class DialogoAgregarComponent {

  cantidad:number;

  constructor(
    public dialogRef: MatDialogRef<DialogoAgregarComponent>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto,
    private readonly _productoService:ProductoHttpService,
    private readonly _carritoService:CarritoCompraService,
  ) {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  agregar():void{
      const nuevoDetalle = {
        producto:this.producto,
        cantidad:this.cantidad,
      };
      const estado = this._carritoService.addListaCompras(nuevoDetalle);
      this.dialogRef.close();
  }

}
