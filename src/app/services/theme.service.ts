import {Injectable} from '@angular/core';
import {jeans, xmas, Theme, elegant, leaf, ocean} from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentIndex = 0;
  private availableThemes: Theme[] = [xmas, jeans, elegant, leaf, ocean];
  private active: Theme = this.availableThemes[0];

  toggleTheme() {
    this.currentIndex++;
    this.currentIndex = this.currentIndex % this.availableThemes.length;
    this.setActiveTheme(this.availableThemes[this.currentIndex]);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
