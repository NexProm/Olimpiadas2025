import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribirseComponent } from './suscribirse.component';

describe('SuscribirseComponent', () => {
  let component: SuscribirseComponent;
  let fixture: ComponentFixture<SuscribirseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscribirseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscribirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
