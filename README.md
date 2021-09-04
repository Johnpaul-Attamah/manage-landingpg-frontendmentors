# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
![image](https://user-images.githubusercontent.com/44214523/132107961-272e308d-205a-485d-a80f-bfa9a7609437.png)


### Links

- Solution URL: [view codes](https://www.frontendmentor.io/solutions/responsive-room-homepage-using-css-flexbox-and-vanilla-javascript-kB11NzD5N)
- Live Site URL: [Go live](https://vigorous-noether-686b27.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- vanilla Javascript

### What I learned

## HTML 
- How to structure markup for pages
- How to structure for mobile first responsiveness
- How to use responsive images with svgs
- when to use css back ground images versus markup img tags
- Advanced svg styling with css
- How to change mobile and desktop structure dynamically
- using inline svgs

## Css
- Group elements together with classes
- Write css media query for larger screens
- Interpret png designs into live web pages
- Remove extra margin in images by setting display to block
- using css transitions to control navigation display
- how to display text or images over images
- styling inline svgs
- lots more

```css
...
*::before {
    box-sizing: border-box;
}

:root {
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --
...
```
## Javascript
- Hiding and showing css classes
- toggling css classes
- setting html body to fixed when there is popup
- implement automatic carousels with intervals
- email validation

```js
    ...
      const errorNotice = document.querySelector('.email-input .validation-error');
    const submitForm = document.querySelector('.main-footer form');

    function validateEmail(email) {
        return (/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
    }


    function submitSuccess(message) {
        let div = document.createElement('div');
        div.setAttribute('style', `
            position: fixed;
            text-align: center;
            font-size: 2rem;
            bottom: 40%;
       
    ...


    ...
         index = 0;
        } else {
            index++;
        }
        
        moveToSlide(activeSlide, activeIndicator, slides[index], indicators[index]);
    }

    indicatorBox.addEventListener('click', (e) => {
        if(!e.target.closest('.slider-controls div')) return;
        targetIndex = indicators.findIndex(indicator => e.target === indicator);
        index = targetIndex;

        let targetIndicator = indicators[targetIndex];
        let targetSlide = slides[targetIndex];
    ...
```
### Continued development

- build more pages with css flexbox
- structure more advanced templates / layouts
- responsive design
- advanced dom manipulations
- basic Javascript aapplications


## Author

- Website - [Johnpaul Attamah](https://github.com/Johnpaul-Attamah)
- Frontend Mentor - [Johnpaul-Attamah](https://www.frontendmentor.io/profile/Johnpaul-Attamah)
- LinkedIn - [Johnpaul](https://www.linkedin.com/in/johnpaul-attamah-4b265983/)

