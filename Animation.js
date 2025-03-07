/* auto -text animation */

var typed = new Typed('.auto-text', {
    strings: ["LG", "Whirlpool", "Haier", "Voltas"],  // Corrected spelling of "Voltas" 
    typeSpeed: 150,
    backSpeed: 30,
    loop: true
});


/*other animation */


// Create the default GSAP animation for large screens
function largeScreenAnimation() {
    let anime = gsap.timeline();

    anime.from('#logo', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    
    // Correcting the selection and using .from()
    anime.from('#text h2, #text h3', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.5, // Animates the text one by one
    });
    
    anime.from("#dp",{
        x: 40,
        opacity: 0,
        duration:1
    })
    
    anime.from('#page-1 button',{
        y: 40,
        opacity:0,
        duration:1
    
    })

    //page 2 animation

    gsap.from(".box1 ", {
        x: -300,
        opacity:0,
        scrollTrigger: {
           trigger:"#page-2 .box1",
           scroller:"body",
           start:"top 70%"
        }
      });

      gsap.from("#info ", {
        x: 300,
        opacity:0,
        scrollTrigger: {
           trigger:"#page-2 #info",
           scroller:"body",
           start:"top 70%"
        }
      });

      gsap.from("#flex ", {
        y:100,
        opacity:0,
        stagger:true,
        scrollTrigger: {
           trigger:"#page-2 #flex",
           scroller:"body",
           start:"top 80%"
        }
      });
    
}

// Create the GSAP animation for small screens
function smallScreenAnimation() {
    
}

// Check screen size and apply the respective animation
function responsiveAnimation() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        smallScreenAnimation(); // Apply small screen animation
    } else {
        largeScreenAnimation(); // Apply large screen animation
    }
}

// Trigger animations on page load
responsiveAnimation();

// Optionally, trigger animations on window resize
window.addEventListener('resize', responsiveAnimation);
