import Job from "../../models/Car.js";
import Car from "../../models/Car.js";

let _state = {
      jobs: []
}

let _subscribers = {
      job: []
}

function setState(propName, data) {
      _state[propName] = data
      _subscribers[propName].forEach(fn => fn());
}

export default class JobService {
      constructor() {
            console.log("car service works", this.Jobs)
      }


      addSubscriber(propName, fn) {
            _subscribers[propName].push(fn)
      }

      get Jobs() {
            return _state.jobs.map(job => new Job(job))
      }

      addJob(newJob) {
            let temp = this.Jobs
            temp.push(new Car(newCar))
            setState("jobs", temp)
      }

}