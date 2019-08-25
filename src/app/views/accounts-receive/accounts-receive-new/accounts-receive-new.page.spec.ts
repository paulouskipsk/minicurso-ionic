import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsReceiveNewPage } from './accounts-receive-new.page';

describe('AccountsReceiveNewPage', () => {
  let component: AccountsReceiveNewPage;
  let fixture: ComponentFixture<AccountsReceiveNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsReceiveNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsReceiveNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
