import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEntregarComponent } from './compras-entregar.component';

describe('ComprasEntregarComponent', () => {
  let component: ComprasEntregarComponent;
  let fixture: ComponentFixture<ComprasEntregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasEntregarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasEntregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
