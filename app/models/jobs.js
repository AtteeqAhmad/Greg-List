export default class Job {
      constructor(data) {
            this.title = data.title
            this.salary = data.salary
            this.company = data.company
            this.location = data.location

      }

      get Template() {
            return `
            <div class="col-4">
<h3>Title: ${this.title}</h3>
<h3>Salary: ${this.salary}</h3>
<h3>Company: ${this.company}</h3>
<h3>location: ${this.location}</h3>
            `
      }
}