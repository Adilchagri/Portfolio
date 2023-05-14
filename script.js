// scroll sectons active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('secheader nav a');

window.onscroll= ()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top< offset + hight ){
            navLinks.forEach( links = {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classlist.add('active');

            });
        };


    });
};

// sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY >100);
