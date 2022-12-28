import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-badge",
  templateUrl: "./mo-badge.component.html"
})
export class MoBadgeComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public color: string = "danger";
  public position: string = "left";
  public colors: string[] = [];
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }

  ngOnInit(): void {}

  setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
  };
}
