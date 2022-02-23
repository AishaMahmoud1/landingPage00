



/*
    * a button that go up when scrolling.
    * the button appear after going down 147px and disappear when less than 147px.
    * it's works by selecting the id then assigned it to myButton.
 */

let myButton = document.getElementById('btn');

window.onscroll = ()=> scroll();




    // navbar.classList.add('active');

    // sections.map(sec =>{

    //     let top = window.scrollY;
    //     let height = sec.offsetHeight;
    //     let offset = sec.offsetTop - 150;
    //     let id = sec.getAttribute('id');

    //     if(top >= offset && top < offset + height){
    //     navLinks.forEach(links =>{
    //         links.classList.remove('active');
    //         document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
    //         });
    //     };

    // });


function topFunc(){
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(1000, 0);
}

function scroll(){
    if(window.scrollY > 147){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}




/*
    * this creates the nav item and add them to every section based on data-nav which leads to 7section.
    * at first selecting the element by id then assigned it to menu then selecting every section and assigned it sections.
    * then using forEach to append every nav item to the Dom.
 */

const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    const sectionData = section.getAttribute('data-nav');
    const sectionId = section.getAttribute('id');
    let navItem = document.createElement('li');
    navItem.innerHTML=`<a href='#${sectionId}' class='menu__link'>${sectionData}</a>`;
    menu.appendChild(navItem);  
});


/*
    * this for active state to be changed after observing.
    * when true the section becomes active and when false the function removes the active state.
*/
// const navLinks = document.querySelectorAll('nav li ');



const changeActiveState = (els, observer) => {
    els.map((el) => {
        if (el.isIntersecting && el.intersectionRatio == 1) {
            el.target.classList.add('your-active-class');
            el.classList.add("active-link");
            console.log(el);
        } else {
            el.target.classList.remove('your-active-class');
            // navLinks.classList.remove("active-link");

        }
    });
};




// let list = document.querySelectorAll('a');
// list.forEach(a => {
//     a.addEventListener('click', function (){
//         list.forEach(a => a.classList.remove('active'));
//         this.classList.add('active');
//     })
// })

// let navbar = document.querySelectorAll('li');
// let navLinks = document.querySelectorAll("li a");
// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('a[href*=' +id+']').classList.add('active');
//             });
//         };
//     });
// }


// const activePage = window.location.hash;
// const Links = document.querySelectorAll('nav li ').map(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
//     else{
//         link.classList.remove('active');
//     }
// })

// a.onclick = () =>{
//     navbar.classList.toggle('active');
// }




/*
    * this create the observer that observe and help in changing the active state.
 */

const options = {
    root: null,
    rootMargin: '11px',
    threshold: 0.6
};
const observer = new IntersectionObserver(changeActiveState, options);

// target the sections to be observed
sections.forEach((section) => {
    observer.observe(section);
});


// const navBar = document.getElementById("navbar__list");
// const observingSections = () => {
//     const observer = new IntersectionObserver(
//     function (enies) {
//         enies.forEach((ent) => {
//             console.log(ent)
//             let activeLink = navBar.querySelector(`[data-nav=${ent.target.id}]`);
//             if (ent.isIntersecting) {
//                 ent.target.classList.add("your-active-class");
//                 activeLink.classList.add("active-link");
//             location.hash = `${ent.target.id}`;
//             } else {
//                 ent.target.classList.remove("your-active-class");
//             activeLink.classList.remove("active-link");
//             }
//         });
//     },
//     // options //
//     {
//         threshold: 0.5
//     }
// );

// return document.querySelectorAll("section").forEach((section) => {
//         observer.observe(section);
//     });
// };







// const activePage = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for(let i = 0; i < menuLength; i++){
//     if(menuItem[i].href === activePage){
//         menuItem[i].className = "active";
//     }
// }
// const activePage = window.location.hash;
// const navLinks = document.querySelectorAll('nav li ').map(link => {
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
//     else{
//         link.classList.remove('active');
//     }
// })

// a.onclick = () =>{
//     navbar.classList.toggle('active');
// }

// let ul = document.querySelectorAll('ul');
// let li = document.querySelectorAll('li');
// li.forEach(hoho => {
//     hoho.addEventListener('click',link => {
//         if(link.href.includes(`${activePage}`)){
//             link.classList.add('active');
//         }
//         else{
//             link.classList.remove('active');
//         }
//     })
// });















// const myNodelist = document.querySelectorAll("li a");
// for (let i = 0; i < myNodelist.length; i++) {
//     if(i == "your-active-class"){
//         myNodelist[i].style.color = "red";
//     }
// }


// var header = document.getElementsByTagName('li a');
// for (var i = 0; i < header.length; i++) {
//   header[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("your-active-class");
//   current[0].className = current[0].className.replace(" your-active-class", "");
//   this.className += " your-active-class";
//   });
// }
// const activePage = window.location.hash;
// // console.log(activePage);
// const navLinks = document.querySelectorAll('nav a').
// forEach(link=>{
//     if(link.href.includes(`${activePage}`)){
//         // console.log(`${activePage}`);
//         for(let i = 0; i <activePage.length; i++){
//             link.classList.add('active');
//         }
        
//     }
//     // console.log(link.href);
// });
// const activePage = window.location.href;
// const navLinks = document.querySelectorAll('li a').
// forEach(link=>{
//     if(link.href.includes(`${activePage}`)){
//         console.log(link);
//         link.style.color = 'red';
//         link.classList.add('active');
//     }else{
//         link.classList.remove('active');
//     }

// });








// $(document.ready(function(){
//     $('ul li a').click(function(){
//         $('li a').removeClass("active");
//         $(this).addClass("active");
//     });
// }));

















// function setActive(curr){
//     let activeClass = 'active';
//     let navLinks = document.querySelectorAll('li a');
//     for(let i = 0; i)
// }

// for(let i = 0; i < document.links.length; i++){
//     if(document.links[i].href == document.URL){
//         document.links[i].classList.add ('your-active-class');
//     }else{
//         document.links[i].classList.remove ('acyour-active-classtive');
//     }
// }

// const active = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         active = i;
//     }
// }
// // let section = 
// document.links[active].id = $(sections);


// const sects = document.querySelectorAll('section');
// const navLis = document.querySelectorAll('nav .container ul li')
// window.addEventListener('scroll', ()=>{
//     let current = '';
//     sects.forEach(section => {
//         const sectionTop  = section.offsetTop;
//         const sectionHeight  = section.clientHeight;
//         if(pageYoffset >= sectionTop){
//             current = section.getAttribute('id');
//         }
//     })
// })
// navLis.forEach(li => {
//     li.classList.remove('active');
//     if(li.classList.contains(current));
// })


// const secs = document.querySelectorAll('section');
// const nav = document.querySelectorAll('nav');
// const navList = document.querySelectorAll(".nav-list li");
// const opts = {
//     threshold: "0.6",

// }
// const observerrr = new IntersectionObserver(indexes => {
//     indexes.forEach(e => {
//         if(e.isIntersecting){
//             // console.log(e.target.id);
//             if(e.target.id !== "sec1"){
//                 nav.classList.add("active");
//             }else {
//                 nav.classList.remove("active");
//             }
//             navList.forEach(link => {
//                 link.classList.remove('active');
//                 if(e.target.id === link.dataset.nav){
//                     link.classList.add("active");
//                 }
//             });
//         }
        
//     });
// }, opts);

// secs.forEach((section) =>{
//     observerrr.observe(section);
// });



// window.onscroll = ()=>{
//     const activePage = window.location.href;
//     const navLinks = document.querySelectorAll('li a').
//     forEach(link=>{
//         if(link.href.includes(`${activePage}`)){
//             console.log(link);
//             link.classList.add('active');
//             link.style.color = 'red';
//         }else{
//             link.classList.remove('active');
//             link.style.color = '#fff';
//         }
// });

// }
// const opts = {
//     threshold: 0.6
// };
// const obver = new IntersectionObserver(navLinks, opts);



// // target the sections to be observed
// sections.forEach((menu__link) => {
//     obver.observe(menu__link);
// });


// Register IntersectionObserver
// const io = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       // Add 'active' class if observation target is inside viewport
//         if (entry.intersectionRatio > 0) {
//             entry.target.classList.add('active');
//         }
//       // Remove 'active' class otherwise
//         else {
//             entry.target.classList.remove('active');
//         }
//         })
//     })

//   // Declares what to observe, and observes its properties.
//     const boxElList = document.querySelectorAll('li');
//     boxElList.forEach((el) => {
//         io.observe(el);
//     })


// window.onscroll = function() {
// 	document.querySelectorAll("section").forEach(function(active) {
//     let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
// 	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

//     active.classList.add("your-active-class");
//     activeLink.classList.add("active-link");

//     }
//     else{
//          active.classList.remove("your-active-class");
//          activeLink.classList.remove("active-link");
//     }
// 	});
// }


// navBar.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (event.target.dataset.nav) {
//       document
//         .getElementById(`${event.target.dataset.nav}`)
//         .scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => {
//         location.hash = `${event.target.dataset.nav}`;
//       }, 200);
//     }
//   });


//   let isScrolling;
// document.onscroll = () => {
//   header.style.display = "block"
//   clearTimeout(isScrolling)
//    isScrolling = setTimeout(() => {
//     header.style.display = "none";
//   }, 4000);

//   window.scrollY > 800
//     ? (toTop.style.display = "block")
//     : (toTop.style.display = "none");
// };


