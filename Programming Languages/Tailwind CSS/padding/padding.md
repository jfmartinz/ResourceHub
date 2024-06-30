---
id: padding
title: padding
sidebar_label: Padding
sidebar_position: 7
tags:
  - Tailwind CSS
  - Getting Started
  - Tailwind CSS Setup
  - Tailwind CSS Installation
  - Tailwind CSS Quickstart
description: This guide provides instructions on how to get started with Tailwind CSS, including installation and basic usage.
---

# Basic usage

​

# Add padding to a single side

Use the pt-_, pr-_, pb-_, and pl-_ utilities to control the padding on one side of an element.

For example, pt-6 would add 1.5rem of padding to the top of an element, pr-4 would add 1rem of padding to the right of an element, pb-8 would add 2rem of padding to the bottom of an element, and pl-2 would add 0.5rem of padding to the left of an element.

```
<div class="pt-6 ...">pt-6</div>
<div class="pr-4 ...">pr-4</div>
<div class="pb-8 ...">pb-8</div>
<div class="pl-2 ...">pl-2</div>



```

# Add horizontal padding

Use the px-\* utilities to control the horizontal padding of an element.

```
<div class="px-8 ...">px-8</div>

```

# Add vertical padding

Use the py-\* utilities to control the vertical padding of an element.

```
<div class="py-8 ...">py-8</div>

```

# Add padding to all sides

Use the p-\* utilities to control the padding on all sides of an element.

`<div class="p-8 ...">p-8</div>`

# Using logical properties

Use the ps-_ and pe-_ utilities to set the padding-inline-start and padding-inline-end logical properties, which map to either the left or right side based on the text direction.

````<div dir="ltr">
  <div class="ps-8 ...">ps-8</div>
  <div class="pe-8 ...">pe-8</div>
<div>

<div dir="rtl">
  <div class="ps-8 ...">ps-8</div>
  <div class="pe-8 ...">pe-8</div>
<div>```
````
