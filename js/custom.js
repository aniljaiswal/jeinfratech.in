/* Add here all your JS customizations */
var d = new Date();
var currentYear = d.getFullYear();

$(document).ready(function(e){
    $('body > div > footer > div.footer-copyright > div > div > div:nth-child(2)').text('© Copyright '+ currentYear +' JE Infratech.')
});
