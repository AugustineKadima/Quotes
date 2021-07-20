import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuotesService } from './quotes.service';
import { DateCountPipe } from './date-count.pipe';
import { HighestUpvoteDirective } from './directives/highest-upvote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    CreateQuoteComponent,
    DateCountPipe,
    HighestUpvoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
