# F#

F# (pronounced F sharp) is a general-purpose, high-level, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code.
F# is a universal programming language for writing succinct, robust and performant code. 

F# allows you to write uncluttered, self-documenting code, where your focus remains on your problem domain, rather than the details of programming.

This section is curated collection which provides basic and advanced concepts of F# programming language. 


## Table of Contents

- [F#](#f)
   - [Introduction](#introduction)
   - [Basics](#basics)
   - [Conditional](#conditional)
   - [Functions](#functions)
   - [Tuples](#tuples)
   - [Collection types](#collection-types)
   - [Exception Handling](#exception-handling)
- [Advanced Functional Programming](#advanced-functional-programming)
- [Object-Oriented Programming in F#](#object-oriented-programming-in-f)
- [Development Tools](#development-tools)
   - [IDE](#ide)
   - [Editor](#editor)
   - [Compilers](#compilers)
- [Data Science](#data-science)
- [App Development](#app-development)
- [Courses](#courses)
  - [Free Courses](#free-courses)
  - [Paid Courses](#paid-courses)
- [Additional Resources](#additinal-resources)
   - [Books](#books)
   - [Cheatsheets](#cheatsheets)
   - [Websites](#websites)
   - [Community](#community)
- [Conclusion](#conclusion)




### F#
> Comprehensive tutorials covering F# basics and advanced concepts.

#### Introduction

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/what-is-f-sharp">What is F#?</a></td>
    <td>This resource provides an overview of F#, including its purpose and key features.</td>
  </tr>
  <tr>
    <td><a href="https://www.microsoft.com/en-us/research/publication/the-early-history-of-f/">History and Evolution of F#</a></td>
    <td>This article delves into the origins and development of F# as a programming language.</td>
  </tr>
  <tr>
    <td><a href="https://circleci.com/blog/functional-vs-object-oriented-programming/#:~:text=In%20contrast%20to%20the%20immutable,that%20it%20is%20imperatively%20written.">Functional Programming vs. Object-Oriented Programming</a></td>
    <td>This blog post compares functional programming, as exemplified by F#, with object-oriented programming, highlighting their differences and use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-features">F# Features</a></td>
    <td>This resource outlines the features that make F# unique and powerful for developers.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-example">F# Example</a></td>
    <td>This page provides a simple example to illustrate basic F# syntax and functionality.</td>
  </tr>
  <tr>
    <td><a href="https://fsharpforfunandprofit.com/installing-and-using/">Installing and Setting Up F#</a></td>
    <td>This guide offers step-by-step instructions for installing and configuring F# on your system.</td>
  </tr>
</table>

#### Basics

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/fsharp/fsharp_basic_syntax.htm">Basic Syntax</a></td>
    <td>This resource provides an introduction to the basic syntax of F#, including common patterns and conventions.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/fsharp/fsharp_program_structure.htm">Code Structure and Modules</a></td>
    <td>This article explains how to structure F# code using modules and other organizational constructs.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/data-types-in-f-sharp">Primitive Types (int, float, bool, char, string)</a></td>
    <td>This page covers the basic data types available in F#, including integers, floats, booleans, characters, and strings.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-unit-type">Unit Type</a></td>
    <td>This resource explains the unit type in F#, which represents a value that carries no information.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/fsharp/fsharp_tuples.htm">Tuples</a></td>
    <td>This article covers the use of tuples in F#, which are used to store multiple values in a single variable.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/fsharp/fsharp_options.htm">Option Types</a></td>
    <td>This resource explains option types in F#, which are used to represent values that may or may not be present.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-casting-and-conversions">F# Casting</a></td>
    <td>This page discusses how to perform type casting and conversions in F#.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-operator">F# Operators</a></td>
    <td>This resource provides an overview of various operators available in F#, including arithmetic, boolean, and bitwise operators.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-binary-arithmetic-operators">F# Arithmetic operators</a></td>
    <td>This page focuses on arithmetic operators in F#, detailing how to perform basic mathematical operations.</td>
  </tr>
  <tr>
    <td><a href="https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/strings">F# String Operations</a></td>
    <td>This resource covers various operations that can be performed on strings in F#.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-boolean-operators">F# Boolean operators</a></td>
    <td>This page explains boolean operators in F#, used to perform logical operations.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-bitwise-operators">F# Bitwise operators</a></td>
    <td>This resource details bitwise operators in F#, which are used for manipulating individual bits of data.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-nullable-operators">F# Nullable operators</a></td>
    <td>This page covers nullable operators in F#, used to handle nullable values.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-comments">F# Comments</a></td>
    <td>This resource explains how to add comments in F# code to make it more readable and maintainable.</td>
  </tr>
</table>

#### Conditional

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-conditional-expressions">F# if then</a></td>
    <td>This page explains the basic conditional if-then expression in F#, used to execute code based on a condition.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-if-then-else-expression">F# if then else</a></td>
    <td>This resource covers the if-then-else expression in F#, which allows for more complex conditional logic by providing an alternative block of code to execute when the condition is false.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-if-elif-ladder">F# if then elif ladder</a></td>
    <td>This article explains the if-then-elif ladder in F#, used for multiple conditional checks in sequence.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-pattern-matching">F# Pattern Matching</a></td>
    <td>This page provides an overview of pattern matching in F#, a powerful feature for checking a value against a pattern and deconstructing data structures.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-for-to-do-example">F# for loop</a></td>
    <td>This resource details the for loop in F#, used to execute a block of code repeatedly for a specified number of times.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-while-loop">F# While loop</a></td>
    <td>This article explains the while loop in F#, used to execute a block of code as long as a specified condition remains true.</td>
  </tr>
</table>

#### Functions

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-functions">F# function</a></td>
    <td>This page provides an introduction to defining and using functions in F#, including syntax and examples.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-function-composition">F# Composition</a></td>
    <td>This resource explains function composition in F#, a technique to combine multiple functions into a single function.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-lambda-expressions">F# lambda expression</a></td>
    <td>This article covers lambda expressions in F#, which are anonymous functions used for short snippets of code.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-inline-function">F# inline function</a></td>
    <td>This page explains inline functions in F#, which are functions that are expanded inline where they are used to improve performance.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-let-binding">F# let binding</a></td>
    <td>This resource details let binding in F#, used to bind values to names.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-type-annotation">F# Type Annotation</a></td>
    <td>This article provides an overview of type annotations in F#, used to explicitly specify the type of a value or function.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-do-bindings">F# do bindings</a></td>
    <td>This page explains do bindings in F#, used to execute expressions that do not return a value.</td>
  </tr>
</table>

#### Tuples

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-tuples">F# Tuples</a></td>
    <td>Introduces tuples in F#, explaining their syntax and usage.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-accessing-tuples-using-matching">F# Accessing Tuples</a></td>
    <td>Covers accessing tuple elements in F# using pattern matching.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-return-multiple-values-using-tuples">F# Return multiple values</a></td>
    <td>Explains how to use tuples in F# to return multiple values from a function.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-access-elements-of-tuples-using-built-in-functions">F# Built in function</a></td>
    <td>Demonstrates accessing elements of tuples in F# using built-in functions.</td>
  </tr>
</table>

#### Collection types

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-collection-types">F# Collection types</a></td>
    <td>Overview of collection types in F# as provided by Microsoft's official documentation.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-list">F# List</a></td>
    <td>Introduction to lists in F#, covering their creation, operations, and usage.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-arrays">F# Arrays</a></td>
    <td>Explanation of arrays in F#, including their declaration, initialization, and manipulation.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-sequence">F# Seq</a></td>
    <td>Overview of sequences in F#, their creation, and operations.</td>
  </tr>
</table>

#### Exception Handling

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-exception-handling">F# Exception Handling</a></td>
    <td>An overview of exception handling in F#, including how to handle and catch exceptions.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-example-without-try-with">F# Try-With and Try-Finally</a></td>
    <td>Explanation of the try-with and try-finally constructs in F# for exception handling.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-user-defined-exceptions">F# User Defined Exception</a></td>
    <td>Guide on defining and using user-defined exceptions in F#.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-throwing-exception-using-failwith-keyword">F# Throwing Exception</a></td>
    <td>Explanation of throwing exceptions in F# using the failwith keyword.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-assertion">F# Assertion</a></td>
    <td>Information about assertions in F#, which are used to verify assumptions about the state of the program.</td>
  </tr>
</table>

### Advanced Functional Programming
> Advanced topics in functional programming with F#, including generics, records, and discriminated unions.


<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-generics">F# Generics</a></td>
    <td>Explanation of generics in F#, their syntax, and usage for writing reusable code.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-records">F# Records</a></td>
    <td>Introduction to records in F#, which are used to group related data together.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-enumerations">F# Enumeration</a></td>
    <td>Overview of enumerations in F#, used to define a set of named constants.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-reference-cells">F# Reference Cells</a></td>
    <td>Explanation of reference cells in F#, mutable storage locations that can be updated.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-structures">F# Structures</a></td>
    <td>Introduction to structures in F#, used to define lightweight objects with value semantics.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-discriminated-unions">F# Discriminated Unions</a></td>
    <td>Explanation of discriminated unions in F#, used to define a type that can hold different types of values.</td>
  </tr>
</table>


### Object-Oriented Programming in F#
> Resources exploring object-oriented programming concepts and techniques in F#.

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-obejct-and-class">Classes and Objects</a></td>
    <td>Overview of classes and objects in F#, including their definition and usage.</td>
  </tr>
  <tr>
    <td><a href="https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/classes">Defining Classes</a></td>
    <td>Explanation of how to define classes in F# programming language.</td>
  </tr>
  <tr>
    <td><a href="https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/object-expressions">Creating Objects</a></td>
    <td>Guide on creating objects in F# using object expressions.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-constructor">F# Constructor</a></td>
    <td>Explanation of constructors in F#, used for initializing objects.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-self-identifier">F# Self Identifier</a></td>
    <td>Information about the self identifier in F#, which represents the current instance of a class or object.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-static">F# Static</a></td>
    <td>Explanation of static members in F#, which belong to the type itself rather than to instances of the type.</td>
  </tr>
  <tr>
    <td><a href="https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/members/properties#:~:text=property%20is%20accessed.-,Static%20and%20Instance%20Properties,is%20required%20for%20instance%20properties.">Properties and Methods</a></td>
    <td>Guide on defining properties and methods in F# classes.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-inheritance">Inheritance in F#</a></td>
    <td>Explanation of inheritance and its implementation in F#.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-interface">Implementing Interfaces</a></td>
    <td>Guide on implementing interfaces in F# to define a contract for types.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-method-overriding">F# Method Overriding</a></td>
    <td>Explanation of method overriding in F#, used to provide a specific implementation of a method in a derived class.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/f-sharp-abstract-classes">F# Abstraction</a></td>
    <td>Overview of abstract classes in F#, which cannot be instantiated and are used as base classes for other classes.</td>
  </tr>
</table>

### Development Tools
> Tools and utilities for F# development, including IDEs, editors, and compilers.

#### IDE

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/Seng-Jik/FSharpPlayground">F# Playground</a></td>
    <td>Minimal playground for F#. Licensed under GPL 3.0.</td>
  </tr>
  <tr>
    <td><a href="https://www.jetbrains.com/rider">Jetbrains Rider</a></td>
    <td>Cross-Platform .Net IDE with F# support. Proprietary, free for open source projects.</td>
  </tr>
  <tr>
    <td><a href="http://www.monodevelop.com/">MonoDevelop</a></td>
    <td>Cross-platform IDE mostly aimed at Mono/.NET developers. Licensed under LGPLv2 and X11/MIT.</td>
  </tr>
  <tr>
    <td><a href="https://www.visualstudio.com/">Visual Studio</a></td>
    <td>IDE from Microsoft with first-class F# support (Windows only). Proprietary.</td>
  </tr>
</table>

#### Editor

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/emacs-fsharp-mode">Emacs F# mode</a></td>
    <td>F# support in Emacs (including Intellisense and Interactive mode). Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/fsharpbinding">F# Bindings</a></td>
    <td>Archive of F# Language Bindings for Open Editors. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsprojects/fantomas">Fantomas</a></td>
    <td>F# code formatter. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsprojects/FSharpLint">FSharpLint</a></td>
    <td>F# code linter. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/nightroman/FarNet">FSharpFar</a></td>
    <td>F# support for Far Manager. Licensed under BSD-3-Clause.</td>
  </tr>
  <tr>
    <td><a href="http://ionide.io/">Ionide</a></td>
    <td>Atom Editor and Visual Studio Code package suite for cross-platform F# development. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/vim-fsharp">Vim F#</a></td>
    <td>F# support for Vim. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/adelarsq/neofsharp.vim">neofsharp.vim</a></td>
    <td>Basic F# support for (Neo)Vim. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/AshleyF/VimSpeak">VimSpeak</a></td>
    <td>VimSpeak lets you control Vim with your voice using speech recognition. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsprojects/VisualFSharpPowerTools">Visual F# Power Tools</a></td>
    <td>Power commands for F# in Visual Studio. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/pablofrommars/fsharp-notebook">fsharp-notebook</a></td>
    <td>Data Science Notebook for F# interactive. Licensed under MIT.</td>
  </tr>
</table>

#### Compilers

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/FSharp.Compiler.Service">F# Compiler Services</a></td>
    <td>The F# Compiler, F# Interactive scripting engine, and F# editing services as a component library. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fable-compiler/Fable">Fable</a> </td>
    <td>F# to JavaScript Compiler. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/kjnilsson/fez">Fez</a> </td>
    <td>F# to Erlang compiler. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/fsharp">FSharp</a></td>
    <td>The Open Edition of the F# compiler, core library, and tools. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/ZachBray/FunScript">FunScript</a> </td>
    <td>F# to JavaScript compiler with JQuery etc. mappings through a TypeScript type provider. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/calebh/Juniper">Juniper</a> </td>
    <td>Functional Reactive Programming for the Arduino and other microcontrollers. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/ninjarobot/Pengines.Client">Pengines.Client</a> </td>
    <td>Sandboxed Prolog environment. Licensed under BSD-2-Clause.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/Microsoft/visualfsharp">Visual F#</a> </td>
    <td>The Visual F# compiler and tools. Licensed under Apache 2.0.</td>
  </tr>
</table>

### Data Science 
> Materials related to data science and machine learning using F#, including libraries and frameworks.

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/BlueMountainCapital/Deedle">Deedle</a></td>
    <td>Deedle: Exploratory data library for .NET. Licensed under BSD-2-Clause.</td>
  </tr>
  <tr>
    <td><a href="http://www.deepml.net">Deep.Net</a></td>
    <td>Deep learning library for F#. Provides symbolic model differentiation, automatic differentiation, and compilation to CUDA GPUs. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DiffSharp/DiffSharp">DiffSharp</a></td>
    <td>DiffSharp is a functional automatic differentiation (AD) library. Licensed under BSD-2-Clause.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fslaborg/FsLab">FsLab</a></td>
    <td>FsLab is a collection of libraries for data-science. It provides a rapid development environment that lets you write advanced analysis with few lines of production-quality code. Licensed under Apache 2.0.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsprojects/IfSharp">IfSharp</a></td>
    <td>F# for Jupyter Notebooks. Licensed under BSD-3-Clause.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/BayesWitnesses/m2cgen">m2cgen</a></td>
    <td>A CLI tool to transpile trained classic ML models into native F# code with zero dependencies. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/mathnet/mathnet-numerics">Math.NET Numerics</a></td>
    <td>Math.NET Numerics aims to provide methods and algorithms for numerical computations in science, engineering, and everyday use. F# specific bindings available. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/mathnet/mathnet-symbolics/">Math.NET Symbolics</a></td>
    <td>Math.NET Symbolics is a basic open-source computer algebra library for .NET, Silverlight, and Mono written entirely in F#. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/jackmott/SIMDArray">SIMDArray</a></td>
    <td>SIMD enhanced Array extensions for faster computation. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/mrdimosthenis/Synapses">Synapses</a></td>
    <td>Neural network library in F#. Licensed under MIT.</td>
  </tr>
</table>

### App Development 
> Resources for developing applications using F# for various platforms and purposes.

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/FsUnity">FsUnity</a></td>
    <td>F# Libraries, Tools, and Plugins for the Unity3d Game Engine. Licensed under Unilicense.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/bcarruthers/garnet">Garnet</a></td>
    <td>Garnet is a lightweight game composition library for F# with entity-component-system (ECS) and actor-like messaging features. Licensed under MIT.</td>
  </tr>
  <tr>
    <td><a href="http://www.lkokemohr.de/fsharp_godot.html">Godot</a></td>
    <td>Tutorial on how to use F# with Godot.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/bryanedds/Nu">Nu Game Engine</a></td>
    <td>Cross-platform F# 2D game engine built in the functional style. Uses SDL2 and Farseer Physics. Licensed under MIT.</td>
  </tr>
</table>


### Courses 
> Online courses and workshops for learning F# programming.

#### Free Courses

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>

  <tr>
    <td><a href="http://www.fsharpworkshop.com/">F# workshop</a></td>
    <td>Workshop focused on F# programming.</td>
  </tr>
  <tr>
    <td><a href="https://fsharp.tv/courses/fsharp-programming-intro/">Introduction to F#</a></td>
    <td>Online course providing an introduction to F# programming.</td>
  </tr>
  <tr>
    <td><a href="https://write-yourself-a-scheme.pangwa.com/">Write yourself a scheme in 48 hours using F#</a></td>
    <td>Course guiding learners to implement a Scheme interpreter in F#.</td>
  </tr>
    <tr>
    <td><a href="http://usergroup.tv/videos/category/group/austin-f-meetup">Austin F# Meetup Group Recorded Presentations</a></td>
    <td>Recorded presentations from the Austin F# Meetup Group.</td>
  </tr>
     <tr>
    <td><a href="https://www.youtube.com/watch?v=1ioGr701c5Q&list=PLqWncHdBPoD4YEWoXQlRj1tiTc96HZxH8">Intro to F#</a></td>
    <td>Video series providing an introduction to F#.</td>
  </tr>
   <tr>
    <td><a href="https://www.youtube.com/watch?v=KMR2y1vcO-s&list=PLqWncHdBPoD4-d_VSZ0MB0IBKQY0rwYLd">Fast Dictionary in F#</a></td>
    <td>Video series discussing fast dictionary implementation in F#.</td>
  </tr>
    
  <tr>
    <td><a href="https://www.youtube.com/watch?v=EIBRoNEpg6c&list=PLqWncHdBPoD4O1sr2Q3W9gAuJ30s09U2r">F# Chats on performance</a></td>
    <td>Video series covering discussions on performance in F#.</td>
  </tr>
   <tr>
    <td><a href="https://www.youtube.com/playlist?list=PLqWncHdBPoD5hEK31CcfmTHP-7icw2Xd0">Topological Sort</a></td>
    <td>Video series explaining topological sort in F#.</td>
  </tr>
</table>

#### Paid Courses
<table>
   <tr>
    <th>Resource Name</th>
    <th>Description</th>
     <th>Cost</th>
  </tr>
    <tr>
    <td><a href="https://www.udemy.com/course/data-programming-with-f/">Data programming with F#</a></td>
    <td>Course on data programming with F# available on Udemy.</td>
     <td>Paid</td>
  </tr>
   
</table>


### Additinal Resources 
> Additinal Resources that you may consider.

#### Books

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
     <th>Cost</th>
  </tr>
  <tr>
    <td><a href="https://www.manning.com/books/get-programming-with-f-sharp">Get Programming with F#: A Guide for .NET Developers</a></td>
    <td>A guide for .NET developers to learn F# programming.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://books-library.net/files/books-library.net-01301832Oz1H4.pdf">Functional Programming Using F#</a></td>
    <td>Book by Michael R. Hansen on functional programming using F#.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://www.amazon.in/Expert-F-Experts-Voice-NET/dp/1590598504">Expert F#</a></td>
    <td>Written by Don Syme, this book is for advanced F# developers.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://pragprog.com/titles/swdddf/domain-modeling-made-functional/">Domain Modeling Made Functional: Tackle Software Complexity with Domain-Driven Design and F#</a></td>
    <td>Learn domain-driven design and functional programming with F#.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://www.amazon.in/Expert-F-4-0-Don-Syme/dp/1484207416">Expert F# 4.0</a></td>
    <td>Another expert-level book on F# by Don Syme.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://www.amazon.com/Real-World-Functional-Programming-Tomas-Petricek/dp/1933988924">Real-World Functional Programming: With Examples in F#</a></td>
    <td>Explore real-world examples of functional programming using F#.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://www.amazon.com/Book-Breaking-Managed-Functional-Programming/dp/1593275528">The Book of F#: Breaking Free with Managed Functional Programming</a></td>
    <td>Learn managed functional programming with F# in this book by Dave Fancher.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://link.springer.com/book/10.1007/978-1-4842-7205-3">Stylish F# 6: Crafting Elegant Functional Code for .NET 6</a></td>
    <td>This book focuses on crafting elegant functional code for .NET 6 using F#.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://link.springer.com/book/10.1007/978-1-4302-2390-0">Beginning F#</a></td>
    <td>Introduction to F# programming by Robert. Pickering.</td>
     <td>Paid</td>
  </tr>
  <tr>
    <td><a href="https://www.wiley.com/en-us/F%23+for+Scientists-p-9780470242117">F# for Scientists</a></td>
    <td>This book focuses on using F# for scientific computing.</td>
     <td>Paid</td>
  </tr>
</table>


#### Cheatsheets

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="http://fsprojects.github.io/fsharp-cheatsheet/">F# cheatsheet</a></td>
    <td>Official F# cheatsheet providing quick reference to F# syntax and features.</td>
  </tr>
  <tr>
    <td><a href="http://fssnip.net/">F# Snips</a></td>
    <td>Collection of F# code snippets for learning and reference purposes.</td>
  </tr>
  <tr>
    <td><a href="https://docs.microsoft.com/en-us/dotnet/articles/fsharp/tour">F# tour</a></td>
    <td>Microsoft's F# tour providing an overview of F# features and capabilities.</td>
  </tr>
  <tr>
    <td><a href="https://learnxinyminutes.com/docs/fsharp">Learn F# in Y minutes</a></td>
    <td>Quick F# tutorial to get started with F# programming language.</td>
  </tr>
</table>

#### Websites 

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="http://c4fsharp.net/">Community for F#</a></td>
    <td>Links to dojos and recordings of community presentations.</td>
  </tr>
  <tr>
    <td><a href="https://jindraivanek.gitlab.io/cs2fs-online">cs2fs</a></td>
    <td>Transform C# code to F# code.</td>
  </tr>
  <tr>
    <td><a href="https://www.decompiler.com/">Decompiler.com</a></td>
    <td>Online C#/VB/F# decompiler.</td>
  </tr>
  <tr>
    <td><a href="https://dotnetfiddle.net/">DotNetFiddle</a></td>
    <td>Online REPL.</td>
  </tr>
  <tr>
    <td><a href="http://fsharp.github.io/">F# Core Engineering</a></td>
    <td>Official website for F# Core Engineering.</td>
  </tr>
  <tr>
    <td><a href="https://fsharpforfunandprofit.com/">F# for Fun and Profit</a></td>
    <td>Reference tutorials for learning F#.</td>
  </tr>
  <tr>
    <td><a href="http://fsharp.org/">F# Software Foundation</a></td>
    <td>Main website for the F# Software Foundation.</td>
  </tr>
  <tr>
    <td><a href="https://fsprojects.github.io/fantomas-tools">fantomas-tools</a></td>
    <td>A set of Fantomas related tools like AST viewer and online bug reporter.</td>
  </tr>
  <tr>
    <td><a href="https://sharplab.io/">SharpLab</a></td>
    <td>C#/VB/F# compiler playground.</td>
  </tr>
  <tr>
    <td><a href="http://www.tryfsharp.org">Try F#</a></td>
    <td>Online tutorials, currently without execution of code due to Silverlight dependency.</td>
  </tr>
</table>


#### Community


<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://forums.fsharp.org/">F# on Discourse</a></td>
    <td>Official F# community forum hosted on Discourse.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/fsharp/">F# on Github</a></td>
    <td>Official F# repositories and projects on GitHub.</td>
  </tr>
  <tr>
    <td><a href="http://webchat.freenode.net/?channels=%23%23fsharp">F# on IRC</a></td>
    <td>Join the F# community on IRC.</td>
  </tr>
  <tr>
    <td><a href="http://fsharp.org/guides/slack/">F# on Slack</a></td>
    <td>Join the F# community on Slack.</td>
  </tr>
  <tr>
    <td><a href="https://t.me/fsharp_news">F# news on Telegram</a></td>
    <td>Stay updated with F# news on Telegram.</td>
  </tr>
</table>


## Conclusion

F# is a powerful and versatile programming language that combines the elegance of functional programming with the practicality of .NET development. Whether you're a beginner learning the basics or an experienced developer exploring advanced concepts, the resources compiled in this README provide a comprehensive guide to mastering F#.

 From tutorials and videos to books and community forums, there's something here for everyone interested in unlocking the full potential of F#. So dive in, explore, and join the vibrant community of F# enthusiasts as you embark on your journey to becoming a proficient F# developer. 


Happy coding !!
