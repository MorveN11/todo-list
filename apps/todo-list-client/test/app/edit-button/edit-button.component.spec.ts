import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonComponent } from '@/edit-button/edit-button.component';

describe('EditButtonComponent', () => {
  let component: EditButtonComponent;
  let fixture: ComponentFixture<EditButtonComponent>;
  let emitSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditButtonComponent],
    });

    fixture = TestBed.createComponent(EditButtonComponent);
    component = fixture.componentInstance;
    emitSpy = jest.spyOn(component.saveClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit saveClicked when onClick is called', () => {
    component.onClick();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should not pass any argument when emitting saveClicked', () => {
    component.onClick();
    expect(emitSpy).toHaveBeenCalledWith();
  });
});
