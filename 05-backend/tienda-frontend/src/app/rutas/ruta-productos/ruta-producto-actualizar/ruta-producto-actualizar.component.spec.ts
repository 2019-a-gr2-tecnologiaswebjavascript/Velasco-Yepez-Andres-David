import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoActualizarComponent } from './ruta-producto-actualizar.component';

describe('RutaProductoActualizarComponent', () => {
  let component: RutaProductoActualizarComponent;
  let fixture: ComponentFixture<RutaProductoActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductoActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
