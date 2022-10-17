import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorRolComponent } from './buscar-por-rol.component';

describe('BuscarPorRolComponent', () => {
  let component: BuscarPorRolComponent;
  let fixture: ComponentFixture<BuscarPorRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPorRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPorRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
