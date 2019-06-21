import CarController from "./components/Car/CarController.js";
import JobController from "./components/Job/JobController.js";



class App {
      constructor() {
            this.controllers = {
                  CarController: new CarController(),
                  JobController: new JobController(),
            }
      }
}

window["app"] = new App()