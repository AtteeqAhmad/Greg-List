export default class Car {
      constructor(data) {

            this.make = data.make || ''
            this.model = data.model || ''
            this.year = data.year || ''
            this.color = data.color || ''

      }
      get Template() {
            return `
             <div class="col-4">
             <h3>Make: ${this.make}</h3>
             <h3>Model: ${this.model}</h3>
             <h3>Year: ${this.year}</h3>
             <h3>Color: ${this.color}</h3>
</div>
             `
      }
}