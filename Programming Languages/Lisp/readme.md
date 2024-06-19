# Lisp 

Lisp is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation. It is known for its powerful macro system and suitability for symbolic computation. The resources below will guide you through Lisp's core concepts and advanced techniques.

## Table of Contents

- [Roadmap](#roadmap)
- [LISP](#lisp)
  - [Overview](#overview)
  - [Setup](#setup)
  - [Data Structures](#data-structures)
  - [Expressions and Evaluation](#expressions-and-evaluation)
  - [Functions](#functions)
  - [Recursion](#recursion)
  - [Macros](#macros)
  - [Closures and Lambdas](#closures-and-lambdas)
  - [Packages and Libraries](#packages-and-libraries)
- [Projects](#projects)
  - [Beginner Level Projects](#beginner-projects)
  - [Intermediate Level Projects](#intermediate-projects)
  - [Advanced Level Projects](#advanced-projects)
- [Courses](#courses)
  - [Free Courses](#free-courses)
  - [Paid Courses](#paid-courses)
- [Youtube](#youtube)
  - [Youtube Channels](#youtube-channels)
  - [Youtube Playlists](#youtube-playlists)
- [Additional Resources](#additional-resources)
  - [Cheatshests](#cheatsheets)
- [Conclusion](#conclusion)

## Roadmap

> The Lisp roadmap outlines the essential steps and resources needed to become proficient in Lisp programming.
<table width="100%" id="roadmap">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="http://landoflisp.com/">Land of Lisp</a></td>
    <td>A structured guide for Lisp beginners, covering fundamentals and core concepts.</td>
  </tr>
  <tr>
    <td><a href="https://www.paulgraham.com/lisp.html">Paul Graham - Lisp</a></td>
    <td>An insightful introduction to Lisp programming by Paul Graham, emphasizing its unique problem-solving approach.</td>
  </tr>
  <tr>
    <td><a href="https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/sicp.html">Structure and Interpretation of Computer Programs (SICP)</a></td>
    <td>A classic Lisp textbook renowned for its comprehensive exploration of computer science principles through Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=fsx_i7i5euE">Practical Lisp </a></td>
    <td>Bridging the gap for programmers familiar with other languages.</td>
  </tr>
</table>

## Lisp

### Overview
<table width="100%" id="overview">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/Lisp_%28programming_language%29">Wikipedia - Lisp</a></td>
    <td>A comprehensive overview of Lisp's history, design principles, and impact on the programming landscape.</td>
  </tr>
  <tr>
    <td><a href="http://www.youtube.com/watch?v=INUHCQST7CU">Fireship</a></td>
    <td>Lisp in 100 Seconds</td>
  </tr>
  <tr>
    <td><a href="http://www.youtube.com/watch?v=AfY_zGR_QBI">Gavin Freeborn</a></td>
    <td>Why Lisp Is One Of The Most Productive Programming Languages</td>
  </tr>
  <tr>
    <td><a href="http://www.youtube.com/watch?v=cMMiaCtOzV0">Lex Clips</a></td>
    <td>LISP: Lex Fridman's favorite programming language</td>
  </tr>
</table>


### Setup
> Setup Your Lisp exploration commences with setting up a suitable development environment.
<table width="100%" id="setup">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/tour/">GNU Emacs</a></td>
    <td>A powerful, extensible text editor for Lisp development.</td>
  </tr>
  <tr>
    <td><a href="https://www.lispworks.com/">LispWorks</a></td>
    <td>A comprehensive development environment for Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://common-lisp.net/project/slime/">SLIME</a></td>
    <td>Superior Lisp Interaction Mode for Emacs.</td>
  </tr>
</table>

### Data Structures

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/data-types-in-lisp/">Data Types in Lisp</a></td>
    <td>An overview of data types in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/structures-in-lisp/">Structures in Lisp</a></td>
    <td>Explanation of structures in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/lisp_data_types.htm">Lisp Data Types</a></td>
    <td>A guide to data types in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://lispcookbook.github.io/cl-cookbook/data-structures.html">Cookbook - Data Structures</a></td>
    <td>A collection of common data structures and their usage in Common Lisp.</td>
  </tr>
</table>

### Expressions and Evaluation

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/manual/html_node/elisp/Evaluation.html">Evaluation</a></td>
    <td>Documentation on expression evaluation in Emacs Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.cs.utexas.edu/users/qr/algy/algy-expsys/node30.html">Expressions and Evaluation</a></td>
    <td>Explanation of expressions and evaluation in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www1.icsi.berkeley.edu/Sather/Contrib/interpreters/Lisp/Doc/section3_4.html">ICSI - Expressions and Evaluation</a></td>
    <td>Documentation on Lisp expressions and evaluation.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/lisp_program_structure.htm">Lisp Program Structure</a></td>
    <td>Overview of Lisp program structure including expressions.</td>
  </tr>
</table>

### Functions

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/functions-in-lisp/">Functions in Lisp</a></td>
    <td>An explanation of functions in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/lisp_functions.htm">Lisp Functions</a></td>
    <td>Tutorial on functions in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://gigamonkeys.com/book/functions">Common Lisp - Functions</a></td>
    <td>Insightful guide on Common Lisp functions.</td>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/manual/html_node/elisp/Defining-Functions.html">Defining Functions</a></td>
    <td>Documentation on defining functions in Emacs Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://lispcookbook.github.io/cl-cookbook/functions.html">Cookbook - Functions</a></td>
    <td>Recipes and examples for Common Lisp functions.</td>
  </tr>
  <tr>
    <td><a href="https://en.wikibooks.org/wiki/Common_Lisp/Basic_topics/Functions">Basic Topics: Functions</a></td>
    <td>Basic topics on Lisp functions from Wikibooks.</td>
  </tr>
</table>

### Recursion

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://courses.cs.washington.edu/courses/cse341/98wi/CurrentQtr/lectures/lisp3.pdf">Recursion</a></td>
    <td>PDF lecture notes on recursion in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/recursion-in-lisp/">Recursion in Lisp</a></td>
    <td>Explanation of recursion in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/manual/html_node/eintr/Recursion.html">GNU - Recursion</a></td>
    <td>Documentation on recursion in Emacs Lisp.</td>
  </tr>
</table>

### Macros

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/macros-in-lisp/">Macros in Lisp</a></td>
    <td>An explanation of macros in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/lisp_macros.htm">Lisp Macros</a></td>
    <td>Tutorial on macros in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/manual/html_node/elisp/Macros.html">GNU - Macros</a></td>
    <td>Documentation on macros in Emacs Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://gigamonkeys.com/book/macros-defining-your-own">Macros: Defining Your Own</a></td>
    <td>Guide on defining your own macros in Common Lisp.</td>
  </tr>
</table>


### Closures and Lambdas

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://letoverlambda.com/index.cl/guest/chap2.html">Let Over Lambda - Chapter 2</a></td>
    <td>Chapter 2 of "Let Over Lambda" focusing on closures and lambdas.</td>
  </tr>
  <tr>
    <td><a href="https://www.gnu.org/software/emacs/manual/html_node/elisp/Closures.html">GNU - Closures</a></td>
    <td>Documentation on closures in Emacs Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://dept-info.labri.fr/~strandh/Teaching/PFS/Common/David-Lamkins/chapter15.html">University of Bordeaux - Chapter 15</a></td>
    <td>Chapter 15 of "Programming from Specifications" focusing on closures and lexical environments.</td>
  </tr>
  <tr>
    <td><a href="https://dl.acm.org/doi/pdf/10.1145/1317258.1317261">Closures and First-Class Procedures</a></td>
    <td>Research paper discussing closures and first-class procedures.</td>
  </tr>
</table>

### Packages and Libraries

<table width="100%">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/packages-in-lisp/">Packages in Lisp</a></td>
    <td>An overview of packages in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://lisp-journey.gitlab.io/blog/libraries-dependencies-management/">Libraries and Dependencies Management</a></td>
    <td>Explains how to manage libraries and dependencies in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://ashok-khanna.medium.com/an-introduction-to-lisp-packages-7a9ee352006e"> An Introduction to Lisp Packages</a></td>
    <td>Provides an introduction to Lisp packages.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/lisp_packages.htm">Lisp Packages</a></td>
    <td>Explains the concept of packages in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/CodyReichert/awesome-cl">Awesome Common Lisp</a></td>
    <td>A curated list of awesome Common Lisp libraries, software, and resources.</td>
  </tr>
</table>

## Projects

> Hands-on projects to apply and reinforce your Lisp skills.

### Beginner Level Projects

<table width="100%" id="beginner-projects">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=LqBbGFMPcDI">First Lisp Project</a></td>
    <td>A video tutorial on creating your first project in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=h_hbqeiygTA">Writing a Game in Lisp</a></td>
    <td>A tutorial on writing a game in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=N3kX-ACScmw">Let's make a Game in Lisp</a></td>
    <td>Another tutorial on developing a game in Lisp.</td>
  </tr>
</table>

### Intermediate Level Projects

<table width="100%" id="intermediate-projects">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/cbaggers/cepl">CEPL</a></td>
    <td>A project to learn about game development in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=_PYGSfiX6tw">Maze Generator</a></td>
    <td>A Common Lisp project for implementing a maze generator.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=8wLd0IDvRc8">Coding Timelapse</a></td>
    <td>A timelapse video of a coding project in Common Lisp.</td>
  </tr>
</table>

### Advanced Level Projects

<table width="100%" id="advanced-projects">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://github.com/atlas-engineer/next">Next Browser</a></td>
    <td>A project to build a web browser in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=X5OQBMGpaTU">Building a Lisp Interpreter in Lisp</a></td>
    <td>A video tutorial on building a Lisp interpreter in Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=NJe4isZ7NHI">3D Graphics Project in Common Lisp</a></td>
    <td>A video tutorial on a 3D graphics project in Common Lisp.</td>
  </tr>
</table>


## Courses

> Online courses to learn and master Lisp programming.

### Free Courses

<table width="100%" id="free-courses">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=2Op3QLzMgSY&t=106s">MIT OpenCourseWare - Introduction to Programming in Lisp</a></td>
    <td>A free MIT course on programming in Lisp, available on YouTube.</td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=m0TsdytmGhc&list=PL2VAYZE_4wRJi_vgpjsH75kMhN4KsuzR_">Little Bits of Lisp</a></td>
    <td>A YouTube playlist that covers various aspects of Lisp programming.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/vindarel/common-lisp-course-in-videos">Common Lisp Course in Videos</a></td>
    <td>A collection of video tutorials on Common Lisp available on GitHub.</td>
  </tr>
  <tr>
    <td><a href="https://cs.gmu.edu/~sean/lisp/LispTutorial.html">Lisp Tutorial by Sean Luke</a></td>
    <td>An online tutorial for learning Lisp.</td>
  </tr>
  <tr>
    <td><a href="https://www.sololearn.com/en/Discuss/1264180/lisp-programming">SoloLearn - Lisp Programming</a></td>
    <td>SoloLearn discussion and resources on Lisp programming.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/lisp/index.htm">TutorialsPoint - Lisp</a></td>
    <td>A comprehensive guide to Lisp programming on TutorialsPoint.</td>
  </tr>
</table>

### Paid Courses

<table width="100%" id="paid-courses">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.udemy.com/course/practical-autolisp-programming-beginner-to-advanced">Udemy - Practical AutoLISP Programming: Beginner to Advanced</a></td>
    <td>An in-depth Udemy course on AutoLISP programming.</td>
  </tr>
  <tr>
    <td><a href="https://www.udemy.com/course/lisp-programming-language">Udemy - Lisp Programming Language</a></td>
    <td>Another Udemy course focusing on the Lisp programming language.</td>
  </tr>
  <tr>
    <td><a href="https://www.coursemonster.com/training-courses/lisp">CourseMonster - Lisp Training</a></td>
    <td>Professional Lisp training courses available on CourseMonster.</td>
  </tr>
  <tr>
    <td><a href="https://www.acte.in/lisp-online-training">ACTE - Lisp Online Training</a></td>
    <td>Online Lisp training programs offered by ACTE.</td>
  </tr>
</table>

## Youtube

> Video tutorials and lectures on Lisp programming.
### Youtube Channels
<table>
</table>

### Youtube Playlists
<table width="100%" id="youtube">
<tr>
<th>Resource Name</th>
<th>Description</th>
</tr>
<tr>
<td><a href="http://www.youtube.com/watch?v=INUHCQST7CU">Fireship</a></td>
<td>Lisp in 100 Seconds</td>
</tr>
<tr>
<td><a href="http://www.youtube.com/watch?v=ymSq4wHrqyU">Derek Banas</a></td>
<td>Lisp Tutorial</td>
</tr>
<tr>
<td><a href="http://www.youtube.com/watch?v=svmPz5oxMlI">Computerphile</a></td>
<td>Lisp, The Quantum Programmer's Choice - Computerphile</td>
</tr>
<tr>
<td><a href="https://www.youtube.com/watch?v=hN0HTJXDBfI">Lisp Tutorial for Beginners (Clojure)</a></td>
<td>Beginners tutorial on Lisp language</td>
</tr>
<tr>
<td><a href="https://www.youtube.com/watch?v=GFtEGETLv0o">Intro to Common Lisp</a></td>
<td>Introduction to Common Lisp programming language</td>
</tr>
</table>

## Additional Resources
> Additional resources to learn Lisp
### Cheatsheets



<table width="100%" id="lisp-cheatsheets">
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://gist.github.com/gosukiwi/04b7680efa08bb9affd3b0c3087d7126">Lisp Cheatsheet</a></td>
    <td>A comprehensive Lisp cheatsheet for quick reference.</td>
  </tr>
  <tr>
    <td><a href="https://quickref.me/lisphttps://www.reddit.com/r/lisp/comments/p2zgbi/common_lisp_cheat_sheet/?rdt=36763">Quickref - Lisp</a></td>
    <td>Another handy Lisp cheatsheet for developers.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/ashok-khanna/lisp-notes">GitHub - Lisp Notes</a></td>
    <td>A collection of Lisp notes and cheatsheets on GitHub.</td>
  </tr>
  <tr>
    <td><a href="https://onecompiler.com/cheatsheets/commonlisp">Common Lisp Cheatsheet</a></td>
    <td>A useful cheatsheet for Common Lisp on OneCompiler.</td>
  </tr>
  <tr>
    <td><a href="https://cs.gmu.edu/~sean/lisp/LispCheatSheet.txt">GMU - Lisp Cheat Sheet</a></td>
    <td>A text-based Lisp cheatsheet from George Mason University.</td>
  </tr>
  <tr>
    <td><a href="https://www.cheat-sheets.org/saved-copy/clqr-a4-consec.pdf">Common Lisp Quick Reference</a></td>
    <td>A PDF quick reference for Common Lisp.</td>
  </tr>
</table>


## Conclusion

Lisp is a powerful and versatile language with a rich history. The resources provided in this guide will help you on your journey to mastering Lisp, from basic concepts to advanced techniques. Happy coding!
