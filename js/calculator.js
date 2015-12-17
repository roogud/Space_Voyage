
var planetmods = {
    mercury:0.378,
    venus:0.907,
    moon:.166,
    mars:.377,
    jp:2.364,
    sat:1.064,
    ur:.889,
    npt:1.125,
    plt:.067,
    //j2:0.1264,
    //j3:0.13358,
    //j4:0.1448,
    //j5:0.18355,
    sun:27.072
};

function get_weight(planet,weight) {
    return (planetmods[planet] * weight).toFixed(2);
}

$(function(){
    $("#wt").on("keyup",function(){
        $("#output").val(get_weight(current_planet,+$(this).val()))
    })
})


// function compute_weight(form)
// {
//     var weight = form.wt.value;
//     if (weight > 0.0) {
//         form.outputmrc.value = int_zero( 10 * weight * .378 ) / 10;
//         form.outputvn.value = int_zero( 10 * weight * .907 ) / 10;
//         form.outputmoon.value = int_zero( 10 * weight * .166 ) / 10;
//         form.outputmars.value = int_zero( 10 * weight * .377 ) / 10;
//         form.outputjp.value = int_zero( 10 * weight * 2.364 ) / 10;
//         form.outputsat.value = int_zero( 10 * weight * 1.064 ) / 10;
//         form.outputur.value = int_zero( 10 * weight * .889 ) / 10;
//         form.outputnpt.value = int_zero( 10 * weight * 1.125 ) / 10;
//         form.outputplt.value = int_zero( 10 * weight * .067 ) / 10;
//         form.outputj2.value = int_zero( 100 * weight * .1264 ) / 100;
//         form.outputj3.value = int_zero( 100 * weight * .13358 ) / 100;
//         form.outputj4.value = int_zero( 100 * weight * .1448 ) / 100;
//         form.outputj5.value = int_zero( 100 * weight * .18355 ) / 100;
//         form.outputsun.value = int_zero( 10 * weight * 27.072 ) / 10;
//         form.outputwd.value = int_zero( 10 * weight * 1.3E+6 ) / 10;
//         form.outputns.value = weight * 1.4E+11;
//     }

// }

// // Function to return 0 if result is <1
// function int_zero(x)
// {
// 	if ( x < 1 )
// 		return 0 ;
// 	else
// 		return parseInt( x ,10 );
// }
