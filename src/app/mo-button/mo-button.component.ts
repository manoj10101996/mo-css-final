import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-button",
  templateUrl: "./mo-button.component.html"
})
export class MoButtonComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public codes: any;
  public colors: string[] = [];
  public color: string;
  public position: string = "left";

  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
    this.color = "danger";
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
    this.setTheme();
  }

  ngOnInit(): void {}

  public setTheme = () => {
    this.themeService.setTheme(this.themes[this.color].color);
    this.codes = {
      button:
        `<button class="mo-btn mo-btn-bg-` +
        this.color +
        ` mo-btn-small">
  Button
</button>`,
      "btn-outline":
        `<button class="mo-btn mo-btn-outline-bg-` +
        this.color +
        `">
  Button
</button>`,
      "btn-invite":
        `<button class="mo-btn mo-btn-invite-` +
        this.color +
        "-" +
        this.position +
        ` mo-btn-squared">
  Button
</button>`,
      "btn-filled":
        `<button class="mo-btn mo-btn-fill-` +
        this.color +
        ` mo-btn-squared">
  Button
</button>`,
      "btn-default":
        `<button class="mo-btn mo-btn-bg-` +
        this.color +
        `">
  Button
</button>`,
      "btn-large":
        `<button class="mo-btn mo-btn-bg-` +
        this.color +
        ` mo-btn-large">
  Button
</button>`,
      "btn-squared":
        `<button class="mo-btn mo-btn-bg-` +
        this.color +
        ` mo-btn-squared">
  Button
</button>`,
      "btn-rounded":
        `<button class="mo-btn mo-btn-bg-` +
        this.color +
        ` mo-btn-rounded">
  Button
</button>`
    };
  };
}
