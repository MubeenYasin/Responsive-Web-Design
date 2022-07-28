// $();     => Basic JQuery Function
// $(function(){});    =>Add default function inside brackits */
// $(function(){    
//    $(".selector").click(function(){   => Add click function inside the default function
//      $(".target-selector").slide.Toggle(500);    => Its out when the .selector is clicked        
//    });)
// });



$(function(){
    $(".btn").click(function(){         /* Action */
        $(".submenu").slide.Toggle(500);    /* Out put*/
    });
});

