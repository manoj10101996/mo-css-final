import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-checkbox",
  templateUrl: "./mo-checkbox.component.html"
})
export class MoCheckboxComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public color: string = "danger";
  public code = "";

  public colors: string[] = [];
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
    this.setTheme();
  }

  public setTheme() {
    this.themeService.setTheme(this.themes[this.color].color);
    this.code =
      `<div class="mo-checkbox mo-checkbox-checked-` +
      this.color +
      `">
  <input type="checkbox" id="mo-checkbox-color" checked>
  <label for="mo-checkbox-color">
    Checkbox
  </label>
</div>`;
  }

  ngOnInit(): void {}
}
