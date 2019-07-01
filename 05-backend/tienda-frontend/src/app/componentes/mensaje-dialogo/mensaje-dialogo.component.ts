import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Producto} from "../../dto/producto";
import {ProductoHttpService} from "../../servicios/http/producto-http.service";



@Component({
  selector: 'app-mensaje-dialogo',
  templateUrl: './mensaje-dialogo.component.html',
  styleUrls: ['./mensaje-dialogo.component.css']
})
export class MensajeDialogoComponent {

  constructor(
    public dialogRef: MatDialogRef<MensajeDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto,
    private readonly _productoService:ProductoHttpService,
  ) {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  aceptar():void{
    console.log("Se borro: ", this.producto.id);
    this._productoService.borrar(this.producto.id)
      .subscribe(
        (producto)=>console.log("se borro: ", producto),
        (error)=>console.log(error),
        ()=> {
          this.dialogRef.close()
        },
  );
  }

}
