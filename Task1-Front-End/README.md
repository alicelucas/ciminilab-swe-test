# Front-End Take-Home Project

This codebase was made using [Create React App](https://create-react-app.dev/) with the [cra-template-redux-typescript](https://www.npmjs.com/package/cra-template-redux-typescript) template, and then modified to incorporate a example transfer learning project provided by the Tensorflow team [here](https://github.com/tensorflow/tfjs-examples/tree/master/webcam-transfer-learning). Essentially, it is a Typescript based React app, using Redux (and Redux toolkit) for state management, and Tensorflow.js for model training.

## Resources

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tensorflow.js](https://www.tensorflow.org/js)

## App Description

The application is a Pacman game (code originally from Google; try googling Pacman to see the original). The game can be played using the keyboard's arrow keys, but that's very 1980s. We want to play the game using the webcam. To do so we'll take a few training images for each of the up, down, left and right positions. For example you can take a set of images pointing up, for the up direction, and so on for the others. We'll then transfer learn on a pretrained MobileNet, passing in these training images. We're essentially training a classifier to detect up, down, left, and right images. When we click "play", the webcam will continuously take new images, and pass them to the trained model for inference. If it was trained decently, when you point up pacman will go up, and so on for the other directions.

Don't worry if you're a bit fuzz on terms like "transfer learning". You won't need to create any deep learning models from scratch. It's already done for you.

You can see and use the complete version [here](https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html) for reference. There may be some stylistic differences between that and this code, but the functionality should be identical.

## The Task

The code is currently incomplete. Your task is to complete it. You are encouraged to use whatever online resources or books that you want. That includes reading documentation on the tech stack (links provided above), and the [original source code](https://github.com/tensorflow/tfjs-examples/tree/master/webcam-transfer-learning) for the app. You may not solicit the help of other people (friends, family, classmates, etc.), although you are free to email us to ask questions.

Do not feel that you must read all of the documentation linked above, even if you are not acquanited with a tool. We're not using all of the features the various tools, and so you really need to have a broad understanding. It may even help to watch a YouTube video, or search for a tutorial, instead of reading the docs directly.

Likewise, do not feel the need to full investigate every line of the original source code, or even the assignment code. Although it's not a terribly large and complex application, and you certainly could cover it all if you felt inclined, you don't need to acquaint yourself with every line. You only need to understand enough to finish the assignment.

You may use whatever tex editor or IDE you want, and whatever tools you want.

### Steps

The first step is to download (`git clone`) the code and install the dependencies with `npm install`.

### Fix Compiler Errors

`npm start` will run the app in development mode, serving to [http://localhost:3000](http://localhost:3000). The code will compile (actually transpile), and any edits you make will autoreload the compiler and page. You'll notice that at first the compiler will show type erros). You will need to address those as you go. A successfully submitted project will have no warnings or errors, and the compiler will show ("Compiled Successfully!" with "No issues found.").

Make sure to actually address the warnings and errors. Do not simply use `//@ts-ignore` or `//eslint-disable` (although some are already present in the codebase, and you may leave those there).

NOTE: The `@typescript-eslint/no-unused-vars` warnings are related to functions that are currently unused, but will be used once you complete the below tasks. Make sure you don't just delete them before moving on. Likewise the compiler errors are things you need to fix by providing the missing code, not by removing it.

Of course can delete/remove things if you want. But be mindful that when you delete something it means you have decided to implement an alternative solution (which is perfectly fine), not because it was unecessary in the first place and we expected you to remove it.

### Complete Functionality

You'll also notice that the app is not fully functional. It's your task to make it fully functional.

On minor thing to note regarding `react-redux` is that you should proabably use `useAppDispatch` and `useAppSelector` available in `src/app/hooks`, instead of `useDispatch` and `useSelector`. They're already pretyped for you. `types.d.ts` may be helpful as well.

It is important you don't complete the missing functionality by writing vanilla javascript and calling it from react. You should write idiomatic react code (use your best judgement on what that means). Any files you create should be `.ts` or `.tsx` files, not `.js` or even `.jsx`. If you find yourself writing `document.getElement...` (e.g. `document.getElementById` or `document.getElementsByClassName`), or `.addEventListener`, you're probably doing something in a non-react way.

You don't have to do anything related to styling, but you can if you want, and can do it however you want.

You don't have to write any tests, but you can if you want, and can do it however you want (if you do, make sure you document them and how to run them).

You will not need to include additional packages in `packages.json`. If you find something small and particularly helpful however, you may include it.

Here are the things you'll need to write to make the app fully functional.

#### Initialize Webcam

In `src/components/Controller.tsx`, initialize the webcam. The analogous code in the original (non-react) code is in [index.js, lines 181-196](https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js#L181) (ignore line 187 since that's already done for you).

This is not done in line 182 of the original code, but you may want to pass the following [`WebcamConfig`](https://github.com/tensorflow/tfjs/blob/master/tfjs-data/src/types.ts#L127) object to `tfd.webcam`: `{resizeWidth: 224, resizeHeight: 224,}`. It helps ensure the outputshape is the same across different browsers.

One tip here. You may be tempted to do a `useRef` to get a reference to the webcam (the `<video>` element in `src/components/TrainingPanel.tsx`). The problem with that is `useRef` doesn't notify you when its content changes. My advice is to use `useCallback` instead in order to respond to the `<video>` element mounting to the DOM. [See here for additional details](https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae). If you don't want to use a ref at all, and have another approach (e.g. an `onX` attribute on the `<video>` element), feel free. If you choose not to use a ref, make sure you update `src/components/TrainingPanel.tsx` by discarding that as a prop and removing it as an attribute from the `<video>` element.

Again, up to you, but you may want to create a custom hook, like `useWebcam`, returning the webcam iterator (and possibly webcam ref via `useCallback`).

Finally notice that in `src/store/uiSlice` there is a `webcamStatus` field. Make sure you dispatch an action to change that when the webcam is loaded. You'll notice the `src/App.tsx` component relies on the status being set properly.

You may find `types/WebcamIterator` helpful.

#### Add Image Functionality

`src/components/JostickPanel` makes use of `src/components/RecordButton`, one for each of the up, down, left, and right directions. In the UI, these are the boxes around the joystick. When the user clicks down on one of the boxes, the current frame from the webcam is captured and assigned to the respective direction. If the user holds the mouse down, more frames are caputred. When the user de-presses the mouse, frames are no longer captured.

You can see the original code for this in [ui.js, lines 90-100](https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/ui.js#L90), and the associated handler on [lines 76-88](https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/ui.js#L76).

You'll notice the async `handler` function takes in a label (number 0-3), corresponding to a direction in an array called `CONTROLS`. The same array lives in `app/constants.tsx`.

You'll also notice that it's passing the label to `addExampleHandler`. This is initialized on [line 62](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/ui.js#L62), but it was set in [index.js, on line 51](https://github.com/tensorflow/tfjs-examples/blob/master/webcam-transfer-learning/index.js#L51).

In that set `addExampleHandler`, there's a `draw` function, which is already defined for you at the top of `src/components/RecordButton.tsx`. It also calls the async `getImage` function, which you can just copy over verbatim and put wherever it best fits your solution.

You'll also notice that in `handler` there is a [`while` loop](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/ui.js#L81). This is important. You can't siimply attach a `onClick` handler to the button in `src/components/RecordButton.tsx`. You need to handle the case where a user holds the mouse down to take multiple images.

I don't recommend simply defining a `while` loop in the react code. Firstly i'd be suprised if you made it work, but even if you did it's probably not the best approach. Instead I would recommend using `setInterval`, with a delay of something like `100` milliseconds. If using a `useEffect`, don't forget to return a function that calls `clearInterval`. See [here](https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) for more details.

#### Predict (Play) Functionality

`src/components/TrainingPanel.tsx` makes use of `src/components/TrainButton.tsx` and `src/components/PredictButton.tsx`. The `TrainButton` component is already complete (other than missing type information). You can see the analogous code in [index.js, on line 167](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L167), and the associated click handler on [line 64](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L64). One thing to note, is that it dispatches a `setPredicting(false)` action to the store, setting the corresponding `predicting` flag in `src/store/modelSlice` to false.

The `PredictButton` component is not complete. You can see the implementation in the original source code in [index.js, on line 174](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L174), and the associated handler on [line 129](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L129).

Notice that before it calls the `predict` handler, it calls [`ui.startPacman`](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/ui.js#L43). The code for the pacman game lives in `src/pacman-google.js`, and it was already initialized for you in `src/App.tsx` with `require("pacman-google")`. You'll notice there is already a `onClick` handler on the button in `src/components/PredictButton.tsx`, which calls `window.google.pacman.startGameplay()`. You may leave the `//@ts-ignore` above that line alone; you don't need to fix any type errors associated with that line. It then dispatches `setPredicting(true)` to the store.

So the `TrainButton` component sets the `predicting` flag in `modelSlice` to `false`, and the `PredictButton` component sets it to true. The `PredictButton` component also gets changes to the flag via `useAppSelector(selectPredicting)`.

Your task is to complete the functionality so that when `isPredicting` is `true`, the same thing that happens in the original code's [`predict` handler](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L129) happens in our code. You'll notice there is another while loop to contend with. Luckily, it's a very similar solution to the previous task. You should probably again leverage a `setInterval` and `clearInterval`, instead of writing a `while` loop directly. The [`getImage`](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/index.js#L159) and [`predictClass`](https://github.com/tensorflow/tfjs-examples/blob/7283c559897e29e33a09aa451bfc643e2354c090/webcam-transfer-learning/ui.js#L47) functions used in the original code are also already at the top of `src/components/PredictButton.tsx`. The rest of the code in the original code's `while` loop can more or less be copied over verabatim. The only challenge is getting the loop to run smoothly.

#### Double Check

If you do the tasks above correctly, you should be able to hop into the UI, and press "add image" on each of the directions. Strike a distinct pose for each of the "add image" boxes, and take a pictures with minor variations of each pose. Then press the "train" button. You should see the loss update (you can play with the hyperparameters if you want to, and try pressing "train" more than once to get it as low as you can). Then click the "play" (predict) button to start pacman. You should be able to strike a pose for each of the respective directions, and move pacman. Everytime you strike a pose, one of the 4 boxes will be highlighted in a yellowish/goldish color, and pacman should move in the same direction corresponding to the direction the box is associated with.

## Submit

Submit your code. If you'd like, document your changes, and explain your reasoning. Make sure to provide us instructions on how to get your solution. Either provide a zip, or put it on GitHub (private repository only) and make sure we have access. Do not make your solution publicly accessible!

My Github account name is [gnodar01](https://github.com/gnodar01/).
