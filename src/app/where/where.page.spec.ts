import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WherePage } from './where.page';

describe('WherePage', () => {
  let component: WherePage;
  let fixture: ComponentFixture<WherePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WherePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WherePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
