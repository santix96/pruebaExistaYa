import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private configService: ConfigService;
  constructor(private Http: HttpClient) {
    this.configService = new ConfigService();
  }

  getAllHeroes() {
    return this.Http.get(this.configService.serverIp.concat('/getall'));
  }
}
