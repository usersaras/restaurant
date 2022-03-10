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

    
    // console.log((paratag)[0]);
    // console.log((paratag)[3].innerText);
    // console.log(navelement);
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
