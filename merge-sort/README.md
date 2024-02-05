# Project: merge sort

Sorting algorithms are a great way to get to grips with recursion. One such algorithm is Merge Sort, a type of sort that lends itself well to recursion and can be much faster than other algorithms such as bubble sort on the right data sets. You’ll build a function which sorts a given array but uses a “merge sort” function for doing so.

It can be a bit strange to wrap your head around, but just remember you’re “dividing and conquering” the problem.

> The Wikipedia article above uses merge sort examples written in C-like code. This code will likely look quite different from what you’re used to. Don’t waste time trying to understand the specifics of the language, and just focus on the idea it is trying to get across.

## Background viewing
The first step is to actually understand what the merge sort algorithm is doing:

1. Check out this introductory video from Harvard’s CS50x course.
2. Check out this more detailed video explanation by David J. Malan (watch only until 1:58:33).
3. The concept of merging and Merge Sort – How it Works part on YouTube give you a more formal look at this problem if you’re still unclear.
4. (Optional) Play with this Merge Sort Visualizer to get a better feel for exactly what is happening during a Merge Sort.

## Assignment 2

> 1. Build a function `mergeSort` that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of `[3, 2, 1, 13, 8, 5, 0, 1]` should return `[0, 1, 1, 2, 3, 5, 8, 13]`, and an input of `[105, 79, 100, 110]` should return `[79, 100, 105, 110]`.

> 1. Tips:
>    1. Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
>    2. It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

## Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

1. Another look at merge sort
2. Visualize and understand the memory allocation for recursive functions
3. For more attempts at recursion try the first 5 problems in Project Euler