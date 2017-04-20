import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P6Component } from './p6.component';

describe('P6Component', () => {
  let component: P6Component;
  let fixture: ComponentFixture<P6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
