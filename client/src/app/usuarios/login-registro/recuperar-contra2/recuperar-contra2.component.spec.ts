import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContra2Component } from './recuperar-contra2.component';

describe('RecuperarContra2Component', () => {
  let component: RecuperarContra2Component;
  let fixture: ComponentFixture<RecuperarContra2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarContra2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarContra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
