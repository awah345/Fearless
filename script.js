    var typed = new Typed(".multiple-text", {
        strings: ["Full Stack Web Developer","Mathematics Tutor","Computer Science Tutor","Javel and Liquid Soap producer","Singer","MS Office expert"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true        
    })
    //scroll section
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');
    window.onscroll = () =>{
        sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('');

        if(top >= offset && top < offset + height) {
            //active navbar links
           navlinks.forEach(links =>{
              links.classList.remove('active');  
              document.querySelector('header nav a[href*=' + id +']').classList.add('active');
           }); 
        }
    });
        let header = document.querySelectorAll('header');
        header.classList.toogle('sticky',window.scrollY > 100);
    }
    //stricky 