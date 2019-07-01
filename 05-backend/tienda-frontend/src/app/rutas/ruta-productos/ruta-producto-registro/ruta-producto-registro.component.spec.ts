import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoRegistroComponent } from './ruta-producto-registro.component';

describe('RutaProductoRegistroComponent', () => {
  let component: RutaProductoRegistroComponent;
  let fixture: ComponentFixture<RutaProductoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
