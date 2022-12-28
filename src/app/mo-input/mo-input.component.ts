import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-input",
  templateUrl: "./mo-input.component.html"
})
export class MoInputComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;

  public colors: string[] = [];

  public codes: any;
  public color: string;
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    this.color = "danger";
    this.setTheme();
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }
  ngOnInit(): void {}

  public setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
    this.codes = {
      basic: `<div class="mo-input-box">
  <label for="input-basic">Input Basic</label>
  <input type="text" id="input-basic" placeholder="Enter text basic" class="mo-input">
</div>`,
      small:
        ` <div class="mo-input-box">
    <label for="input-basic">Input small</label>
    <input type="text" placeholder="Enter text ` +
        this.color +
        `" class="mo-input mo-input-small mo-input-bg-` +
        this.color +
        `">
  </div>
`,
      medium:
        `<div class="mo-input-box">
  <label for="input-basic">Input Medium (Default) </label>
  <input type="text" placeholder="Enter text ` +
        this.color +
        `" class="mo-input mo-input-bg-` +
        this.color +
        `">
</div>
`,
      large:
        `<div class="mo-input-box">
  <label for="input-basic">Input Large</label>
  <input type="text" placeholder="Enter text ` +
        this.color +
        `" class="mo-input mo-input-large mo-input-bg-` +
        this.color +
        `">
</div>
`,
      squared:
        ` <div class="mo-input-box">
  <label for="input-basic">Input Square</label>
  <input type="text" placeholder="Enter text ` +
        this.color +
        `" class="mo-input mo-input-squared mo-input-bg-` +
        this.color +
        `">
</div>`,
      rounded:
        ` <div class="mo-input-box">
  <label for="input-basic">Input Square</label>
  <input type="text" placeholder="Enter text ` +
        this.color +
        `" class="mo-input mo-input-rounded mo-input-bg-` +
        this.color +
        `">
</div>`
    };
  };
}
