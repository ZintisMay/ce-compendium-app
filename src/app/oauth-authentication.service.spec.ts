import { TestBed, inject } from '@angular/core/testing';

import { OauthAuthenticationService } from './oauth-authentication.service';

describe('OauthAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OauthAuthenticationService]
    });
  });

  it('should be created', inject([OauthAuthenticationService], (service: OauthAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
