import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProyectoComponent } from './vista-proyecto.component';

describe('VistaProyectoComponent', () => {
  let component: VistaProyectoComponent;
  let fixture: ComponentFixture<VistaProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
