import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponent } from '@/add-button/add-button.component';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;
  let emitSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonComponent],
    });

    fixture = TestBed.createComponent(AddButtonComponent);
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

  it('should have the correct title', () => {
    expect(component.title).toEqual('Save');
  });
});
