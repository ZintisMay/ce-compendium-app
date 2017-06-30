import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthTestPage1Component } from './oauth-test-page-1.component';

describe('OauthTestPage1Component', () => {
  let component: OauthTestPage1Component;
  let fixture: ComponentFixture<OauthTestPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthTestPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthTestPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
