// Task 3.0 instructions executed here:

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];




// Task 1.0
// Select and cache the <main> element in a variable named mainEl.

// define a constant variable named mainEl and use document.querySelect to grab the first html element main
const mainEl = document.querySelector("main");

// console.log to check the variable mainEl
// console.log(mainEl);



// Task 1.1
// Set the background color of mainEl using the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

// in the mainEl variable, which is the first main element of the HTML file, go to the style property, then the backgroundColor property and set that property's value equal to "var(--main-bg)" which is "#4a4e4d"
mainEl.style.backgroundColor = "var(--main-bg)";



// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

// define a h1El variable and make it an h1 element
const h1El = document.createElement("h1");

// check the h1El element
// console.log(h1El);

h1El.innerText = "SEI Rocks!";

// check the h1El element
// console.log(h1El);

// add h1El as a child element under mainEl
mainEl.appendChild(h1El);



// Task 1.3
// Add a class of flex-ctr to mainEl.

// go to mainEl and go to the classList property then use the add() method to add in "flex-ctr" as a class
mainEl.classList.add("flex-ctr");



// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

// define variable named topMenuEl and assign the element with the ID of "top-menu" to the variable
const topMenuEl = document.getElementById("top-menu");

// check topMenuEl
// console.log(topMenuEl);



// Task 2.1
// Set the height topMenuEl element to be 100%.

// go into the topMenuEl element, go to the style property, go to the height property within the style object and set the value of height to 100%
topMenuEl.style.height = "100%";



// Task 2.2
// Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

// go into the topMenuEl element and go into the style property, inside the style properpty, go to the backgroundColor property and set the value of that property to "var(--top-menu-bg)" as defined in the CSS file
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";



// Task 2.3

// go to topMenuEl and go to the classList property then use the add() method to add "flex-around" as a class of the element
topMenuEl.classList.add("flex-around");



// Task 3.0
// Copy the following data structure to the top of script.js:
// Assuming that script.js is the same as this app.js file

// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
// ];



// Task 3.1
// Iterate over the entire menuLinks array and for each "link" object:

// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.

// iterate through menuLinks calling each object within "link"
menuLinks.forEach(function(link) {
    
    // for each link, define a variable named newLink which is a newly created <a> element 
    const newLink = document.createElement("a");

    // in newLink, leverage the setAttribute() method to set an href attribute to the newly created <a> element named newLink
    newLink.setAttribute("href", "");

    // set the textContent property of newLink to the text property of the link object
    newLink.textContent = link.text;
    
    // append newLink to topMenuEl as a child element
    topMenuEl.appendChild(newLink);
});

