import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosDeportesComponent } from './ruta-productos-videojuegos-deportes.component';

describe('RutaProductosVideojuegosDeportesComponent', () => {
  let component: RutaProductosVideojuegosDeportesComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosDeportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosDeportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
