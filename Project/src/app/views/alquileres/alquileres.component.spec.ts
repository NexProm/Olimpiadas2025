import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresComponent } from './alquileres.component';

describe('AlquileresComponent', () => {
  let component: AlquileresComponent;
  let fixture: ComponentFixture<AlquileresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlquileresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
