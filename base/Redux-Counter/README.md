# Redux Counter

## Topics

* Immutability in JavaScript
* Redux
* Actions
* Reducers
* The central store
* Connecting React components to Redux

![alt text](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

In this Project, you'll be eased into the code base of a small Redux application. The application itself is just a counter with increment and decrement buttons.

### Counter Project

* The increment button should increment the counter by 1.
* Conversely, the decrement button should decrement the counter by 1. The aim of this project is to familiarize you with the overarching data flow pattern of Redux, as well as exposing you to how Redux is typically hooked up to a React application.

* To run the project code, use the command `yarn` from the root directory to install your `node_modules`. Then `yarn start`. You'll see that the application isn't working.
* There are a couple of spots in the application where you'll need to write the code to get the application functional.
* These spots are in `reducers/index.js`, `actions/index.js`, and `components/Counter.js`.

The code is pretty heavily commented. This is to help clear up everything that is going on with the code you have been provided.

> When it comes to setting up a Redux application and hooking it up to React components, there is a decent amount of boilerplate, but the benefits that Redux gives you when it comes to predictability and simplicity of your data flow are worth it - especially when your application scales out and becomes much larger!

Take your time walking around the code base. There are lots of informative little tidbits in the comments that you won't want to miss. **_I highly encourage you to look at every file first before trying to write any code._**

If you end up finishing quickly, you'll see there are a few Stretch Problem prompts at the top of the `Counter.js` component file. Feel free to take a stab at implementing those. Or, you could take a look at the awesome Redux documentation [here](http://redux.js.org/docs/basics/).

Good luck and have fun!
