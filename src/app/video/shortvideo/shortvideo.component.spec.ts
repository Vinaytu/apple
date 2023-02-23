import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortvideoComponent } from './shortvideo.component';

describe('ShortvideoComponent', () => {
  let component: ShortvideoComponent;
  let fixture: ComponentFixture<ShortvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortvideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
