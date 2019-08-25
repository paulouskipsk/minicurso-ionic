import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsReceivePage } from './accounts-receive.page';

describe('AccountsReceivePage', () => {
  let component: AccountsReceivePage;
  let fixture: ComponentFixture<AccountsReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsReceivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
