# Mermaid Builder and Viewer
This is a simple Astro web application that provides the ability to store and show Mermaid diagrams in a central web page.

## Purpose
The purpose of this project is not to be a standalone web app, that will allow you to edit and view mermaid files from the UI, but rather a collection point for those diagrams, meaning you will have to rebuild the site every time you add a new diagram. That being said, it is fast and efficient way to store and view Mermaid Diagrams

## Build
First clone this repository using: 

To run a development server, run (from the project root):
```
npm run dev
```
To build a production website, run (from the project root):
```
npm run build
```

## Customization
All of the CSS files are kept in the style folder, and the Mermaid and project configurations are defined in `constants.ts`.

# Usage

### Adding Diagrams
Adding a diagram requires a few steps:
1. Create a new file in `diagrams/` and populate it with the following code. 
``` astro
<div class="diagram">
    <h2><!-- Title --></h2>
        <!-- Description -->
        <pre class="mermaid">
            <!-- Mermaid Diagram -->
        </pre>
</div>
```
2. Either create a new astro collection file, or use one of the current files and the import to the top of the file.
``` typescript
import First from '../diagrams/example/first.astro';
```
3. Call the content from the import, wherever you would like it.
``` astro
<div>
    <First />
</div>
```
### Adding New Diagram Collections
To add a new diagram page, (A place to collect all diagrams related to one subject), use this procedure.
> Note: This should be handled by a script in the future
>
1. Add a new floder to the `diagrams` folder.
2. Add a new page in pages with the name of your collection/page followed by .astro. Populate it with the following content:
``` astro
---
import Navbar from '../components/navbar.astro';

import '../style/main.css';
---

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content={Astro.generator} />
        <title>Examples</title>
    </head>
    <body>
        <Navbar />
        <div class="page">
            <h1>Example</h1>
            <div class="diagram-section">
			
			</div>
        </div>
        <script type="module" src='./scripts/initMermaid.ts'></script>
    </body>
</html>
```
3. Change the `<title>` and the `<h1>` tag to the page/collection name you would like to use.
4. Add a navbar entry to `navbar.astro` by adding the following code block. (Replacing example with your preferred name.)
```astro
<div class="nav-content">
    <h3><a href="/example">Example</a></h3>
</div>
```
Now you can proceed with [adding diagrams](./docs/addNewDiagram.md).

## Tech Stack
This project is built with [Astro](https://astro.build/) and exists to serve [Mermaid JS](https://mermaid.js.org/) files. Other than that, everything else is pure HTML, CSS and TypeScript.
