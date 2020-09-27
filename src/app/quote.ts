export class Quote {
    showDescription:boolean
    constructor(public id: number, public quoteBody: string, public publisher: string, public datePublished: Date, public author: string) {
        this.showDescription = false
    }
}
// id, quoteBody, publisher, datePublished, author