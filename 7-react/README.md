# 7: React
That `$(whatever).append` nonsense is ug-ly. But, how else can we unify JS and HTML more reasonably?

Enter React.

## Whence React?
[React](https://facebook.github.io/react/) was created by Facebook Developers who were tired of slow, hard-to-use JavaScript frameworks. So they came up with a new way of thinking about apps: from the UI first. That's why in React, everything is a **component**.

## Components
We can conceptually divide every user interface into regions of functionality. Obviously the browser window contains the entire app, but perhaps there's a header, a menu, a primary view, etc. Each of these will be made of certain HTML elements requiring certain data to populate. React solves the problem of writing user interfaces that change as the data (or state) changes by creating a new way of creating document elements with JavaScript: JSX.

## JSX
JavaScript + XML = JSX. Put simply, you can write HTML in your JavaScript, like returning HTML elements as the result of functions.

How does this work? Let's go through it together.
