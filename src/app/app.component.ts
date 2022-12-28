import { Component, Inject } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SUBMENU } from "src/sources/THEME";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-lab";
  public currentPath: { name: string; key: string; path: string } = {
    name: "Badge",
    key: "badge",
    path: "/badge"
  };
  public subMenu = SUBMENU;

  public pathMenu = [
    {
      name: "Components",
      collapse: false,
      menu: [
        { name: "Alert", key: "alert", path: "/alert" },
        { name: "Badge", key: "badge", path: "/badge" },
        { name: "Breadcrumb", key: "breadcrumb", path: "/breadcrumb" },
        { name: "Button", key: "btn", path: "/btn" },
        { name: "Button Group", key: "btn-group", path: "/btn-group" },
        { name: "Card", key: "card", path: "/card" },
        { name: "List", key: "list", path: "/list" },
        { name: "Dropdown", key: "dropdown", path: "/dropdown" }
      ]
    },
    {
      name: "Forms & Inputs",
      collapse: false,
      menu: [
        { name: "Input", key: "input", path: "/input" },
        { name: "Textarea", key: "textarea", path: "/textarea" },
        { name: "Checkbox", key: "checkbox", path: "/checkbox" },
        { name: "Radio", key: "radio", path: "/radio" },
        { name: "Range", key: "range", path: "/range" },
        { name: "Select", key: "select", path: "/select" },
        { name: "Progress", key: "progress", path: "/progress" }
      ]
    },
    {
      name: "Essentials",
      collapse: false,
      menu: [
        { name: "Colors", key: "colors", path: "/colors" },
        { name: "Margin", key: "margin", path: "/margin" },
        { name: "Padding", key: "padding", path: "/padding" },
        { name: "Border & Radius", key: "border", path: "/border" },
        { name: "Scrollbar", key: "scrollbar", path: "/scrollbar" },
        { name: "Ratio", key: "ratio", path: "/ratio" },
        { name: "Display", key: "display", path: "/display" }
      ]
    }
  ];
  constructor(@Inject(Router) private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.currentPath = this.pathMenu
          .map((path) =>
            path.menu.filter((menu) => menu.path === window.location.pathname)
          )
          .filter((data) => data.length > 0)[0][0];
      }
    });
  }

  public intoView = (elementId: string = "") => {
    const element = document.getElementById(elementId) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };
}
