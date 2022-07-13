import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDevelopmentDialogComponent } from './android-development-dialog.component';

describe('AndroidDevelopmentDialogComponent', () => {
  let component: AndroidDevelopmentDialogComponent;
  let fixture: ComponentFixture<AndroidDevelopmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidDevelopmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidDevelopmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
