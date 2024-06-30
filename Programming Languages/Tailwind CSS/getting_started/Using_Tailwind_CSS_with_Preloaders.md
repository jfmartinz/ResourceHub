---
id: using-with-preprocessors
title: using-with-preprocessors
sidebar_label: using-with-preprocessors
sidebar_position: 4
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

# Using Tailwind CSS with Preprocessors

## Overview

This guide provides instructions on how to integrate Tailwind CSS with common CSS preprocessors such as Sass, Less, and Stylus. Since Tailwind is a PostCSS plugin, it can be easily used with these preprocessors, though it is generally recommended to rely on PostCSS plugins for added functionality.

## Using PostCSS as Your Preprocessor

### Benefits

- Faster builds due to fewer processing steps.
- Avoids quirks from mixing Tailwind with preprocessors.

### Build-time Imports

Use `postcss-import` for handling `@import` statements:

```sh
npm install -D postcss-import
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Using Sass with Tailwind CSS

### Installation

Install the necessary dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer sass
```

### Configuration

Create a `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Update your build script to process Sass files:

```sh
npx sass src/styles.scss src/styles.css
npx postcss src/styles.css -o dist/styles.css
```

### Example `styles.scss`

```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

// Custom Sass code
```

## Using Less with Tailwind CSS

### Installation

Install the necessary dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer less
```

### Configuration

Create a `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Update your build script to process Less files:

```sh
npx lessc src/styles.less src/styles.css
npx postcss src/styles.css -o dist/styles.css
```

### Example `styles.less`

```less
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

// Custom Less code
```

## Using Stylus with Tailwind CSS

### Installation

Install the necessary dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer stylus
```

### Configuration

Create a `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Update your build script to process Stylus files:

```sh
npx stylus src/styles.styl -o src/styles.css
npx postcss src/styles.css -o dist/styles.css
```

### Example `styles.styl`

```styl
@import 'tailwindcss/base'
@import 'tailwindcss/components'
@import 'tailwindcss/utilities'

// Custom Stylus code
```

## Conclusion

By following these instructions, you can seamlessly integrate Tailwind CSS with Sass, Less, or Stylus preprocessors in your project. While PostCSS is recommended for most use cases, these steps ensure flexibility for developers working with various preprocessing tools.
