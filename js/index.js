const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const newNav1 = document.querySelectorAll("nav")[0]
let newA1 = document.createElement("a")
newA1.textContent="helloWorld"
newNav1.appendChild(newA1);

const navItem = document.querySelectorAll('.container a');
navItem[0].textContent = siteContent.nav['nav-item-1'];
navItem[1].textContent = siteContent.nav['nav-item-2'];
navItem[2].textContent = siteContent.nav['nav-item-3'];
navItem[3].textContent = siteContent.nav['nav-item-4'];
navItem[4].textContent = siteContent.nav['nav-item-5'];
navItem[5].textContent = siteContent.nav['nav-item-6'];
navItem.forEach( (element) => {
  element.style.color = 'green';
})

const headerImg = document.querySelector('#logo-img');
headerImg.src = siteContent.nav['img-src'];

const ctaHead = document.querySelector('.cta h1');
ctaHead.textContent = siteContent.cta['h1'];

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";

const headers = document.querySelectorAll('.main-content h4');
headers[0].textContent = 'Features';
headers[1].textContent = 'About';
headers[2].textContent = 'Service';
headers[3].textContent = 'Product';
headers[4].textContent = 'Vision';


const content = document.querySelectorAll('.main-content p');
content[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contentImg = document.querySelector('#middle-img');
contentImg.src = 'img/mid-page-accent.jpg';

const contacthead = document.querySelector('.contact h4');
contacthead.textContent = 'Contact';
const contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = '123 Way 456 Street Somewhere, USA';
contactContent[1].textContent = '1 (888) 888-8888';
contactContent[2].textContent = 'sales@greatidea.io';

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';
