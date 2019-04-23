1.) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Used to catch bugs by developers before becoming a big problem. It is important because if you have a url string used for an image then it should be set to a string not a boolean equaling True or False. 

2.)Describe a life-cycle event in React?

The component is created and rendered, then looks for componentDidMount, if it finds one then mounts the data inside it and rerenders, otherwise it just renders. 

3.)Explain the details of a Higher Order Component?

A Component that takes a component and returns a new one. It is captured by a varable then rendered in JSX, and it can be a class component or a functional component. 

3.)What are three different ways to style components in React? Explain some of the benefits of each.

CSS- Easy to write and import within your files. Can be called by a class name, id, or by the JSX tag name.
Inline styles- Can be wrote within the JSX tag to see what goes with what. example: `<div style='color: blue'></div>`
Styled-components- Is a library for React that allows you to use already made styled-components in your app to style. Wrote with both CSS and Javascript. Just have to import and style.