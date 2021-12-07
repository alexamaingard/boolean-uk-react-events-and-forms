# Getting Started

`npm install`

`npm start`

## Instructions

In the sections folder you will find three sections to complete for this exercise.

You have `SignUp`, `Product` and `Booking`.

The aim of the exercise is to practice handling forms with React.

Inside each section folder you will find:

- a `index.js` file for the logic of each section **write code here and then break it down into components**
- a `components` folder with suggested components to create so you can practice props.

In the `SignUp` section you will find:

- a `template.html` that shows you an example of what your React components should create. Take note of `className` to get the styling working.

For each section you will need to:

- Use `state` to store your form data
- Use handler functions for your inputs
- Use a `handleSubmit` for your form which will `console.log` the form data

```
function handleSubmit(event) {
  event.preventDefault()

  const userData = {
    firstName,
    email,
    password,
  }

  console.log({ userData })
}
```

## Deliverables

Complete each section in the order below.

### The `SignUp` form should have:

- An input for the first name
- An input for the email
- An input for the password
- A checkbox for the terms and conditions
- Inputs should either have a `value` or `checked` attribute

This form you will write up from scratch and use the `template.html` to help you.

The `handleSubmit` should output something like this:

```
{
  userData: {
    firstName: "Rico",
    email: "rico@mail.com",
    password: "password",
    terms: true
  }
}
```

### The `Product` form should have:

- A `ColorSquare` that changes with the color selection
- Inputs should either have a `value` or `checked` attribute

This form you will write code to handle the inputs.

The `handleSubmit` should output something like this:

```
{
  productData: {
    size: "small",
    color: "red",
    quantity: 1,
  }
}
```

### The `Booking` form should have:

- Inputs should either have a `value` or `checked` attribute

This form you will write code to handle the inputs.

The `handleSubmit` should output something like this:

```
{
  productData: {
    date: "2021-12-15T16:00",
    roomServices: {
      newspaper: true,
      breakfast: false
    },
    spaActivities: [ "facial", "massage" ],
  }
}
```

## Challenges

- Refactor the checkboxes in the `Booking` form into a resuable component called `CheckboxesGroup`. So you can implement something similar to below where `{...props}` is replaced with relevant props:

```
<form>
  ...
  <CheckboxesGroup {...props} />
  <CheckboxesGroup {...props} />
  ...
</form>
```

- Build the `Product` or `Booking` form from scratch or create your own.
