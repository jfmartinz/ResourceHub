---
id: getstart-tailwind
title: Getting Started with Tailwind CSS
sidebar_label: Getting Started
sidebar_position: 2
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

In this guide, we will walk through the steps required to get started with Tailwind CSS, from installation to basic usage.

# Installation - Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Follow these steps to install Tailwind CSS using the Tailwind CLI tool.

## Steps to Install Tailwind CSS

### 1. Install Tailwind CSS

Install `tailwindcss` via npm and create a configuration file.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Configure Template Paths

Add the paths to all your template files in `tailwind.config.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. Add Tailwind Directives to CSS

Include the `@tailwind` directives in your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Start the Tailwind CLI Build Process

Run the CLI tool to scan your template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### 5. Use Tailwind in HTML

Include the compiled CSS file in your HTML and start using Tailwind classes.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

## Additional Resources

- [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Reusing Styles](https://tailwindcss.com/docs/reusing-styles)
- [Customizing the Framework](https://tailwindcss.com/docs/customizing-the-framework)

For more detailed instructions, visit the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).
