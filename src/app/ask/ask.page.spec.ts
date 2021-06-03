import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPage } from './ask.page';

describe('AskPage', () => {
  let component: AskPage;
  let fixture: ComponentFixture<AskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
