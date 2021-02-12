class Pirate {
  constructor(name, job){
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = false;
    this.booty = 0;
    this.curseAmount = 0;
  }
  robShip(){
    this.curseAmount += 1;
    if(this.curseAmount > 5){
      this.cursed = true;
      return "ARG! I\'ve been cursed!";
    }
    else{
      this.booty += 100;
      return "YAARRR!";
    }
  }

  liftCurse(){
    if(this.cursed){
      this.curseAmount = 0;
      this.cursed = false;
      this.booty -= 300;
      return "Your curse has been lifted!"
    }
    else{
      return "You don't need to lift a curse!"
    }
  }
}

module.exports = Pirate;
