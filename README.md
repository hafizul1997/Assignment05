## Dev Stack Builder

A modern React-based Dev Stack Builder where users can explore
different technologies and create their own development stack.

 ## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite
- JSON

  ## Features

- Browse technologies with category, difficulty, rating, and badges.
- Add technologies to your personal stack and remove them individually.
- Fully responsive design with loading state and toast notifications.


##  React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside
JavaScript or TypeScript. It makes React components easier to
write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child
component. State is data managed inside a component that can
change over time.

### 3. What does the useState hook do, and where did you use it?

`useState` allows a component to store and update data.
I used it to manage the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it?

`useEffect` runs side effects in a React component. It can be
used to fetch data after a component renders.

### 5. Why does every item in a .map() list need a unique key?

React uses the `key` to identify each item in a list and
efficiently update the UI when the list changes.

### 6. What is conditional rendering?

Conditional rendering means showing different UI depending on
a condition.

For example, I used it to show an empty message when no
technology is selected.

### 7. How do you pass data from a parent to a child component?

A parent passes data to a child using props. A child can send
information back by calling a function that the parent passes
as a prop.


Github Repository link: https://github.com/hafizul1997/dev-stack-builder
Vercel live link: https://dev-stack-builder-alpha.vercel.app/
