// Задание пробное
  let obj = {}
  obj.a =3
  obj.b ='Hello'
  obj.c =[1,2,3]
  delete obj.c

  //console.log(obj.a,obj.b,obj.c)


// Задание 1
function object(obj) {
  for( let key in obj) {
    if(obj.hasOwnProperty(key)){
      console.log(key)}
  }
}
let person ={
  a:'hello',
  lol: 12
}
student = Object.create(person)
student.city = 'Moskow'
object(student)




// Задание 2
function checker(str, obj){
  for (let key in obj) {
    if ( key == str) {
      return true


    }
  }
}
//checker('name',student)


// Задание 3
a = function newObject(){
  let obj= new Object()
  obj.__proto__= null
  console.log(obj, obj.__proto__)
}
a()



// Заданиие 4
function Gadget(name,power) {
  this.name = name
  this.power = power
}
Gadget.prototype.Connect = function(name) {
    let s = ` ${this.name} conndected to charge`
    console.log(s)
  }

Gadget.prototype.Connect = function(name) {
    let s = ` ${this.name} disconndected from charge`
    console.log(s)
  }
function Computer(name,power, price) {
  this.name = name
  this.power = power
  this.price = price }

Computer.prototype = new Gadget()
Computer.prototype.turnOn = function() {
  console.log('This computer is turned on')
}
Computer.prototype.turnOff = function() {
  console.log('This computer is turned off')
}
function Lamp(name,power) {
  this.name = name
  this.power = power
  this.light = 'white'}

Lamp.prototype = new Gadget()
Lamp.prototype.turnOn = function() {
  console.log('This lamp is turned on')}
Lamp.prototype.turnOff = function() {
  console.log('This lamp is turned off')
}

const asus = new Computer('asus', 134,'1200$')
const tableLamp =  new Lamp('table lamp', 10)
asus.Connect()
tableLamp.Connect()
asus.turnOn()
tableLamp.turnOn()