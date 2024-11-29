introbtn.addEventListener('click', function(){
    console.log('intro')
    document.getElementById("intro").src="Downtown.jpg";
    document.getElementById("intro").alt="A picture of downtown Calgary with Calgary tower in the forefront";
    document.getElementById("head").innerHTML="Who Are We?";
    document.getElementById("para").innerHTML="Welcome to Jay's Photography, a place where photography and videography is our passion. Our services cut across a wide range of media functions, from pictures and videos to aerial photography and videography. The picture you can see on this page was taken in downtown calgary and the Calgary Tower can be seen in the forefront of the picture.";
    document.getElementById("introbtn").classList.add ("active");
    document.getElementById("river").classList.remove("active");
    document.getElementById("snow").classList.remove("active");
    document.getElementById("shelf").classList.remove("active");
})
river.addEventListener('click', function(){
    console.log('river')
    document.getElementById("intro").src="Bow River.png";
    document.getElementById("intro").alt="A drone shot of bow river and bow river park";
    document.getElementById("head").innerHTML="The Bow River";
    document.getElementById("para").innerHTML="This is an aerial photograph of one of the prominent rivers in Calgary. This picture shows a part of the Bow River alongside a part of the Bow River park.";
    document.getElementById("introbtn").classList.remove("active");
    document.getElementById("river").classList.add("active");
    document.getElementById("snow").classList.remove("active");
    document.getElementById("shelf").classList.remove("active");
})
snow.addEventListener('click', function(){
    console.log('snow')
    document.getElementById("intro").src="Snow.jpg";
    document.getElementById("intro").alt="A drone shot of a community in NW Calgary showing the houses and roads covered with snow";
    document.getElementById("head").innerHTML="Snowy Days";
    document.getElementById("para").innerHTML="When it snows in Calgary, it snows hard. Feed your eyes on this picture of what it looks like when it snows in Calgary.";
    document.getElementById("introbtn").classList.remove("active");
    document.getElementById("river").classList.remove("active");
    document.getElementById("snow").classList.add("active");
    document.getElementById("shelf").classList.remove("active");
})
shelf.addEventListener('click', function(){
    console.log('shelf')
    document.getElementById("intro").src="Items.jpg";
    document.getElementById("intro").alt="A portrait shot with a diaper basket, flower vase and toy on a shelf, with books and teddy bears in a wall shelf above it";
    document.getElementById("head").innerHTML="We do Potrait";
    document.getElementById("para").innerHTML="We are basically your one stop shop for anything photography and videography, cause we do it all.";
    document.getElementById("introbtn").classList.remove("active");
    document.getElementById("river").classList.remove("active");
    document.getElementById("snow").classList.remove("active");
    document.getElementById("shelf").classList.add("active");
})