// Prevous code.

// var myButton = jQuery("<button>X</button>");

// var announcement = jQuery("div.announcement");

// announcement.append(myButton);

// Using jQuery, make it so that if the button is clicked, the content of the announcement 
// is hidden, and the text of the button changes from "X" to "show announcement"

// announcement.each(function() {
    
//     var currentParagraph = jQuery(this);

    
//     myButton.on('click', function() {
                        
//         // Hide all the p in the div.announcement whose button was clicked
//         currentParagraph.find("p").hide('slow');
        
//     });
// });


//  var spoilers = jQuery("p.spoiler");
            
//             // Find all their spans and hide them from the view
//             spoilers.find("span").hide();
            
//             // Loop thru every spoiler element. Inside the function, "this" will take each
//             // spoiler in turn
//             spoilers.each(function() {
                
//                 // Create a new button
//                 var myButton = jQuery("<button>click here to show spoiler</button>");
                
//                 var currentParagraph = jQuery(this);
                
//                 // Setup a click event handler on the newly generated button
//                 myButton.on('click', function() {
                    
//                     // Show all the spans in the paragraph whose button was clicked
//                     currentParagraph.find("span").show('slow');
                    
//                     // Remove the button from the DOM
//                     jQuery(this).remove();
//                 });
                
//                 // I have to wrap the "this" to be able to use jQuery functions on it
//                 // In here, "this" represents a <p> element, and jQuery(this) is the
//                 // jQuery representation of this element.
//                 currentParagraph.append(myButton);



$('div.announcement').append('<button>X</button>');

$('button').on('click', function() {
    $(this).parent().toggleClass('hidden');
});

// $('div.announcement').each(
//     function() {
//         var $currentAnnouncement = $(this);
        
//         var $button = $('<button>X</button>');
//         $currentAnnouncement.append($button);
        
//         $button.on('click', function() {
//             if ($button.text() === "X") {
//                 $currentAnnouncement.find('p').hide();
//                 $button.text("Show announcement");
//             }
//             else {
//                 $currentAnnouncement.find('p').show();
//                 $button.text("X");
//             }
//         });
//     }
// )