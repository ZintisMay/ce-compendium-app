import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { HttpModule,Http } from '@angular/http';
import {RouterModule} from '@angular/router';
import { OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableRowComponent } from './table-row/table-row.component';
import { OauthTestPage1Component } from './oauth-test-page-1/oauth-test-page-1.component';
import { OauthTestPage2Component } from './oauth-test-page-2/oauth-test-page-2.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes = [
// {
//   path: "", redirectTo: "/Main", pathMatch: 'full'
// },
{
  path: "Main", pathMatch: 'full', component: MainViewComponent
},
{ 
  path: "OTP1", pathMatch: 'full', component: OauthTestPage1Component
},
{ 
  path: "OTP2", pathMatch: 'full', component: OauthTestPage2Component
},
{
  path: "OTP2/:code:state", component: OauthTestPage2Component
}
];

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    TableBodyComponent,
    TableRowComponent,
    OauthTestPage1Component,
    OauthTestPage2Component,
    MainViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  code: any;
  state: any;
  OAURL: any = "http://www.google.com";
  resultingData: any;
  private sub: any;

  constructor(private route: ActivatedRoute,private http:Http) {}

  logger(x){
    console.log(x);
    return x;
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params:Params)=>{
      this.code = params['code'];
      this.state = params['state'];
    })
    this.resultingData = this.oauthStep3(this.OAURL);
    console.log('a', this.code, this.state, this.OAURL, this.resultingData);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  oauthStep3(url:string):Promise<any>{
    return this.http.get(url)
      .toPromise()
      .then(response=>response.json().data as any)
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any>{
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }

 }

