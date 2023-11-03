import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxButtonComponent } from '@/check-box-button/check-box-button.component';

describe('CheckBoxButtonComponent', () => {
  let component: CheckBoxButtonComponent;
  let fixture: ComponentFixture<CheckBoxButtonComponent>;
  let emitSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxButtonComponent],
    });

    fixture = TestBed.createComponent(CheckBoxButtonComponent);
    component = fixture.componentInstance;
    emitSpy = jest.spyOn(component.updateClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit updateClicked when onClick is called', () => {
    component.onClick();
    expect(emitSpy).toHaveBeenCalled();
  });
});
