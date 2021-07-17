export class QuoteModel {
    showDescription:boolean
    constructor(
        public id:number, 
        public theQuote:string, 
        public author:string,
        public submittedBy:string,
        public completeDate:Date
        ){

        this.showDescription = false
    }
}
