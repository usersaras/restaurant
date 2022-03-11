function darkMode(){
    var element = document.body;
    element.classList.toggle("darkmode");

    var aelement = document.getElementById("another")
    var navelement = document.getElementById("navigation")
    var btnele = document.getElementsByTagName("button");
    var iele = document.getElementsByTagName("i");
    var aele = document.getElementsByTagName("a");

    console.log(btnele[1]);

    var paratag = element.getElementsByTagName("h2");

    paratag[0].classList.toggle("white-text");
    paratag[1].classList.toggle("white-text");
    paratag[3].classList.toggle("white-text");
    navelement.classList.toggle("nav-background");
    btnele[1].classList.toggle("btn-lightbrown")
    btnele[2].classList.toggle("btn-lightbrown")
    btnele[3].classList.toggle("btn-lightbrown")
    btnele[4].classList.toggle("btn-lightbrown")
    btnele[5].classList.toggle("btn-lightbrown")

    iele[0].classList.toggle("white-text");
    iele[1].classList.toggle("white-text");
    iele[2].classList.toggle("white-text");
    aele[5].classList.toggle("white-text");

    console.log("a: ", aele[5]);

     


    console.log("abc");
}

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//loader
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

//increase and reduce

var inE = document.getElementById("increment").addEventListener("click", increment);

var reE = document.getElementById("reduction").addEventListener("click", reduction);

var counter = 0;

function increment(){
    console.log("click")
    counter++;
    if(counter>=0){
        document.getElementById("nGuest").innerText = counter;
    }else if(counter>20){
        alert("Maximum number of guests reached!")
    }
    document.getElementById("noGuest").value=counter;
}

function reduction(){
    counter--;
    if(counter>=0){
        document.getElementById("nGuest").innerText = counter;
    }else{
        alert("Number of guest cannot be negative!");
        counter=0;
    }
    document.getElementById("noGuest").value=counter;
}
