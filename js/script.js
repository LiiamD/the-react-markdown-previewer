import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0";
import { marked } from "https://esm.sh/marked";

function MarkdownPreviewer() {
  const [input, setInput] = useState(`# Markdown Previewer 

## Learning React.js 
[Check to know more about **learning React** here](https://www.freecodecamp.org/news/install-react-with-create-react-app/) 

Here the \`code\` below : 

\`\`\`
const code = () => {let x = 5;};
\`\`\`

- JavaScript 
- Front-end frameworks 
> Strive not to be a success, but rather to be of value

![coding-image](https://image.noelshack.com/fichiers/2025/16/5/1744981631-screenshot-17.png)`);

  return React.createElement(
    "div",
    null,
    React.createElement("div", { id: "div-editor" }, "Editor"),
    React.createElement("textarea", {
      id: "editor",
      value: input,
      onChange: (e) => setInput(e.target.value),
      cols: 90,
      rows: 15,
    }),
    React.createElement("div", { id: "div-preview" }, "Previewer"),
    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: { __html: marked(input, { breaks: true }) },
    })
  );
}

const root = createRoot(document.getElementById("app"));
root.render(React.createElement(MarkdownPreviewer));