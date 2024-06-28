---
id: browser-support
title: browser-support
sidebar_label: browser-support
sidebar_position: 6
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

## Browser Support

Understanding which browsers Tailwind supports and how to manage vendor prefixes.

In general, Tailwind CSS v3.0 is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. It does not support any version of IE, including IE 11.

While most of the features in Tailwind CSS will work in all modern browsers, Tailwind also includes APIs for several bleeding-edge features that aren’t yet supported by all browsers, for example the :focus-visible pseudo-class and backdrop-filter utilities.

Since Tailwind is such a low-level framework, it’s easy to avoid these features if you can’t use them by simply not using the utility or modifier that’s not supported, much like how you just wouldn’t use those CSS features in your CSS.

The Can I Use database is a great resource when you’re unsure about the support for an unfamiliar CSS feature.

​

## Vendor Prefixes

Many CSS properties require vendor prefixes to be understood by browsers, for example background-clip: text needs the -webkit prefix to work in most browsers:

```
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
```

If you’re using the Tailwind CLI tool, vendor prefixes like this will be added automatically.

If not, we recommend that you use Autoprefixer, which is a PostCSS plugin that automatically adds any necessary vendor prefixes based on the browsers you tell it you need to support.

To use it, install it via npm:

```
npm install -D autoprefixer
```

Then add it to the very end of your plugin list in your PostCSS configuration:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

To learn more about specifying which browsers you need to support, check out Browserslist which is the standard way to define target browsers in front-end tooling.
