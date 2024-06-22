let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list')
let rightNav = document.querySelector('.rightNav');

burger.addEventListener('click',function(){
    // navbar.classList.toggle('v-class-resp');
    // navList.classList.toggle('v-class-resp');
    // navbar.classList.toggle('h-nav-resp');

    
  
    

    // if(navbar.classList.contains('v-class-resp')){
    //     navbar.classList.remove('v-class-resp');
    // }else{
    //     navbar.classList.add('v-class-resp');
    // }
    
    if(navbar.classList.contains('h-nav-resp')){
        navbar.classList.remove('h-nav-resp');
    }
    else{
        navbar.classList.add('h-nav-resp');
    }

    if(navList.classList.contains('v-class-resp')){
        navList.classList.remove('v-class-resp');
    }
    else{
        navList.classList.add('v-class-resp');
    }

    if(rightNav.classList.contains('v-class-resp')){
        rightNav.classList.remove('v-class-resp');
    }
    else{
        rightNav.classList.add('v-class-resp');
    }

});