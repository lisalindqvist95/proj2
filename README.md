[View live project here](https://lisalindqvist95.github.io/proj2/)
# Crystal Universe
## About
Crystal Universe is a site with fun but silly features to entertain the user. The site is targeted towards anyone who enjoys fortune telling in popular culture like tarot readings, fortune cookies or magic 8-balls. This idea is based on the popularity of similar filters on TikTok where the user can receive a randomized answer, letter or number as well as the rise of tarot readers on social media. The site contains features where the user can ask a yes- or no question and get an answer, receive a lucky number, receive a message or play a game of dice. 

![Responsive Mockup](https://github.com/lisalindqvist95/proj2/blob/main/media/mockup.png)

## Features
- __The Crystal Universe Logo/Heading__

  - The logo/heading is featured at the top of the page.  
  - It is glowing to attract the attention of the user and to create a magical ambiance on the site. 
  - The blinking/glowing is set to be quite slow in order to not be too distracting for the user. 

![Heading](https://github.com/lisalindqvist95/proj2/blob/main/media/heading.png)

- __Navigation Bar__

  - The Navigation bar is placed under the heading and has the title for each feature in order to make it easier for the user to navigate on the site. 
  - The text in the navbar changes color if the user hovers over it to show the user that it is a clickable link.

![Nav Bar](https://github.com/lisalindqvist95/proj2/blob/main/media/navbar.png)

- __The ”Ask a question”-feature__

  - This section allows the user to type a question and receive an answer.  
  - The answer is randomized just like a magic 8-ball. 
  - The question as well as the answer is printed in case the user would like to take a screenshot and share with friends. However if the user can’t be bothered to type out the question they can also just click the ask-button and receive the answer.

![Ask a question](https://github.com/lisalindqvist95/proj2/blob/main/media/ask.png)

- __The ”Todays lucky number”-feature__
 
  - This section provides the user with a lucky number for the day. 
  - The number is randomized between 0-9999 in order for the user to be able to get angel numbers. 
  
 ![Lucky number](https://github.com/lisalindqvist95/proj2/blob/main/media/nr.png)

- __The ”Receive a message”- feature__

  - Based on fortune cookies this feature gives the user a randomized message.

![Message](https://github.com/lisalindqvist95/proj2/blob/main/media/message.png)

- __The ”Play a game”- feature__
  
  - Based on the popularity of [Bones/no bones-day](https://www.npr.org/2021/10/19/1047302978/noodles-pug-bones-no-bones-day-tiktok-mood-prediction) on TikTok, this game lets you play a game of dice against the universe to see wheatear what kind of day you will have.
  -  If the universe wins it’s a sign that you should lay low that day and if the user wins it’s a sign to seize the day. 

![Dice game](https://github.com/lisalindqvist95/proj2/blob/main/media/game.png)

 ### Possible Features to Implement

 - __Tarot cards__

   - This site could have a feature which gives the user one or more tarot-cards for an online reading. Since most of the other features are based on giving the user a reading of the current day, the tarot card could be a prediction of the current day. 

 - __Visuals__

   - There could be animated visuals for each feature instead of just text, for example an animated magic 8-ball for the ask-function. 

 - __Share on social media__

   - Since a lot of these features are already popular on social media, a part of the appeal is sharing the results with your friends. Therefore a feature could be a link for the user to share on social media. 

## Testing

### Responsiveness

  - The website is responsive so that it can be used on different screen-sizes. 
  - It has three media queries for different sizes: max width of 865px, max width of 600px, 425px. The width was chosen based on when the layout started to look distorted. If more features and visuals are added to the site it will mots likely need to be adjusted with more mediea queries. 
  - The responsiveness was tested using DevTools.
  - Sometimes depending on the sixe of the window, the background got distracting for the readability of the navbar, this was fixed by adding a background color to the navbar. 

### Browser Testing

  - The website is tested on the commonly used browsers: Chrome, Safari, Edge, Firefox and Opera. 
  - All features worked oon the tested browsers.
  - In Firefox there was an issue with the background not covering the entire page when the site was viewed in a very narrov window. This was fixed by adjusting the content within the media queries. 

### Validator Testing 
   - HTML
     - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flisalindqvist95.github.io%2Fproj2%2F)
   - CSS
     - No errors were found when passing through the official [(Jigsaw) validator]()
   - JavaScript
     - No errors were found when passing through the official [(Jigsaw) validator](https://jshint.com/)
        - There are 9 functions in this file.
        - Function with the largest signature take 1 arguments, while the median is 0.
        - Largest function has 11 statements in it, while the median is 3.
        - The most complex function has a cyclomatic complexity value of 3 while the median is 1.


## Unfixed Bugs 
  - __Background__
   - Sometimes when resizing the window so that it is smaller than the content height, the background will not rezise to fit the window sice it is based on the height of the window. The background color is set to match the background image in order for this to not disturb the user.
   

## Deployment
  - The site was created via GitPod an deployed to GitHub pages using the following steps: 
    - The material is added and pushed to GitHub via GitPod
    - In the GitHub repository go to the settings tab above the code
    - In the settings tab navigate to pages
    - Fill in the source Deploy from a branch and choose "main" and save

## Credits

 ### Content

  - The icons in the navigation bar are from [Font Awesome](https://fontawesome.com/)
  - Some answers to the "Ask a question" feature came from this [Wikipedia article](https://en.wikipedia.org/wiki/Magic_8_Ball)
  - Some messages for the "Receive a message" feature came from this article on [Your Dictionary](https://examples.yourdictionary.com/articles/funny-fortune-cookie-sayings.html)
  - Flex container example code came from [w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flex-wrap_wrap)
  - Glowing text came from [w3schools](https://www.w3schools.com/howto/howto_css_glowing_text.asp)
  - How to randomize an array (Fisher-Yates shuffle algorithm) came from[w3docs](https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html)
  - Help with user input and response came from this [Youtube tutorial](https://www.youtube.com/watch?v=KB6Yg5hNrqc)
  - Help to clear input field came from [w3schools](https://www.w3schools.com/howto/howto_html_clear_input.asp)
  - Help with triggering a a button on enter came from [w3schools](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp)
  - Dice game and images came from [Geeksforgeeks](https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/)
  - Help with links within a javascript string came from [w3schools](https://www.w3schools.com/jsref/jsref_link.asp)
 
 ### Media
   - The photos used on the site and merch were taken from [Unsplash](https://unsplash.com/)
     






