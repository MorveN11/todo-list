import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtonComponent } from '@/delete-button/delete-button.component';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;
  let emitSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteButtonComponent],
    });

    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    emitSpy = jest.spyOn(component.deleteClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit deleteClicked when onClick is called', () => {
    component.onClick();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should not pass any argument when emitting deleteClicked', () => {
    component.onClick();
    expect(emitSpy).toHaveBeenCalledWith();
  });
});
