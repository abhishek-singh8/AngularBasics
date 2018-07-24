import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComponentComponent } from './binding-component.component';

describe('BindingComponentComponent', () => {
  let component: BindingComponentComponent;
  let fixture: ComponentFixture<BindingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
