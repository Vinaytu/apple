import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeGameComponent } from './bike-game.component';

describe('BikeGameComponent', () => {
  let component: BikeGameComponent;
  let fixture: ComponentFixture<BikeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
