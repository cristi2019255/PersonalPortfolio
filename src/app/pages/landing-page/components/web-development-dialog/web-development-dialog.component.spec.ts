import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentDialogComponent } from './web-development-dialog.component';

describe('WebDevelopmentDialogComponent', () => {
  let component: WebDevelopmentDialogComponent;
  let fixture: ComponentFixture<WebDevelopmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
