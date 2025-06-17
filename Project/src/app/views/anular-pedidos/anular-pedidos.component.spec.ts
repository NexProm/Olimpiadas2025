import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularPedidosComponent } from './anular-pedidos.component';

describe('AnularPedidosComponent', () => {
  let component: AnularPedidosComponent;
  let fixture: ComponentFixture<AnularPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnularPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnularPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
