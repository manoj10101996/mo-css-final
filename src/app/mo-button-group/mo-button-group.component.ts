import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-button-group",
  templateUrl: "./mo-button-group.component.html"
})
export class MoButtonGroupComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public codes: any;
  public color: string;
  public colors: string[] = [];
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    this.color = "danger";
    this.setTheme();
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }

  public setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
    this.codes = {
      basic: `<div class="mo-btn-group">
  <button type="button" class="mo-btn">Left</button>
  <button type="button" class="mo-btn">Middle</button>
  <button type="button" class="mo-btn">Right</button>
</div>
`,
      small: `<div class="mo-btn-group">
  <button type="button" class="mo-btn mo-btn-small">Left</button>
  <button type="button" class="mo-btn mo-btn-small">Middle</button>
  <button type="button" class="mo-btn mo-btn-small">Right</button>
</div>
`,
      large: `<div class="mo-btn-group">
  <button type="button" class="mo-btn mo-btn-large">Left</button>
  <button type="button" class="mo-btn mo-btn-large">Middle</button>
  <button type="button" class="mo-btn mo-btn-large">Right</button>
</div>
`,
      mixed: `<div class="mo-btn-group">
  <button type="button" class="mo-btn mo-btn-bg-danger">Left</button>
  <button type="button" class="mo-btn">Middle</button>
  <button type="button" class="mo-btn mo-btn-bg-info">Right</button>
</div>
`,
      theme:
        `<div class="mo-btn-group">
  <button type="button" class="mo-btn mo-btn-bg-` +
        this.color +
        `">Left</button>
  <button type="button" class="mo-btn mo-btn-bg-` +
        this.color +
        `">Middle</button>
  <button type="button" class="mo-btn mo-btn-bg-` +
        this.color +
        `">Right</button>
</div>
`
    };
  };

  ngOnInit(): void {}
}
