---
id: optimizing-for-production
title: optimizing-for-production
sidebar_label: optimizing-for-production
sidebar_position: 5
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

# Optimizing for Production

## Introduction

Tailwind CSS focuses on producing the smallest CSS file possible by generating only the CSS used in your project. This often results in CSS files under 10kB, even for large projects. For instance, Netflix's Top 10 site uses Tailwind and delivers just 6.5kB of CSS.

## Steps to Optimize

### Minify CSS

Minifying your CSS can be done using tools like [cssnano](https://cssnano.co). If using Tailwind CLI, add the `--minify` flag:

```bash
npx tailwindcss -o build.css --minify
```

## PostCSS Plugin

If Tailwind is installed as a PostCSS plugin, add cssnano at the end of your plugin list:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
```

## Compression

Compress your CSS using Brotli or similar tools.

## Frameworks

Many frameworks handle minification and compression automatically in production.

For more details, visit the Tailwind CSS documentation.
