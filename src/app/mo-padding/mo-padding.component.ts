import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mo-padding",
  templateUrl: "./mo-padding.component.html"
})
export class MoPaddingComponent implements OnInit {
  public index: number[] = [];

  constructor() {
    this.index = Array.from(Array(48).keys());
  }

  ngOnInit(): void {}
}
