import CarController from "./components/Car/CarController.js";
import JobController from "./components/Jobs/JobController.js";



class App {
      constructor() {
            this.controllers = {
                  CarController: new CarController(),
            }
      }
}

window["app"] = new App()