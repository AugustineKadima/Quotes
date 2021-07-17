export class QuoteModel {
    showDescription:boolean
    vote:number 
    constructor(
        public id:number, 
        public theQuote:string, 
        public author:string,
        public submittedBy:string,
        public completeDate:Date
        ){

        this.showDescription = false
        this.vote = 0
    }
}
