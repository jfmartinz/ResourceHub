---
id: Margin
title: Margin
sidebar_label: Margin
sidebar_position: 8
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

# Margin in Tailwind CSS

Margin is used to create space around an element. In Tailwind CSS, you can use utility classes to apply margin to your elements.
Using negative values
To use a negative margin value, prefix the class name with a dash to convert it to a negative value.

```
<div class="-mt-8 bg-sky-300 ...">-mt-8</div>
```

# Using logical properties

Use the ms-_ and me-_ utilities to set the margin-inline-start and margin-inline-end logical properties, which map to either the left or right side based on the text direction.

```
<div dir="ltr">
  <div class="ms-8 ...">ms-8</div>
  <div class="me-8 ...">me-8</div>
<div>
```

​

# Hover, focus, and other states

Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:mt-8 to only apply the mt-8 utility on hover.

```
<div class="mt-4 hover:mt-8">
  <!-- ... -->
</div>
```

# Breakpoints and media queries

You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:mt-8 to apply the mt-8 utility at only medium screen sizes and above.

```
<div class="mt-4 md:mt-8">
  <!-- ... -->
</div>
```
