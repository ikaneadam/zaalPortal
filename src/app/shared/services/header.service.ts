import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerText = new BehaviorSubject('');

  constructor() { }

   public setHeaderText(headerText: string): void{
      this.headerText.next(headerText)
   }

  public getHeaderText(): BehaviorSubject<string> {
    return this.headerText
  }
}
