import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
const axios = require('axios');
@Injectable({ providedIn: 'root' })
export class SwaggerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private getpoemsurl: any = `${environment.baseurl}` + `${environment.getpoems}`;
  constructor(private httpClient: HttpClient) { }

  async getPoems(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: this.getpoemsurl,
        headers: this.httpOptions
      }
      ).then((response) => {
        return resolve(response.data);
      }).catch((error) => {
        return reject(error);
      })

    })
  }
}
