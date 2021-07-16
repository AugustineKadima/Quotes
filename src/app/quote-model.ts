export class QuoteModel {
    // Create quote -form (theQuote, theAuthor, submittedBy)
    constructor(public id:number, public theQuote:string, 
        public author:string, public submittedBy:string){

    }
}
