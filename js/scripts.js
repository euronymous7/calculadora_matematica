$(document).ready(function(){
    var nr_c = '';
    $('.bt-calc').click(function(){
        var nr = $(this).text();

        nr_c = nr_c.concat(nr);

        $('txt_display').text(nr_c);
    })
});