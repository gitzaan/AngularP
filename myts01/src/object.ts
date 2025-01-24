type Point  = {
    x:number;
    y:number;
    z?: number; //Optional Parameters
}

let coordinate1: Point = {x:20, y:10};

class Player{
    constructor(
        private firstName: string,
        private lastName: string,
        private _score: number
    ){

    }

    get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    get score(): number{
        return this._score;
    }

    set finalScore(newScore:number){
        if(newScore<0){
            throw new Error("Score cannpt be together");
        }

        this._score=newScore
    }
}


const player1 = new Player("Suresh","D",80);
player1.finalScore=100;
console.log(player1.fullName)
