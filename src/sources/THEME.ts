export interface THEME {
  color: string;
  text: string;
}

export interface SUB {
  name: string;
  id: string;
  menu: Array<{
    name: string;
    id: string;
  }>;
}

export const THEMES = {
  danger: {
    color: "#eb144c",
    text: "#fff"
  },
  warning: {
    color: "#fcb900",
    text: "#fff"
  },
  success: {
    color: "#00d084",
    text: "#fff"
  },
  info: {
    color: "#0693e3",
    text: "#fff"
  },
  primary: {
    color: "#9900ef",
    text: "#fff"
  },
  light: {
    color: "#abb8c3",
    text: "#000"
  },
  dark: {
    color: "#000",
    text: "#fff"
  },
  core: {
    color: "#0d6efd",
    text: "#fff"
  }
};

export const SUBMENU: { [key: string]: SUB } = {
  alert: {
    name: "Alert",
    id: "alert",
    menu: [
      {
        id: "alert-basic",
        name: "Basic Alert"
      },
      {
        id: "alert-fill",
        name: "Filled Background"
      },
      {
        id: "alert-invite",
        name: "Invite Mode"
      },
      {
        id: "alert-theme-filled",
        name: "Filled Theme"
      },
      {
        id: "alert-outline",
        name: "Outline Filled Border"
      }
    ]
  },
  badge: {
    name: "Badge",
    id: "badge",
    menu: [
      {
        id: "badge-basic",
        name: "Basic Badge"
      },
      {
        id: "badge-invite-block",
        name: "Invite"
      },
      {
        id: "badge-filled-theme",
        name: "Filled Theme"
      },
      {
        id: "badge-outline",
        name: "Outline"
      },
      {
        id: "badge-fill",
        name: "Filled background"
      },
      {
        id: "badge-after-text",
        name: "Custom Text"
      },
      {
        id: "badge-rounded",
        name: "Rounded"
      }
    ]
  },
  breadcrumb: {
    name: "Breadcrumb",
    id: "breadcrumb",
    menu: [
      {
        id: "breadcrumb-basic",
        name: "Basic Breadcrumb"
      },
      {
        id: "breadcrumb-fill",
        name: "Filled Background"
      },
      {
        id: "breadcrumb-dash",
        name: "Dash Splitted"
      },
      {
        id: "breadcrumb-tilde",
        name: "Tilde Splitted"
      },
      {
        id: "breadcrumb-border-squared",
        name: "Squared"
      },
      {
        id: "breadcrumb-border-rounded",
        name: "Rounded"
      }
    ]
  },
  btn: {
    name: "Button",
    id: "btn",
    menu: [
      {
        id: "btn-basic",
        name: "Basic Button"
      },
      {
        id: "btn-outline",
        name: "Outline Filled Border"
      },
      {
        id: "btn-invite",
        name: "Invite Mode"
      },
      {
        id: "btn-fill",
        name: "Filled Background"
      },
      {
        id: "btn-size",
        name: "Different Sized buttons"
      },
      {
        id: "btn-edge",
        name: "Rouned / Squared Edge"
      }
    ]
  },
  "btn-group": {
    name: "Button Group",
    id: "btn-group",
    menu: [
      {
        id: "btn-group-basic",
        name: "Basic Button"
      },
      {
        id: "btn-group-small",
        name: "Small Buttons"
      },
      {
        id: "btn-group-large",
        name: "Large Buttons"
      },
      {
        id: "btn-group-mixed",
        name: "Different Background Buttons"
      },
      {
        id: "btn-group-theme",
        name: "Filled Background"
      }
    ]
  },
  card: {
    name: "Card",
    id: "card",
    menu: [
      {
        id: "card-basic",
        name: "Basic Card"
      },
      {
        id: "card-invite",
        name: "Invite Card"
      },
      {
        id: "card-highlight",
        name: "Hightlighted Header"
      },
      {
        id: "card-square",
        name: "Different Background Buttons"
      },
      {
        id: "card-filled",
        name: "Filled Background"
      }
    ]
  },
  list: {
    name: "List",
    id: "list",
    menu: [
      {
        id: "list-basic",
        name: "Basic List"
      },
      {
        id: "list-filled",
        name: "Filled List"
      },
      {
        id: "list-hover",
        name: "Hover Effect"
      },
      {
        id: "list-invite",
        name: "Invite Mode"
      },
      {
        id: "list-no-outline",
        name: "Without Border"
      },
      {
        id: "list-rounded",
        name: "Rounded Edges"
      },
      {
        id: "list-fill-rounded",
        name: "Rounded Edges (Filled)"
      },
      {
        id: "list-fill-squared",
        name: "Squared Edges"
      },
      {
        id: "list-types",
        name: "More list Types"
      }
    ]
  },
  dropdown: {
    name: "Dropdown",
    id: "dropdown",
    menu: [
      {
        id: "dropdown-basic",
        name: "Basic dropdown"
      },
      {
        id: "dropdown-theme",
        name: "Filled Background"
      },
      {
        id: "dropdown-left",
        name: "Left aligned"
      }
    ]
  },
  input: {
    name: "Input",
    id: "input",
    menu: [
      {
        id: "input-basic",
        name: "Basic Input box"
      },
      {
        id: "input-small",
        name: "Small Input box"
      },
      {
        id: "input-medium",
        name: "Medium Input box"
      },
      {
        id: "input-large",
        name: "Large Input box"
      },
      {
        id: "input-squared",
        name: "Squared Input box"
      },
      {
        id: "input-rounded",
        name: "Rounded Input box"
      }
    ]
  },
  textarea: {
    name: "Textarea",
    id: "textarea",
    menu: [
      {
        id: "textarea-basic",
        name: "Basic Textarea box"
      },
      {
        id: "textarea-scroll",
        name: "Scrollbar"
      },
      {
        id: "textarea-resize",
        name: "Resizeable"
      },
      {
        id: "textarea-theme",
        name: "Filled Theme"
      },
      {
        id: "textarea-scrollbar",
        name: "Themed Scrollbar"
      },
      {
        id: "textarea-rounded",
        name: "Rounded Textarea"
      }
    ]
  },
  checkbox: {
    name: "Checkbox",
    id: "checkbox",
    menu: [
      {
        id: "checkbox-basic",
        name: "Basic Checkbox"
      }
    ]
  },
  radio: {
    name: "Radio",
    id: "rddio",
    menu: [
      {
        id: "radio-basic",
        name: "Basic Radio"
      }
    ]
  },
  range: {
    name: "Range Bar",
    id: "range",
    menu: [
      {
        id: "range-basic",
        name: "Basic Range Bar"
      },
      {
        id: "range-track",
        name: "Simple range track"
      },
      {
        id: "range-square",
        name: "Squared edges"
      },
      {
        id: "range-basic-square-rotate",
        name: "Squared edges (rotated)"
      },
      {
        id: "range-basic-square-edges",
        name: "Squared rounded edges ."
      }
    ]
  },
  select: {
    name: "Select Dropdown",
    id: "select",
    menu: [
      {
        id: "select-basic",
        name: "Basic Select dropdown"
      },
      {
        id: "select-large",
        name: "Large in Size"
      },
      {
        id: "select-small",
        name: "Small in Size"
      },
      {
        id: "select-rounded",
        name: "Rounded edges"
      },
      {
        id: "select-squared",
        name: "Sqaured edges"
      }
    ]
  },
  progress: {
    name: "Progress Bar",
    id: "progress",
    menu: [
      {
        id: "progress-basic",
        name: "Basic Progress Bar"
      },
      {
        id: "progress-theme",
        name: "Filled Theme"
      },
      {
        id: "progress-rtol",
        name: "Right to Left lines"
      },
      {
        id: "progress-ltor",
        name: "Left to right lines"
      },
      {
        id: "progress-vlines",
        name: "Vertical lines"
      },
      {
        id: "progress-hlines",
        name: "Horizontal lines"
      },
      {
        id: "progress-lines",
        name: "Slight lines"
      }
    ]
  },

  colors: {
    name: "Colors",
    id: "colors",
    menu: [
      {
        id: "colors-theme",
        name: "Themes"
      },
      {
        id: "colors-background",
        name: "Background"
      },
      {
        id: "colors-text",
        name: "Text color"
      }
    ]
  },
  margin: {
    name: "Margin",
    id: "margin",
    menu: []
  },
  padding: {
    name: "Padding",
    id: "padding",
    menu: []
  },
  border: {
    name: "Border & Radius",
    id: "border",
    menu: [
      {
        id: "border-basic",
        name: "Basic Border"
      },
      {
        id: "border-none",
        name: "Border None Property"
      },
      {
        id: "border-color",
        name: "Basic Border Themed"
      },
      {
        id: "border-radius",
        name: "Border radius"
      }
    ]
  },
  scrollbar: {
    name: "Scroll Bar",
    id: "scrollbar",
    menu: [
      {
        id: "basic",
        name: "Basic Scroll Bar"
      },
      {
        id: "wavy",
        name: "Wavy"
      },
      {
        id: "rhombus",
        name: "Rhombus"
      },
      {
        id: "zigzag",
        name: "Zigzag"
      },
      {
        id: "zigzag-3d",
        name: "Zigzag - 3D"
      },
      {
        id: "diagonal",
        name: "Diagonal"
      },
      {
        id: "diagonal-v2",
        name: "Diagonal-v2"
      },
      {
        id: "diagonal-v3",
        name: "Diagonal-v3"
      },
      {
        id: "paper",
        name: "Paper"
      },
      {
        id: "isometric",
        name: "Isometric"
      }
    ]
  },
  ratio: {
    name: "Ratio & Opacity",
    id: "ratio",
    menu: [
      {
        id: "ratio-basic",
        name: "Ratio"
      },
      {
        id: "opacity-basic",
        name: "Opacity"
      }
    ]
  },
  display: {
    name: "Display",
    id: "display",
    menu: []
  }
};
