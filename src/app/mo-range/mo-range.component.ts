import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-range",
  templateUrl: "./mo-range.component.html"
})
export class MoRangeComponent implements OnInit {
  public colors: string[] = [];
  public themes: { [key: string]: THEME } = THEMES;

  public color: string = "danger";
  public code: any;

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
    this.code = {
      basic:
        `<div class="mo-range-box">
  <label for="mo-range">Basic Range Bar - ` +
        this.color +
        `</label>
  <input type="range" class="mo-range mo-` +
        this.color +
        `" id="mo-range">
</div>`,
      outline:
        `<div class="mo-range-box">
  <label for="mo-range">Basic range bar with simple range track - ` +
        this.color +
        `</label>
  <input type="range" class="mo-range mo-range-` +
        this.color +
        `" id="mo-range">
</div>
`,
      squared:
        `<div class="mo-range-box mo-range-squared">
  <label for="mo-range">Basic range bar with squared range thumb - ` +
        this.color +
        `</label>
  <input type="range" class="mo-range mo-range-` +
        this.color +
        `" id="mo-range">
</div>
`,
      "rotate-square":
        `<div class="mo-range-box mo-range-triangle">
  <label for="mo-range">Basic range bar with square range thumb. (rotated) - ` +
        this.color +
        `</label>
  <input type="range" class="mo-range mo-range-` +
        this.color +
        `" id="mo-range">
</div>
`,
      "rotate-edge":
        `<div class="mo-range-box mo-range-triangle-pre">
  <label for="mo-range">Basic range with square range thumb & rounded edges. (rotated) - ` +
        this.color +
        `</label>
  <input type="range" class="mo-range mo-range-` +
        this.color +
        `" id="mo-range">
</div>
`
    };
  }

  ngOnInit(): void {}
}
