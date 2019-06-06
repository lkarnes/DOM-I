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
ctaBtn.textContent = siteContent.cta['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

const headers = document.querySelectorAll('.main-content h4');
headers[0].textContent = siteContent["main-content"]['features-h4'];
headers[1].textContent = siteContent["main-content"]['about-h4'];
headers[2].textContent = siteContent["main-content"]['services-h4'];
headers[3].textContent = siteContent["main-content"]['product-h4'];
headers[4].textContent = siteContent["main-content"]['vision-h4'];


const content = document.querySelectorAll('.main-content p');
content[0].textContent = siteContent["main-content"]['features-content'];
content[1].textContent = siteContent["main-content"]['features-content'];
content[2].textContent = siteContent["main-content"]['features-content'];
content[3].textContent = siteContent["main-content"]['features-content'];
content[4].textContent = siteContent["main-content"]['features-content'];

const contentImg = document.querySelector('#middle-img');
contentImg.src = 'img/mid-page-accent.jpg';

const contactHead = document.querySelector('.contact h4')
contactHead.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact['address'];
contactInfo[1].textContent = siteContent.contact['phone'];
contactInfo[2].textContent = siteContent.contact['email'];

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';
