import Car from "../../models/Car.js";

let _state = {
      cars: []
}

let _subscribers = {
      cars: []
}

function setState(propName, data) {
      _state[propName] = data
      _subscribers[propName].forEach(fn => fn());
}

export default Class CarService{
      constructor(){
            console.log("car service works", this.Cars)
      }

      addSubscriber(propName, fn){
            _subscribers[propName].push(fn)
      }

      get Cars(){
            return _state.cars.map(car => new Car(car))
      }
      //
      addCar(newCar){
            let temp = this.Cars
            temp.push(new Car(newCar))
            setState("cars", temp)
      }
}