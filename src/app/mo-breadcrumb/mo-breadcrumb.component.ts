import { Component, Inject, OnInit } from "@angular/core";
import { THEMES, THEME } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-breadcrumb",
  templateUrl: "./mo-breadcrumb.component.html"
})
export class MoBreadcrumbComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public color: string = "danger";
  public codes: any;
  public colors: string[] = [];
  constructor(@Inject(SetThemeService) private themeService: SetThemeService) {
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
      basic: `<nav>
  <ol class="mo-breadcrumb mo-border mo-border-light">
    <li class="mo-breadcrumb-item"><a href="#">Home</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item mo-breadcrumb-active">Data</li>
  </ol>
</nav>
`,
      dash: `<nav>
  <ol class="mo-breadcrumb mo-breadcrumb-dash">
    <li class="mo-breadcrumb-item"><a href="#">Home</a></li>
    <li class="mo-breadcrumb-item mo-breadcrumb-active"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item">Data</li>
    <li class="mo-breadcrumb-item">Contacts</li>
    <li class="mo-breadcrumb-item">Mention</li>
    <li class="mo-breadcrumb-item">Category</li>
  </ol>
</nav>
`,
      tilde: `<nav>
  <ol class="mo-breadcrumb mo-breadcrumb-tilde">
    <li class="mo-breadcrumb-item"><a href="#">Visit</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Back</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item  mo-breadcrumb-active">Data</li>
  </ol>
</nav>
`,
      border: `<nav>
  <ol class="mo-breadcrumb mo-breadcrumb-bordered">
    <li class="mo-breadcrumb-item"><a href="#">Home</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Books</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Read</a></li>
    <li class="mo-breadcrumb-item mo-breadcrumb-active">Data</li>
  </ol>
</nav>
`,
      rounded: `<nav>
  <ol class="mo-breadcrumb mo-breadcrumb-border-rounded">
    <li class="mo-breadcrumb-item"><a href="#">Home</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item mo-breadcrumb-active">Data</li>
  </ol>
</nav>
`,
      theme:
        `<nav>
  <ol class="mo-breadcrumb mo-breadcrumb-border-rounded mo-breadcrumb-bg-` +
        this.color +
        `">
    <li class="mo-breadcrumb-item"><a href="#">Home</a></li>
    <li class="mo-breadcrumb-item"><a href="#">Library</a></li>
    <li class="mo-breadcrumb-item mo-breadcrumb-active">Data</li>
  </ol>
</nav>
`
    };
  };
}
