import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosHttpRequestorProvider {
  makeInstance(baseURI: string) {
    return axios.create({
      baseURL: baseURI,
    });
  }
}
