// Write your code here!


$('img').on('click', function(){
    var $image = $('img').attr('src');
    var $imageDescription = $('img').attr('alt');
    console.log($imageDescription);
    $('body').append('<div class="lightbox"></div>');
    $('.lightbox').append('<img src=' + $image + '></img>');
    $('.lightbox').append('<p>' + $imageDescription + '</p>');
});