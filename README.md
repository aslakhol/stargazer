# Stargazer - A web application providing information on characters from the movie- and TV-franchise Star Wars.

##  About the app

Stargazer is a web application where you can search for your favorite characters in the Star Wars universe. After searching for a character you can click on it and view more information about the character!

The idea was based around Swapi; a open source API providing datasets on numerous characters, vehicles, planets and more from the Star Wars universe. 

## Installing and running the project

Clone the repo locally on your computer.

Run `npm install`

Run `npm start`

The app is now available on localhost:3000


## Technical Decisions and Processes

### Backend / API

Read more about our backend in it’s own repository:

[https://gitlab.stud.idi.ntnu.no/augustss/backend-group-6-26-35](https://gitlab.stud.idi.ntnu.no/augustss/backend-group-6-26-35)




### AirBNB Linter - Our overlord

After great success with using this linter in our last project, it was a no-brainer decision to use it for this one as well. It has an extremely opinionated ruleset, which means that by following it we get a uniform codebase, while not having to research every little implementation detail of JS. It also saved us a lot of work linting and hours of headaches that we would have had while debugging.

After having used this linter for the last two assignments we have without a doubt become more aware and structured in our programming.  

### Redux
One of the requirements for the assignment is state handling using e.g. Redux; a predictable state container for javascript applications.

Redux allows applications to behave consistently and allows you to handle state in an effective manner, even though the application is complex and large. State is in our application passed through containers for each respective component, mapping the state to props. This allows us to seamlessly pass state through the application in a consistent manner.

Redux combined with a minimalistic approach to the App.js file and instead multiple smaller component files with respective containers gives the overall structure of the application a professional feel and yet simple-to-understand architecture.

### Swapi
Swapi is as mentioned earlier an open source API providing extensive data on characters, planets, vehicles and more from the Star Wars universe.

While the API provides extensive information and specifications it does not supply any pictures. As we wanted the pictures to play the lead role in the application we decided to import them through generating an appropriate URL for each character. Luckily, [starwars-visualguide](https://starwars-visualguide.com/), a website supplying much of the same services as we aim to provide, uses Swapi as-well, and they have supplied all characters with pictures. 
By appending their URL with the ‘person’ table, followed by /person.id followed by .jpg we could quickly extract all necessary pictures in real time, without having to tailor a solution of our own.

[Swapi](https://swapi.co/)


### NPM
In the previous assignment we went from NPM to Yarn, a package manager with many similarities to NPM, but because of a change of personal preferences we went back to using NPM.

### Bootstrap / React Strap
An early goal was for us to use as little CSS as possible, and instead depend upon some library of well designed components, saving us countless hours grinding front end.
We ended up using Bootstrap 4 through the [reactstrap](https://reactstrap.github.io/)  implementation. This gives us the Bootstrap 4 styling components, while being fully compatible with react. This allowed us to use more or less ‘out-of-the-box’ components for cards, modals, pagination and more, giving our application a spotless and unified look and at the same time saving us tons of work.


The beauty of using these components is also the ability to style and customize the components without CSS, and instead with Bootstrap’s own styling components. 

However, a few components required some CSS and inline styling (e.g. the header/title) since it proved to be difficult using Bootstrap. 

### Testing

#### Cypress
We used cypress to test the different UI components in our application to a desirable degree. We didn’t have any prior experience with cypress, however this showed to not be a problem, as cypress is really easy to get into and use. 

Testing bootstrap elements in cypress proved to be a small challenge as the class names of the elements follows a standard. For example, when searching for characters all of the different divs with the Card of a character has the same classname; ‘col-sm-6 col-md-3’. A lot of the cypress documentation calls on the classname of the specific element you want to test, which is a problem when you want to test a specific element that has the same classname as another element. Through some trial and error we made it work by some small workarounds, as you can see in the cypress-testfiles. 

#### Jest & Enzyme

To test our use of React and Redux we found an extremely good [guide](https://alligator.io/react/testing-react-redux-with-jest-enzyme/) which we took to heart and followed to its full potential. In the end we had about 30 different tests for our front-end. Including Jest & Enzyme, Cypress and Snapshot tests. 



### Use of GitLab and its CI

We use what we like to call minimized-git-flow. We are very fond of the git-flow framework, but some of the tools there are not quite necessary when you're not hosting a production app during development. One such example is that we use only a master branch, and not a develop branch. As done in out previous project, we also require that one person has to do a thorough code review and be pleased with the committed code, before the pull request was merged to master.

We used issues to layout our needs and feature set in the early development of the application. Throughout development we also sporadically used issues to note problems we found, that needed to be fixed. Other issues were closed after being referenced in pull requests, or PRs were referenced on the issues themselves. 

After receiving feedback from earlier projects about not having informative commit messages we decided to get better at this, as you can see from our commit history in this project. 

We decided early on to use GitLabs fantastic CI tool for our project. This tool enables us to build the application, then run tests on linting and functionality. If any of the tests failed, the person person pushing the branch had to rewrite his code so that it passed the tests. This enforced the principal of having a uniform codebase through running the linting test, while also enforcing that all of the tested functionality still worked.

At the writing moment, the pipeline has been run 108 times.

After reviewing the contributions and commits in GitLabs consensus is that we definitely need to get better at committing more frequently. Since members of the group pretty much worked individually on their own issues we have spent much time and progress locally rather than using GitLab efficiently and committing. This has resulted in one member committing much more than the others. 

### Project structure

We decided to have folders with the same type of files together, e.g /components/ has all of the component files. However we believe that we are at the point where if the project gets any bigger, we would change to a structure where files that work together are closer to each other in the structure.

As mentioned earlier this resulted in an overall structure with a streamlined feel and simple-to-understand architecture.
