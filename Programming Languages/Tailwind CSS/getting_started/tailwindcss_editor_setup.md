---
id: tailwindcss-editor-setup
title: tailwindcss-editor-setup
sidebar_label: tailwindcss-editor-setup
sidebar_position: 3
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

# Editor Setup - Tailwind CSS

Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.

## Syntax Support

Tailwind CSS uses custom CSS at-rules like `@tailwind`, `@apply`, and `@config`, which may trigger warnings in some editors. Install a PostCSS language support plugin for your editor to avoid these issues.

For VS Code, use the official [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) plugin, which includes:

- Autocomplete
- Linting
- Hover Previews
- Syntax Highlighting

## IntelliSense for VS Code

Enhances the Tailwind development experience with features like autocomplete, syntax highlighting, and linting.

Check out the project [on GitHub](https://github.com/tailwindlabs/tailwindcss-intellisense) or [add it to Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Automatic Class Sorting with Prettier

Use the [official Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to automatically sort your classes following the recommended class order.

```html
<!-- Before -->
<button
  class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
  ...
</button>

<!-- After -->
<button
  class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
  ...
</button>
```

## JetBrains IDEs

JetBrains IDEs like WebStorm and PhpStorm include support for intelligent Tailwind CSS completions in HTML and `@apply`.

[Learn more about Tailwind CSS support in JetBrains IDEs](https://www.jetbrains.com).

For more detailed instructions, visit the [Tailwind CSS Editor Setup Guide](https://tailwindcss.com/docs/editor-setup).
