import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  templateUrl: "./mo-card.component.html"
})
export class MoCardComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public codes: any;
  public colors: string[] = [];
  public color: string;
  public position: string = "left";
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
      basic: `<div class="mo-card border" [style.display]="'inline-block'" style="width:20%;">
  <div class="mo-card-header">
    Mo Card Header
  </div>
  <div class="mo-card-body">
    Mo-card - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
  </div>
  <div class="mo-card-footer">
    Mo Card Footer
  </div>
</div>
`,
      invite:
        `<div class="mo-card mo-card-invite-` +
        this.color +
        `-` +
        this.position +
        `" [style.display]="'inline-block'" style="width:20%;">
  <div class="mo-card-header">
    Mo Card Header
  </div>
  <div class="mo-card-body">
    Mo-card - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
  </div>
  <div class="mo-card-footer">
    Mo Card Footer
  </div>
</div>
`,
      "high-light":
        `<div class="mo-card mo-card-header-` +
        this.color +
        `" [style.display]="'inline-block'" style="width:20%;">
  <div class="mo-card-header">
    Mo Card Header
  </div>
  <div class="mo-card-body">
    Mo-card - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
  </div>
  <div class="mo-card-footer">
    Mo Card Footer
  </div>
</div>`,
      square: `<div class="mo-card mo-card-squared" [style.display]="'inline-block'" style="width:20%;">
  <div class="mo-card-header">
    Mo Card Header
  </div>
  <div class="mo-card-body">
    Mo-card - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five centuries,
  </div>
  <div class="mo-card-footer">
    Mo Card Footer
  </div>
</div>
`,
      theme:
        `<div class="mo-card mo-card-bg-` +
        this.color +
        `" [style.display]="'inline-block'" style="width:20%;">
  <div class="mo-card-header">
    Mo Card Header
  </div>
  <div class="mo-card-body">
    Mo-card - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
  </div>
  <div class="mo-card-footer">
    Mo Card Footer
  </div>
</div>`
    };
  };

  ngOnInit(): void {}
}
