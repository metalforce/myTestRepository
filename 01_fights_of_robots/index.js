class Arena {
    constructor() {
        this.player1 = new Robot('Megatron');
        this.player2 = new Robot('Optimus Prime');
        this.rounds = 0;
    }
    startGame() {
        let roundStatus = false;
        do {
            this.rounds++
            roundStatus = this.__startRound();
        } while(roundStatus);

        console.log('Rounds: ' + this.rounds);
    }

    __startRound() {
        this.player2.incomingDamage(this.player1.outgoingDamage());
        if(!this.player2.robotLive()) {
            console.log('Megatron wins!!!');
            return false;
        } else {
            this.player1.incomingDamage(this.player2.outgoingDamage()); 
            if(!this.player1.robotLive()) {
                console.log('Optimus Prime wins!!!');
                return false;
            }
        }
        return true;
    }
};

class Robot {
    constructor(name) {
        this.name = name;
        this.health = 1000;
        this.damage = 50;
    }

    incomingDamage(damage) {
        this.health = this.health - damage;
    }

    outgoingDamage() {
        return this.damage;
    }

    robotLive() {
        return this.health > 0;
    }
};

const game = new Arena();
game.startGame();
