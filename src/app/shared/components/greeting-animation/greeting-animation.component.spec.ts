import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingAnimationComponent } from './greeting-animation.component';

describe('GreetingAnimationComponent', () => {
  let component: GreetingAnimationComponent;
  let fixture: ComponentFixture<GreetingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
