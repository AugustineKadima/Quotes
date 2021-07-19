import { Injectable } from '@angular/core';
import { QuoteModel } from './quote-model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  getQuotes(){
    return [
      new QuoteModel(1, "Everyone thinks of changing the world, but no one thinks of changing himself", " Leo Tolstoy", "Augustine", new Date(2021,6,17), 0, 0),
      new QuoteModel(2, "Never doubt that a small group of thoughtful, committed, citizens can change the world", "Margaret Mead", "Anira", new Date(2022,4,22), 0, 0),
      new QuoteModel(3, "Education is the most powerful weapon which you can use to change the world", "Nelson Mandela", "Brian", new Date(2017,2,17), 0, 0),
      new QuoteModel(4, "Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving", "Terry Pratchett, A Hat Full of Sky", "Brian", new Date(2010,7,10), 0, 0)
    ]
  }

  constructor() { }
}
