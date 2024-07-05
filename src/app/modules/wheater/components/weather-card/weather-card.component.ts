import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  //input é um dado que o componente pai e smart deve passar para este componente filho e dumb!
  @Input() weatherDatas!: WeatherDatas;
  //Dados da previsão do tempo recebidos pelo componente pai.

  minTemperatureIcon = faTemperatureLow;
  maxTempeatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
