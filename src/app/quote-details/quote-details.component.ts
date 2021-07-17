import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quote!:QuoteModel
 @Output() emmitedEvent = new EventEmitter<boolean>()

 quoteDelete(boolVal:boolean){
    this.emmitedEvent.emit(boolVal);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
