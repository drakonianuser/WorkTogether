import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContra1Component } from './recuperar-contra1.component';

describe('RecuperarContra1Component', () => {
  let component: RecuperarContra1Component;
  let fixture: ComponentFixture<RecuperarContra1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarContra1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarContra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
