---
title: Add New Section
---
To add a new diagram page, (A place to collect all diagrams related to one subject), use this procedure.
> Note: This should be handled by a script in the future
>
1. Add a new folder to the `diagrams` folder.
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
Now you can proceed with <a href="#add-new-diagrams">adding new diagrams</a>.
