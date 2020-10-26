export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.temp = (Math.ceil(data.main.temp - 273.15) * 9/5 + 32)
    // this.units = data.units.imperial
    this.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
  }
  get Template() {
    return /*html*/`
      <div>
      <div class="row ml-3 mt-2">
      <div class="col-6">
      <h2 style="text-decoration: underline; color: #1afa06;">Temp</h2>
      <h2 style="max-width: 50px; font-size: 2rem; color: #1afa06;">${this.temp}&deg;</h2>
      </div>
      <div class="col-6">
      <img style="width: 50px;" src="${this.icon}" alt=""/>
      </div>
      </div>
      </div>
        `;
  }
}