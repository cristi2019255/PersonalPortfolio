import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDevelopmentDialogComponent } from './ai-development-dialog.component';

describe('AiDevelopmentDialogComponent', () => {
  let component: AiDevelopmentDialogComponent;
  let fixture: ComponentFixture<AiDevelopmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiDevelopmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiDevelopmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
