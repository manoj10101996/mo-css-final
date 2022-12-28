import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mo-select",
  templateUrl: "./mo-select.component.html"
})
export class MoSelectComponent implements OnInit {
  constructor() {}
  public codes: any;

  ngOnInit(): void {
    this.setTheme();
  }

  public setTheme = () => {
    this.codes = {
      basic: `<select class="mo-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`,
      large: `<select class="mo-select mo-select-large">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`,
      small: `<select class="mo-select mo-select-small">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`,
      rounded: `<select class="mo-select mo-select-rounded">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`,
      squared: `<select class="mo-select mo-select-squared">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`
    };
  };
}
