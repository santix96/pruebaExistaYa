import {Injectable} from '@angular/core';

@Injectable(
)

export class ConfigService {
 serverIp = 'http://localhost:8000/api/hero';
  constructor() {
  }
}