import { HttpClient } from '@angular/common/http';

export class HttpService {

  protected host: string = 'https://zaalportal.onrender.com';

  /**
   * Initialize the objects from the class
   */
  constructor(protected http: HttpClient) {
  }

}
