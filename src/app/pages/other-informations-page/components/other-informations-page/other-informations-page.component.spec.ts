import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationsPageComponent } from './other-informations-page.component';

describe('OtherInformationsPageComponent', () => {
  let component: OtherInformationsPageComponent;
  let fixture: ComponentFixture<OtherInformationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInformationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
