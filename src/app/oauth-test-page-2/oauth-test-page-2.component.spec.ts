import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthTestPage2Component } from './oauth-test-page-2.component';

describe('OauthTestPage2Component', () => {
  let component: OauthTestPage2Component;
  let fixture: ComponentFixture<OauthTestPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthTestPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthTestPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
