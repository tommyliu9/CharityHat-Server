export class Ratings {
    constructor(username, npo, date, rating){
        this.username = username;
        this.npo = npo;
        this.date = date;
        this.rating = rating;
    }

    username: string;
    npo: string; 
    date: Date;
    rating: number;
}