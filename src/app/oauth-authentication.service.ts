import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const clientID='1acc418a0ab3ab194e1983a0d66bcff77d6b712449d35cbe77177a57dd44d055',
 clientSecret='279d03f936edaae5a3916f55ac4b3da17b6f0577bf345ac41ccaf1b265c7f8dc',
 creatorAccessToken='MwuSCs3jnzKdrEFiHDSuV3Vvy0xgER',
 creatorRefeshToken='Id20MUyBptUOODnh8fUt6HA29P2M60';

 var oauthUrlString ="https://www.patreon.com/oauth2/authorize?response_type=code&client_id=1acc418a0ab3ab194e1983a0d66bcff77d6b712449d35cbe77177a57dd44d055&redirect_uri=https://ce-compendium-app.firebaseapp.com/OTP2/"

@Injectable()
export class OauthAuthenticationService {

  constructor(private http: Http) { }

  data: any;

	getData(): Promise<any> {
	  return this.http.get(this.data)
	             .toPromise()
	             .then(response => response.json().data as any)
	             .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	giveUrl(): Promise<string>{
		return Promise.resolve(oauthUrlString);
	}
}

// Client ID:
// 1acc418a0ab3ab194e1983a0d66bcff77d6b712449d35cbe77177a57dd44d055
// Client Secret:
// 279d03f936edaae5a3916f55ac4b3da17b6f0577bf345ac41ccaf1b265c7f8dc
// Creator's Access Token:
// MwuSCs3jnzKdrEFiHDSuV3Vvy0xgER
// Creator's Refesh Token:
// Id20MUyBptUOODnh8fUt6HA29P2M60


// GET 

// www.patreon.com/oauth2/authorize
// 	?response_type=code
// 	&client_id=<your client id>
// 	&redirect_uri=<one of your redirect_uris that you provided in step 0>
// 	&scope=<optional list of requested scopes>
// 	&state=<optional string>

// [3] POST api.patreon.com/oauth2/token
// 	?code=<single use code, as passed in to GET route [2]>
// 	&grant_type=authorization_code
// 	&client_id=<your client id>
// 	&client_secret=<your client secret>
// 	&redirect_uri=<redirect_uri>