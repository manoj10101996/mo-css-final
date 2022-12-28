import { Component, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";

@Component({
  selector: "app-mo-radio",
  templateUrl: "./mo-radio.component.html"
})
export class MoRadioComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;
  public code = `<div class="mo-radio mo-radio-checked-color">
  <input type="radio" name="colors" id="mo-radio-color" checked>
  <label for="mo-radio-color">
    Radio
  </label>
</div>`;
  public colors: string[] = [];
  constructor() {
    for (const key in this.themes) {
      if (Object.prototype.hasOwnProperty.call(this.themes, key)) {
        this.colors.push(key);
      }
    }
  }

  ngOnInit(): void {}
}
