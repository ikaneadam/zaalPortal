import { HttpClient } from '@angular/common/http';

export class HttpService {

  protected host: string = 'http://localhost:5001';

  /**
   * Initialize the objects from the class
   */
  constructor(protected http: HttpClient) {
  }

}
