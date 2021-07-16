import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

 quotes:QuoteModel[] = [
    new QuoteModel(1, "Everyone thinks of changing the world, but no one thinks of changing himself", " Leo Tolstoy", "Augustine"),
    new QuoteModel(2, "Never doubt that a small group of thoughtful, committed, citizens can change the world", "Margaret Mead", "Anira"),
    new QuoteModel(3, "Education is the most powerful weapon which you can use to change the world", "Nelson Mandela", "Brian"),
    new QuoteModel(3, "Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving", "Terry Pratchett, A Hat Full of Sky", "Brian")
  ]

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
