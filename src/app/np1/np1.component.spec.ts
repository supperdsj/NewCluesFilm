import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Np1Component } from './np1.component';

describe('Np1Component', () => {
  let component: Np1Component;
  let fixture: ComponentFixture<Np1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Np1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Np1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
