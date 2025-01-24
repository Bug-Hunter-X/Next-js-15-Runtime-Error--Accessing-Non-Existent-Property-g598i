# Next.js 15 Runtime Error: Accessing Non-Existent Property

This repository demonstrates a common runtime error in Next.js 15 applications that occurs when attempting to access a property of an undefined object.  The error arises from accessing a property that doesn't exist on an object within a functional component.

## Bug Description

A runtime error occurs in the `/pages/about.js` component when attempting to access a property (`nonExistentProperty`) that is not defined. This results in an error message similar to "Cannot read properties of undefined (reading 'nonExistentProperty')".

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate to `/about` in your browser. The error will be thrown.

## Solution

The solution is to check if the property exists before accessing it, using optional chaining or the nullish coalescing operator.

This repository provides a demonstration of the error and how to effectively fix it using modern JavaScript features.