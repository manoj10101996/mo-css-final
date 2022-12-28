import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-list",
  templateUrl: "./mo-list.component.html"
})
export class MoListComponent implements OnInit {
  public codes: any;
  public color: string;
  public themes: { [key: string]: THEME } = THEMES;
  public listTypes: string[] = [
    "disc",
    "circle",
    "square",
    "decimal",
    "cjk-decimal",
    "decimal-leading-zero",
    "lower-roman",
    "upper-roman",
    "lower-greek",
    "lower-alpha",
    "upper-alpha",
    "arabic-indic",
    "armenian",
    "bengali",
    "cambodian",
    "cjk-earthly-branch",
    "cjk-heavenly-stem",
    "cjk-ideographic",
    "devanagari",
    "ethiopic-numeric",
    "georgian",
    "gujarati",
    "gurmukhi",
    "hebrew",
    "hiragana",
    "hiragana-iroha",
    "japanese-formal",
    "japanese-informal",
    "kannada",
    "katakana",
    "katakana-iroha",
    "khmer",
    "korean-hangul-formal",
    "korean-hanja-formal",
    "korean-hanja-informal",
    "lao",
    "lower-armenian",
    "malayalam",
    "mongolian",
    "myanmar",
    "oriya",
    "persian",
    "simp-chinese-formal",
    "simp-chinese-informal",
    "tamil",
    "telugu",
    "thai",
    "tibetan",
    "trad-chinese-formal",
    "trad-chinese-informal",
    "upper-armenian",
    "disclosure-open",
    "disclosure-closed",
    "-moz-ethiopic-halehame",
    "-moz-ethiopic-halehame-am",
    "ethiopic-halehame-ti-er",
    "ethiopic-halehame-ti-et",
    "hangul",
    "hangul-consonant",
    "hangul-consonant",
    "urdu"
  ];
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
      basic: `<ul class="mo-list mo-list-bordered">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>`,
      filled:
        `<ul class="mo-list mo-list-hover-` +
        this.color +
        `">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>`,
      invite:
        `<ul class="mo-list mo-list-invite-` +
        this.color +
        `-left">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>`,
      noBorder: `<ul class="mo-list">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>`,
      rounded:
        `<ul class="mo-list mo-list-bg-` +
        this.color +
        ` mo-list-rounded mo-list-circle">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>`,
      square:
        `<ul class="mo-list mo-list-bg-` +
        this.color +
        ` mo-list-rounded mo-list-square">
  <li>List Mo - 1</li>
  <li>List Mo - 2</li>
  <li>List Mo - 3</li>
  <li>List Mo - 4</li>
</ul>
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
}
