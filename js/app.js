// Task 5.0 instructions executed here:

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
];




// Task 3.0 instructions executed here:

// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
// ];




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
    newLink.setAttribute("href", link.href);

    // set the textContent property of newLink to the text property of the link object
    newLink.textContent = link.text;

    // append newLink to topMenuEl as a child element
    topMenuEl.appendChild(newLink);
});



// --Part 1 completed above--



// --Part 2 found below--



// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

// define a variable named subMenuEl and assign the value of the variable as the element with the id of "sub-menu"
const subMenuEl = document.getElementById("sub-menu");

// check subMenuEl
// console.log(subMenuEl);



// Task 4.1
// Set the height subMenuEl element to be 100%.

// go to subMenuEl element, enter the style property, then enter the height sub-property and set the value of height to 100%
subMenuEl.style.height = "100%"



// Task 4.2
// Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.

// go to subMenuEl element, go inside to the property of style, go inside to the sub-property of backgroundColor and set its value equal to the CSS element of --sub-menu-bg
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"



// Task 4.3
// Add the class of flex-around to the subMenuEl element.

// go to the subMenuEl element and go into the classList property and leverage the method of add() to add the "flex-around" value as a className of the element
subMenuEl.classList.add("flex-around");



// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.

// go to the subMenuEl element, enter the style property, enter the position property and set the position property's value to "absolute"
subMenuEl.style.position = "absolute";



// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.

// go to the subMenuEl element, grab the style property, grab the top property and set the top property's value to 0
subMenuEl.style.top = "0";



// Task 5.0
// Replace the menuLinks array in script.js with this version that adds sub-menu data:

// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//       {text: 'all', href: '/catalog/all'},
//       {text: 'top selling', href: '/catalog/top'},
//       {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//       {text: 'new', href: '/orders/new'},
//       {text: 'pending', href: '/orders/pending'},
//       {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//       {text: 'profile', href: '/account/profile'},
//       {text: 'sign out', href: '/account/signout'},
//     ]},
// ];



// Task 5.1
// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

// define a variable named topMenuLinks and populate the variable with the <a> elements from topMenuEl using querySelectorAll to select multiple elements
const topMenuLinks = topMenuEl.querySelectorAll("a");

// checking topMenuLinks for <a> elements
// console.log(topMenuLinks);


// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;



// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// 👀 Hint: DOM elements have a tagName property.

// console.log the content of the <a> to verify the handler is working.

topMenuEl.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.tagName !== "A") {
        return;
    };
    
    // progress check
    console.log(event.target.text);
    

    // Task 5.3
    // This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.
    
    // Next in the event listener, if the clicked <a> link has a class of active:
    
    // Remove the active class from the clicked <a> element.
    // Set the showingSubMenu to false.
    // Set the CSS top property of subMenuEl to 0.
    // return; from the event listener function.
    if (event.target.className === "active") {
        event.target.className = "";
        showingSubMenu = false;
        subMenuEl.style.top = 0;
        
        // progress check after 5.6
        // topMenuLinks.forEach(function(link){
        //     console.log(`${link.text}: ${link.className}`);
        // })
        
        return;
    };


    // Task 5.4
    // At this point, a new menu item has been clicked and it's time to "reset" any currently active menu item...
    
    // Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.
    
    // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
    
    topMenuLinks.forEach(function(topMenuLink) {
        topMenuLink.classList.remove("active");
    });


    // Task 5.5
    // Performed below within Task 5.6
    // Next, the event listener should add a class name of active to the <a> element that was clicked.


    // Task 5.6
    // Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

    // Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7

    let menuLinksIndex = 0;
    let menuLink;
    // console.log(menuLinks[0].text);
    // console.log(event.target.innerText.toLowerCase());

    for (i = 0; i < menuLinks.length; i++) {
        if (event.target.innerText.toLowerCase() === menuLinks[i].text) {
            menuLink = menuLinks[i];
            // Task 5.5
            // Next, the event listener should add a class name of active to the <a> element that was clicked.
            event.target.className = "active";
            if (menuLink.hasOwnProperty("subLinks") === true) {
                showingSubMenu = true;
            } else {showingSubMenu = false;};
        };
    };

    
    // console.log(showingSubMenu);
    // console.log(menuLink);
    
    // progress check    
    // topMenuLinks.forEach(function(link){
    //     console.log(`${link.text}: ${link.className}`);
    // })


    // Task 5.7
    // Next in the event listener...

    // If showingSubMenu is true:

    // Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
    // Set the CSS top property of subMenuEl to 100%.
    // Otherwise (showingSubMenu is false):

    // Set the CSS top property of subMenuEl to 0.
    // Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.

    if (showingSubMenu === true) {
        const clickedSubArray = menuLink.subLinks;
        buildSubMenu(clickedSubArray);
        subMenuEl.style.top = "100%";
    } else {
        subMenuEl.style.top = "0%";
        mainEl.innerHTML = "<h1>about</h1>";
    };


    // Task 5.8
    // Code the buildSubMenu function so that it:

    // Clears the contents of subMenuEl.
    // Iterates over the subLinks array passed as an argument; and for each "link" object:
    // Create an <a> element.
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    // Set the new element's content to the value of the text property of the "link" object.
    // Append the new element to the subMenuEl element.

    function buildSubMenu(subLinksInput) {
        subMenuEl.textContent = "";
        subLinksInput.forEach(function(subLink) {
            const newEl = document.createElement("a");
            newEl.setAttribute("href", subLink.href);
            newEl.textContent = subLink.text;
            subMenuEl.appendChild(newEl);
        });
    };

    // progress check



    // Task 6.0
    // Attach a delegated 'click' event listener to subMenuEl.
    
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    
    // The second line of code function should immediately return if the element clicked was not an <a> element.
    
    // console.log the content of the <a> to verify the handler is working.
    
    subMenuEl.addEventListener("click", function(event) {
        event.preventDefault();
    
        if (event.target.tagName !== "A") {
            return;
        };
    
        console.log(event.target.text);
    
    
        // Task 6.1
        // Next, subMenuEl's event listener should:
        
        // Set showingSubMenu to false.
        // Set the CSS top property of subMenuEl to 0.
    
        showingSubMenu = false;
        subMenuEl.style.top = "0";
    
    
        // Task 6.2
        // Next, subMenuEl's event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
    
        topMenuLinks.forEach(function(link) {
            link.classList.remove("active");
        });
    
    
        // Task 6.3
        // Next, subMenuEl's event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
    
        h1El.textContent = event.target.text;
    
    });
});