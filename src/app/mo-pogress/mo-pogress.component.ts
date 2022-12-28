import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-pogress",
  templateUrl: "./mo-pogress.component.html"
})
export class MoPogressComponent implements OnInit {
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
      basic: `<div class="mo-progress-bar">
  <div class="mo-progress" style="width: 15%;"></div>
</div>`,
      theme:
        `<div class="mo-progress-bar">
  <div class="mo-progress mo-` +
        this.color +
        `" style="width: 25%"></div>
</div>`,
      diagonal:
        `<div class="mo-progress-bar ">
  <div class="mo-progress mo-` +
        this.color +
        ` mo-progress-` +
        this.color +
        `-diagonal" style="width: 35%"></div>
</div>`,
      "diagonal-v2":
        `<div class="mo-progress-bar ">
  <div class="mo-progress mo-` +
        this.color +
        ` mo-progress-` +
        this.color +
        `-diagonal-v2" style="width: 45%"></div>
</div>`,
      "diagonal-v3":
        `<div class="mo-progress-bar ">
  <div class="mo-progress mo-` +
        this.color +
        ` mo-progress-` +
        this.color +
        `-diagonal-v3" style="width: 55%"></div>
</div>`,
      "diagonal-v4":
        `<div class="mo-progress-bar ">
  <div class="mo-progress mo-` +
        this.color +
        ` mo-progress-` +
        this.color +
        `-diagonal-v4" style="width: 65%"></div>
</div>`,
      "diagonal-v5":
        `<div class="mo-progress-bar ">
  <div class="mo-progress mo-` +
        this.color +
        ` mo-progress-` +
        this.color +
        `-diagonal-v5" style="width: 75%"></div>
</div>`
    };
  };
}
