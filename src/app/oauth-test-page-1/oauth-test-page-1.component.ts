import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oauth-test-page-1',
  templateUrl: './oauth-test-page-1.component.html',
  styleUrls: ['./oauth-test-page-1.component.css']
})
export class OauthTestPage1Component implements OnInit {

  id: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params=>{
  		this.id = +params['id'];
  	})

  	console.log(this.id);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
