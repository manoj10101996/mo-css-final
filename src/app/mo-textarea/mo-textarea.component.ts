import { Component, Inject, OnInit } from "@angular/core";
import { THEME, THEMES } from "src/sources/THEME";
import { SetThemeService } from "../set-theme.service";

@Component({
  selector: "app-mo-textarea",
  templateUrl: "./mo-textarea.component.html"
})
export class MoTextareaComponent implements OnInit {
  public themes: { [key: string]: THEME } = THEMES;

  public codes: any;
  public color: string;
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
      basic: `<div class="mo-textarea-box">
  <label for="textArea-basic">TextArea Basic</label>
  <textarea name="textarea" class="mo-textarea" id="textarea" placeholder="Textarea - basic" rows="5"></textarea>
</div>
`,
      scroll: `<div class="mo-textarea-box">
  <label for="textArea-basic">TextArea Scroll</label>
  <textarea name="textarea" class="mo-textarea" id="textarea" placeholder="Textarea - basic" rows="5">
     ...
  </textarea>
</div>
`,
      resize: `<div class="mo-textarea-box">
  <label for="textArea-basic">TextArea Resize</label>
  <textarea name="textarea" class="mo-textarea mo-textarea-resize" placeholder="Textarea - basic" id="textarea"
    rows="5"></textarea>
</div>`,
      theme:
        `<div class="mo-textarea-box">
  <label for="textArea-basic">TextArea Theme</label>
  <textarea name="textarea" class="mo-textarea mo-textarea-bg-` +
        this.color +
        ` mo-textarea-scroll-` +
        this.color +
        `"
    placeholder="Textarea - ` +
        this.color +
        `" id="textarea" rows="5">
    ...
  </te.xtarea>
</div>`,
      scrollbar:
        `<div class="mo-textarea-box">
  <label for="textArea-basic">TextArea Scrollbar</label>
  <textarea name="textarea" class="mo-textarea mo-textarea-bg-` +
        this.color +
        ` mo-textarea-scroll-` +
        this.color +
        `"
    placeholder="Textarea - ` +
        this.color +
        `" id="textarea" rows="5">
    ...
  </textarea>
</div>
      `,
      rounded:
        `<div class="mo-textarea-box">
    <label for="textArea-basic">TextArea Square</label>
    <textarea name="textarea" class="mo-textarea mo-textarea-rounded mo-textarea-bg-` +
        this.color +
        `"
      placeholder="Textarea - Squared" id="textarea" rows="5"></textarea>
  </div>
      `
    };
  };
}
