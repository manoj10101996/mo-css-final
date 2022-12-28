import { Component, OnInit } from '@angular/core';
import { THEME, THEMES } from 'src/sources/THEME';

@Component({
  selector: 'app-mo-colors',
  templateUrl: './mo-colors.component.html'
})
export class MoColorsComponent implements OnInit {
  public themes: any = THEMES;

  public colors: string[] = [
    "danger",
    "warning",
    "success",
    "primary",
    "info",
    "dark",
    "light",
    "core"
  ];
  public themeArray: any[] = [];
  public indexRange: number[] = [];

  constructor() {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.themes[key]['name'] = key;
        this.themeArray.push(this.themes[key]);
      }
    }
    this.indexRange = Array.from(Array(9).keys());
  }

  ngOnInit(): void {
  }

}
