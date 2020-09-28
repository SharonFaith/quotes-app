import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, '', '', new Date(), '')

  @Output () addQuote = new EventEmitter<Quote> ()

  onSubmit() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', new Date(), '');
    
  }
   
  /*app = this.module("myModule", [])
		.controller("myController" , function($scope){
 
	var members =[
		{name: "John Smith", Votes: 0},
		{name: "Claire Temple", Votes: 0},
	];					
 
	$scope.members = members;
 
	$scope.incrementUp = function(member){
		member.Votes++;
	}
	$scope.incrementDown = function(member){
		member.Votes--;
	}
});	*/

  constructor() { }

  ngOnInit(): void {
  }

}
