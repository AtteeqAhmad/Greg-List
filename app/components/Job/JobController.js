import JobService from "./JobService.js";
import Job from "../../models/Car.js";
import Job from "../../models/jobs.js";

let _jobService = new JobService()


function drawCars() {
      let jobElem = document.querySelector("#jobs")
      let template = ''
      let jobs = _jobService.jobs
      jobs.forEach(job => {
            template += Job.template
      })
      jobsElem.innerHTML = template
}


export default class JobController {
      constructor() {
            console.log("car controller works")
            _jobService.addSubscriber("jobs", drawJobs)
            drawJobs()
      }

      addJob(e) {
            e.preventDefault()
            let form = e.target

            let newJob = {
                  title: form.title.value,
                  salary: form.salary.value,
                  company: form.company.value,
                  location: form.company.value
            }

            _jobService.addJob(newJob)
            form.reset()
      }
}