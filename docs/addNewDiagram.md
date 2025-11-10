---
title: Add New Diagrams
---
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
