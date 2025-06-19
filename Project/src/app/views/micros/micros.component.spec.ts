import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosComponent } from './micros.component';

describe('MicrosComponent', () => {
  let component: MicrosComponent;
  let fixture: ComponentFixture<MicrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
