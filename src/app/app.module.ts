import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { HighlightModule, HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SetThemeService } from "./set-theme.service";
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
import { MoRadioComponent } from "./mo-radio/mo-radio.component";
import { MoTextareaComponent } from "./mo-textarea/mo-textarea.component";
import { MoScrollbarComponent } from "./mo-scrollbar/mo-scrollbar.component";
import { MoFormBasicComponent } from "./mo-form-basic/mo-form-basic.component";
import { MoPogressComponent } from "./mo-pogress/mo-pogress.component";
import { MoSelectComponent } from "./mo-select/mo-select.component";
import { MoRangeComponent } from "./mo-range/mo-range.component";
import { MoRatioComponent } from "./mo-ratio/mo-ratio.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./menu/menu";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoAlertComponent,
    MoBadgeComponent,
    MoBorderComponent,
    MoBreadcrumbComponent,
    MoCardComponent,
    MoButtonComponent,
    MoCheckboxComponent,
    MoInputComponent,
    MoListComponent,
    MoRadioComponent,
    MoPaddingComponent,
    MoMarginComponent,
    MoDisplayComponent,
    MoColorsComponent,
    MoButtonGroupComponent,
    MoDropdownComponent,
    MoTextareaComponent,
    MoScrollbarComponent,
    MoFormBasicComponent,
    MoPogressComponent,
    MoSelectComponent,
    MoRangeComponent,
    MoRatioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [
    SetThemeService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
          css: () => import("highlight.js/lib/languages/css"),
          xml: () => import("highlight.js/lib/languages/xml")
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
