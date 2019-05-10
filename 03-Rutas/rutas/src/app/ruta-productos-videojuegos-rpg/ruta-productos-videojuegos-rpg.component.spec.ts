import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosRpgComponent } from './ruta-productos-videojuegos-rpg.component';

describe('RutaProductosVideojuegosRpgComponent', () => {
  let component: RutaProductosVideojuegosRpgComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosRpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosRpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
