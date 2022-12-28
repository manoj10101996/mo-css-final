import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu";
import { MoAlertComponent } from "./mo-alert/mo-alert.component";
import { MoBadgeComponent } from "./mo-badge/mo-badge.component";
import { MoBorderComponent } from "./mo-border/mo-border.component";
import { MoBreadcrumbComponent } from "./mo-breadcrumb/mo-breadcrumb.component";
import { MoButtonGroupComponent } from "./mo-button-group/mo-button-group.component";
import { MoButtonComponent } from "./mo-button/mo-button.component";
import { MoCardComponent } from "./mo-card/mo-card.component";
import { MoCheckboxComponent } from "./mo-checkbox/mo-checkbox.component";
import { MoColorsComponent } from "./mo-colors/mo-colors.component";
import { MoDisplayComponent } from "./mo-display/mo-display.component";
import { MoDropdownComponent } from "./mo-dropdown/mo-dropdown.component";
import { MoInputComponent } from "./mo-input/mo-input.component";
import { MoListComponent } from "./mo-list/mo-list.component";
import { MoMarginComponent } from "./mo-margin/mo-margin.component";
import { MoPaddingComponent } from "./mo-padding/mo-padding.component";
import { MoPogressComponent } from "./mo-pogress/mo-pogress.component";
import { MoRadioComponent } from "./mo-radio/mo-radio.component";
import { MoRangeComponent } from "./mo-range/mo-range.component";
import { MoRatioComponent } from "./mo-ratio/mo-ratio.component";
import { MoScrollbarComponent } from "./mo-scrollbar/mo-scrollbar.component";
import { MoSelectComponent } from "./mo-select/mo-select.component";
import { MoTextareaComponent } from "./mo-textarea/mo-textarea.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "alert"
  },
  {
    path: "home",
    component: MenuComponent
  },
  {
    path: "alert",
    component: MoAlertComponent
  },
  {
    path: "badge",
    component: MoBadgeComponent
  },
  {
    path: "border",
    component: MoBorderComponent
  },
  {
    path: "breadcrumb",
    component: MoBreadcrumbComponent
  },
  {
    path: "card",
    component: MoCardComponent
  },
  {
    path: "btn",
    component: MoButtonComponent
  },
  {
    path: "btn-group",
    component: MoButtonGroupComponent
  },
  {
    path: "checkbox",
    component: MoCheckboxComponent
  },
  {
    path: "dropdown",
    component: MoDropdownComponent
  },
  {
    path: "input",
    component: MoInputComponent
  },
  {
    path: "list",
    component: MoListComponent
  },
  {
    path: "radio",
    component: MoRadioComponent
  },
  {
    path: "padding",
    component: MoPaddingComponent
  },
  {
    path: "progress",
    component: MoPogressComponent
  },
  {
    path: "margin",
    component: MoMarginComponent
  },
  {
    path: "display",
    component: MoDisplayComponent
  },
  {
    path: "select",
    component: MoSelectComponent
  },
  {
    path: "range",
    component: MoRangeComponent
  },
  {
    path: "ratio",
    component: MoRatioComponent
  },
  {
    path: "scrollbar",
    component: MoScrollbarComponent
  },
  {
    path: "textarea",
    component: MoTextareaComponent
  },
  {
    path: "colors",
    component: MoColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
