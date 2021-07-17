import { Injectable } from '@angular/core';
import { QuoteModel } from './quote-model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  getQuotes(){
    return [
      new QuoteModel(1, "Everyone thinks of changing the world, but no one thinks of changing himself", " Leo Tolstoy", "Augustine", new Date(1/2/1990)),
      new QuoteModel(2, "Never doubt that a small group of thoughtful, committed, citizens can change the world", "Margaret Mead", "Anira", new Date(2/4/2021)),
      new QuoteModel(3, "Education is the most powerful weapon which you can use to change the world", "Nelson Mandela", "Brian", new Date(20/2/2017)),
      new QuoteModel(3, "Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving", "Terry Pratchett, A Hat Full of Sky", "Brian", new Date(5/7/2010))
    ]
  }

  constructor() { }
}
