import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mo-margin",
  templateUrl: "./mo-margin.component.html"
})
export class MoMarginComponent implements OnInit {
  public index: number[] = [];

  constructor() {
    this.index = Array.from(Array(48).keys());
  }

  ngOnInit(): void {}
}
