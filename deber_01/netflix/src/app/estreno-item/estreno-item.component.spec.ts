import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenoItemComponent } from './estreno-item.component';

describe('EstrenoItemComponent', () => {
  let component: EstrenoItemComponent;
  let fixture: ComponentFixture<EstrenoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrenoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrenoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
