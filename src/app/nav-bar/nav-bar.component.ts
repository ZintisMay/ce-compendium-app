import { Component, OnInit } from '@angular/core';
import { OauthTestPage1Component } from '../oauth-test-page-1/oauth-test-page-1.component';
import { OauthTestPage2Component } from '../oauth-test-page-2/oauth-test-page-2.component';
import { MainViewComponent } from '../main-view/main-view.component';
import { OauthAuthenticationService } from '../oauth-authentication.service';

const routes = [
{
  path: "", redirectTo: "/Main", pathMatch: 'full'
},
{
  path: "Main", component: MainViewComponent
},
{ 
  path: "OTP1", component: OauthTestPage1Component
},
{ 
  path: "OTP2", component: OauthTestPage2Component
}
];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [OauthAuthenticationService]
})
export class NavBarComponent implements OnInit {

	linkRoutes: any[];

	constructor(private oauthAuthenticationService: OauthAuthenticationService) { }

  ngOnInit() {
  	this.linkRoutes = routes;
  	console.log(this.linkRoutes);

  	this.oauthAuthenticationService.giveUrl();
  }

}
