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
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
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


class Heavy extends Robot {
    constructor(name) {
        super(name, 1000, 100);
        this.armor = 25;
    }

    incomingDamage(damage) {
        this.health = this.health - (damage * (1 - this.armor / 100));
    }
};

class Assault extends Robot {
    constructor(name) {
        super(name, 450, 300);
        this.crit = 30;
    }

    outgoingDamage() {
        let random = Math.random() * 100;
        if(random > this.crit) {
            return this.damage;
        } else {
            return this.damage * 2;
        }
    }
};

class Light extends Robot {
    constructor(name) {
        super(name, 600, 200);
        this.agility = 50;
    }

    incomingDamage(damage) {
        let dodge = Math.random() * 100;
        if(dodge > this.agility) {
            this.health = this.health - damage;
        }
    }
};

const game = new Arena();
game.startGame();

// let heavyRobot = new Heavy();
// heavyRobot.incomingDamage(100);
// console.log(heavyRobot);

// let assault = new Assault('Hren');
// console.log(assault.outgoingDamage());

// let light = new Light('Hren');
// light.incomingDamage(100)
// console.log(light);