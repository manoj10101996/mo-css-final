import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-scrollbar",
  templateUrl: "./mo-scrollbar.component.html"
})
export class MoScrollbarComponent implements OnInit {
  public scrollModes: string[] = [
    "basic",
    "wavy",
    "rhombus",
    "zigzag",
    "zigzag-3d",
    "diagonal",
    "diagonal-v2",
    "diagonal-v3",
    "paper",
    "isometric"
  ];
  public color: string = "danger";
  public themes: { [key: string]: THEME } = THEMES;

  public colors: string[] = [];
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }
  ngOnInit(): void {}

  public setTheme() {
    this.themeService.setTheme(this.themes[this.color].color);
  }
}
