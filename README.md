# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: (https://phellwege.github.io/Tip_Calculator/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h4>
  Bill
  <input class="forms" id="billMe" type="number" class="form-control" placeholder="0" name="0"/>
</h4>
<div id="buttons_form">
                <h4>
                Select Tip %
                </h4>
                <div>
                    <button class="button" id="five" value=".05" onClick="getId(this)"> 5% </button>
                    <button class="button" id="ten" value=".10" onClick="getId(this)"> 10% </button>
                    <button class="button" id="fifteen" value=".15" onClick="getId(this)"> 15% </button>
                </div>
                <div>
                    <button class="button" id="twentyFive" value=".25" onClick="getId(this)"> 25% </button>
                    <button class="button" id="fifty" value=".50" onClick="getId(this)"> 50% </button>
                    <input id="custom" type="number" class="form-control" placeholder="Custom" min="1" max="100" class="button" id="custom" onClick="getId(this)">
                </input>
                </div>
            </div>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
function getId(btn) {
        const DeezeNuts = (btn.id)
        var billAmt = document.getElementById("billMe").value;
        var numOfPeople = document.getElementById("numberOfPeople").value;
        var tipPercent = document.getElementById(DeezeNuts).value;
        CalcTip(billAmt, tipPercent, numOfPeople)
    }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Peter Hellwege](http://peters-portfolio.net/)
- Frontend Mentor - [@phellwege](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

I was introduced to Frontend Mentor by Brendan Sullivan, whom I attended a coding bootcamp with. 

