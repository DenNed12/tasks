class Gadget {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
    getPower(min) {
       let res = this.power * min
        console.log("Расход электричества за" + min + "минут равен" + res)
    }

   isConnected() {
        let str = `${this.name}  подключен к сети`
        console.log(str)
        return true
    }
}
class Computer extends Gadget {
    constructor(price,name,power,getPower,isConnected) {
        super(name,power, getPower,isConnected)
        this.price = price
        this.isRunning = false

    }
    runComputer() {
        if (this.isConnected) {
            this.isRunning = true
            console.log(this.name +' включен и работает')
        }
    }
}
class Lamp extends Gadget{
    constructor(name,power,isConnected) {
        super(name,power,isConnected)
        this.turnOn = false

    }
     turnOnLamp() {
        if (this.isConnected) {
            this.turnOn = true
            console.log(this.name +' включена и освещает комнату')
        }
}}
let asus = new Computer('200$','asus',200)
asus.isConnected()
asus.runComputer()
let tableLamp = new Lamp('table lamp',10)
tableLamp.isConnected()
tableLamp.turnOnLamp()