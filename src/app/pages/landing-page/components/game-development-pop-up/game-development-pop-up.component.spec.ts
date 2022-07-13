import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopmentPopUpComponent } from './game-development-pop-up.component';

describe('GameDevelopmentPopUpComponent', () => {
  let component: GameDevelopmentPopUpComponent;
  let fixture: ComponentFixture<GameDevelopmentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDevelopmentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevelopmentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
