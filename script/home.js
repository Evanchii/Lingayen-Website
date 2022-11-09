function showImage(imageId) {
    document.getElementById(imageId).style.display = 'inline';
    document.getElementById(imageId).style.animation = 'fade-in 2s';
}

function hideContent(imageId) {
	document.getElementById(imageId).style.display = 'none';
}

function seal(){
	hideContent('moveaway');
    showImage('circle1');
    showImage('circle2');
    showImage('circle3');
    showImage('circle4');
    showImage('circle5');
    hideContent('note');
    hideContent('img_logo');
}