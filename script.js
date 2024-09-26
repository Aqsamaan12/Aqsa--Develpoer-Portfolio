var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Wordpress Developer","Digital Marketer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true
})


document.getElementById("DownloadCV").addEventListener("click", function() {
    // Action on button //
    alert("The CV is not available right now. Please check back later.");
});



function serviceAlert(serviceName) {
    alert("You clicked on the " + serviceName + " service.");
}

