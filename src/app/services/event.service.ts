import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getRandomNumber(maximum = 10, ignore: number[]): number {
    let numb;
    while (!numb) {
      const randomNum = Math.floor(Math.random() * maximum);
      if (!ignore.some(n => n === randomNum)) {
        numb = randomNum;
      }
    }
    return numb;
  }

  getRandomNumbers(maximum = 10, count = 3): number[] {
    const numbs: number[] = [];
    while (numbs.length < count) {
      numbs.push(this.getRandomNumber(maximum, numbs));
    }
    return numbs;
  }
}
