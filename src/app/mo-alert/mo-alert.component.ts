import { Component, Inject } from "@angular/core";
import { SUBMENU, THEME, THEMES } from "../../sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-alert",
  templateUrl: "./mo-alert.component.html"
})
export class MoAlertComponent {
  public themes: { [key: string]: THEME } = THEMES;
  public colors: string[] = [];
  public color: string = "danger";
  public isRounded: string = "";
  public isSquared: string = "";
  public position: string = "left";
  public subMenu = SUBMENU;
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }

  setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
  };
}
