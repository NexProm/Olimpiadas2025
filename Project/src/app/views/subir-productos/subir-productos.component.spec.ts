import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirProductosComponent } from './subir-productos.component';

describe('SubirProductosComponent', () => {
  let component: SubirProductosComponent;
  let fixture: ComponentFixture<SubirProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
