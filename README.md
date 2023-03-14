# Registration Input and Validation with useContext

In the last project, the app displayed 3 different screens using context. It could be considered validation of user registration data. In this project, you will add functionality to the app so the user enters the data, and a new screen displays it all at the end, asking if the data is valid. You will update the data in the context so that it can be changed and retained as needed.

Here are screens showing the new version of this app:

context-edit-1.PNG     context-edit-2.PNG

 

context-edit-3.PNG     context-edit-4.PNG

 

context-edit-5.PNG

Below are the alerts that will display when the user presses the buttons, the "Yes" alert on the left, the "No" alert on the right. Notice that you can see the first screen behind the alert boxes -- when the button is pressed, it navigates to the top of the stack, and that screen is barely visible behind the alert box.

context-edit-6.PNG     context-edit-7.PNG

 

Start by making a COPY of the previous project.

### Step 1, Context file

In this project, the context needs to have functions for changing the data. As you saw in the Udemy course, you can add functions to data in the context, and those functions are accessible wherever the context is used. The functions and initial state of any data are passed with the context using the "value" parameter in the Provider for the context. In the Udemy video, this was accomplished by creating the context object in a file, then adding a component (function) which had "Provider" in its name. That function returned the context.Provider with the value, surrounding the children of the component. This is done to make a complete file that contains all the information about the context. If you put the context.Provider component in the App.js file, you need to declare all of the functions and initial data that will be used in the "value" parameter in the App.js file. For better separation of concern, you will put it all into the context file as demonstrated in the Udemy videos. 

Begin with the context file, where you have declared the context -- in the previous project instructions, it was named UserContext, within the userContext.js file. This variable was exported in that file -- not as a function with a return statement, just a named variable, which was imported in other components. Now, you need to add a function component to export with "export default". In the video, it was named with "Provider" in the name, so here, you would create the function "UserContextProvider". In that function. add the functions to set the first name, the last name, the phone number, and the email. It should not be a surprise that these will need to use state to keep track of the contents of those variables in the context. This was demonstrated in the video -- do the same here for the 4 variables of the context. Once the states are set up and the functions are written to change the state, declare the constant "value", which specifies which variables and functions to assign to the context. Refer to the Udemy video, where you see code like "addFavorite: addFavorite" -- if you used the same name for the function definition as the function, you will also be repeating names like that. The return from this UserContextProvider function with return the context with its Provider component. That code, if you follow the video, would be:

The basic outline of this context file will be:

   export const UserContext = createContext({ ... } );
   function UserContextProvider({ children}) { 
      ... set up state and functions to use state
      ... const value={ the data and functions included in the context };
      return <UserContext.Provider value={value}>{children></UserContext.Provider>;
   }
   export default UserContextProvider;

It can be confusing with the "UserContextProvider" and the "UserContext.Provider" code. The function named "UserContextProvider" will wrap around everything in the main screen. Inside of that component, it will set up the React Native Provider component that is used with context and include the values and functions for the context. It is possible to set up the entire context in the App.js file, in which case you wouldn't need the component "UserContextProvider", but there is enough content in this context that it makes better sense to separate it from App.js, and import the context into App.js. So in App.js, you would import the function (UserContextProvider), which includes the UserContext.

### Step 2: App.js file

In the previous project, you set up the initial state for the data in this file -- it is now being handled in the context file, so delete those lines of code. The whole stack was wrapped with the Provider component of the context -- as just discussed, you have set up that Provider in the context file now, so you need to change that line of code to use <UserContextProvider> component, instead of <UserContext.Provider value=...>. You will be adding a new screen, to validate the user's input, you can add it now or add it later after you've coded it.

### Step 3: Data screens

There were 3 screens in the previous project, for names, phone, and email. You will use those in this project, adding text input so the user can type in their registration data. Note that you need to reference the context variables in the "value" parameter of the text input, and call the function to set the variables in the onChangeText parameter of the text input. Be sure to include a place holder, so that when the context is null, it prompts the user to enter the appropriate data.

For the phone number, be sure the keyboard is a numeric one, not the default alpha-numeric one.

Add a new piece of navigation on these screens -- the user can press a Button that says "Next" to go to the next screen, rather than having to return to the main screen using the Back button to proceed. You do this with an onPress parameter on the button that uses "navigation.navigate("screenName"). You will have to put "navigation" in the props for this component. Navigate from the name to the phone to the email to the validation screen.

### Step 4: Validation screen

This is a new screen, which displays all of the data and asks the user if the data is correct. The user presses a "Yes" or a "No" button, and the onPress action is an alert. In the alert, the first parameter is the text that displays, and the optional second parameter can be navigation. Use "navigation.popToTop()" so that the user goes to the main screen when they press OK on the alerts. Note that the buttons are not the default blue ones, but use some other color; they are side by side instead of vertical; they are the same width.

 

Take 7 screenshots, as shown above.

Submission: Zip together the root folder and the 7 screenshots, and submit the single zipped folder.

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
