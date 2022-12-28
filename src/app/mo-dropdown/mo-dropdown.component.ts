import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-dropdown",
  templateUrl: "./mo-dropdown.component.html"
})
export class MoDropdownComponent implements OnInit {
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
  ngOnInit(): void {}

  public setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
    this.codes = {
      basic: ` <div class="mo-dropdown mo-dropdown-toggle mb-16">
  <button class="mo-btn" type="button">
    mo-dropdown button
  </button>
  <ul class="mo-dropdown-list mo-list">
    <li>List Mo - 1</li>
    <li>List Mo - 2</li>
    <li>List Mo - 3</li>
    <li>List Mo - 4</li>
  </ul>
</div>
`,
      theme:
        `<div class="mo-dropdown mo-dropdown-toggle mb-16">
  <button class="mo-btn mo-btn-bg-` +
        this.color +
        `" type="button">
    mo-dropdown button
  </button>
  <ul class="mo-dropdown-list mo-list mo-list-bg-` +
        this.color +
        `">
    <li>List Mo - 1</li>
    <li>List Mo - 2</li>
    <li>List Mo - 3</li>
    <li>List Mo - 4</li>
  </ul>
</div>
`,
      left:
        `<div class="mo-dropdown mo-dropdown-left mo-dropdown-toggle">
  <button class="mo-btn mo-btn-bg-` +
        this.color +
        `" type="button">
    mo-dropdown button
  </button>
  <ul class="mo-dropdown-list mo-list mo-list-bg-` +
        this.color +
        `">
    <li>mo-dropdown button List Mo - 1</li>
    <li>mo-dropdown button List Mo - 2</li>
    <li>mo-dropdown button List Mo - 3</li>
    <li>mo-dropdown button List Mo - 4</li>
  </ul>
</div>`
    };
  };
}
