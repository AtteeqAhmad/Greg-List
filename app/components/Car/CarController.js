import CarService from "./CarService.js";

let _carService = new CarServicee()

function drawCars() {
      let carsElem = document.querySelector('#cars')
      let template = ''
      let Cars = _carService.Cars
      carsElem.forEach(car => {
            template += car.Template
      })
      carsElem.innerHTML = Template
}

export default class CarController {
      constructor() {
            console.log("car controller works")
            _carService.addSubscriber("cars", drawCars)
            drawCars()
      }

      addCar(e) {
            e.preventDefault()
            let form = e.target

            let newCar = {
                  make: form.make.value,
                  model: form.model.value,
                  year: form.year.value,
                  color: form.color.value
            }

            _carService.addCar(newCar)
            form.reset()
      }
}