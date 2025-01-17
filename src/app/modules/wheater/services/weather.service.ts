import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey } from 'src/utils/requests';

//INjectable diz que o serviço pode ser injetado em component
//ProvidedIN diz onde será provido.
@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  private apiKey = apiKey;


  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
       {})
  }
}
