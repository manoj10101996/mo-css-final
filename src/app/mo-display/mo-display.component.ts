import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mo-display",
  templateUrl: "./mo-display.component.html"
})
export class MoDisplayComponent implements OnInit {
  public displayTypes: string[] = [
    "block",
    "inline",
    "inline-block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
    "flow-root",
    "none",
    "contents",
    "block",
    "block-root",
    "table",
    "table-row",
    "list-item",
    "inherit",
    "initial",
    "revert",
    "revert-layer",
    "unset"
  ];
  constructor() {}

  ngOnInit(): void {}
}
