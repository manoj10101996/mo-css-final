import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SetThemeService {
  setTheme = (color: string = "#EB144C") => {
    let classes: HTMLCollectionOf<Element> = document.getElementsByClassName(
      "common-color"
    );
    for (let index = 0; index < classes.length; index++) {
      const element: any = classes[index];
      element.style.fill = color;
    }
    // let lEelement = document.getElementById('mo-canvas-left-trail') as HTMLDivElement;
    // let rElement = document.getElementById('mo-canvas-right-trail') as HTMLDivElement;
    // lEelement.style.backgroundColor = 'rgba(' + rgbColor[0] + ',' + rgbColor[1] + ',' + rgbColor[2] + ', 0.05)';
    // rElement.style.backgroundColor = 'rgba(' + rgbColor[0] + ',' + rgbColor[1] + ',' + rgbColor[2] + ', 0.05)';
    let rgbColor = this.hexToRgb(color) || [0, 0, 0];
    document.body.style.backgroundColor =
      "rgba(" + rgbColor[0] + "," + rgbColor[1] + "," + rgbColor[2] + ", 0.05)";
  };

  public hexToRgb(hex: string) {
    const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) return normal.slice(1).map((e) => parseInt(e, 16));

    const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) return shorthand.slice(1).map((e) => 0x11 * parseInt(e, 16));

    return null;
  }
}
