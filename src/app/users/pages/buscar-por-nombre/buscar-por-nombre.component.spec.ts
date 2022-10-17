import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorNombreComponent } from './buscar-por-nombre.component';

describe('BuscarPorNombreComponent', () => {
  let component: BuscarPorNombreComponent;
  let fixture: ComponentFixture<BuscarPorNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPorNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPorNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
