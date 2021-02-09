class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.amountEaten = 0
  }

  greet(){
    return `Hi, ${this.rider}!`;
  }
  eat(){
    if(this.amountEaten < 3){
      this.amountEaten += 1;
      console.log(this.amountEaten);
    }
    if(this.amountEaten >= 3){
      this.hungry = false;
    }
  }
}



module.exports = Dragon;
