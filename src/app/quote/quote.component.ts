import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes: Quote[] = [
    // id, quoteBody, publisher, datePublished, author
    new Quote(1, 'Push yourself, no one else will', 'Patrick', new Date(2019, 6, 24), 'Zawadi'),
    new Quote(2, 'Limits exist only in the mind', 'Kate', new Date(2019, 6,25), 'Joy'),
    new Quote(3, 'Spread the love you want to receive', 'Amani', new Date(2019, 6,26), 'Sally'),
    new Quote(4, 'Normal is boring', 'Daisy', new Date(2019, 6, 27), 'Danielle'),
    new Quote(5, 'Do not dim your light', 'Rob', new Date(2019, 6, 28), 'Claire')
  ]
   toggleDetails(index) {
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
   deleteQuoteFunc(deleted, index) {
    if(deleted) {
      let confirmDelete = confirm(`Are you sure you want to delete the quote: ${this.quotes[index].quoteBody}`)
      if(confirmDelete) {
        this.quotes.splice(index, 1)
      }
    }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
