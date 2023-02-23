import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGameComponent } from './car-game.component';

describe('CarGameComponent', () => {
  let component: CarGameComponent;
  let fixture: ComponentFixture<CarGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
