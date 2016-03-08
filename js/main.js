document.addEventListener("DOMContentLoaded", init);

function init(ev){
  //when page is ready add event listeners to every object as needed
  //add listeners to buttons
  var pl = document.querySelectorAll(".page-link");
  [].forEach.call(pl, function(obj, index){
	  var navTap = new Hammer(obj);
      navTap.on('tap', navigate);
  });
  //add listeners to pages
  var pages = document.querySelectorAll("[data-role=page]");
  [].forEach.call(pages, function(obj, index){
    obj.className = "inactive-page";
    if(index==0){
      obj.className = "active-page";
    }
    //transitionend or animationend listeners
    obj.addEventListener("animationend", pageAnimated);
  });
}

function navigate(ev){
  ev.preventDefault();
    console.log(ev.target);
  var btn = ev.target;
  var href = btn.href;
  var id = href.split("#")[1];

  var pages = document.querySelectorAll('[data-role="page"]');
    console.log(pages);
  for(var p=0; p<pages.length; p++){

    if(pages[p].id === id){
      pages[p].classList.remove("hidden");
      if(pages[p].className !== "active-page"){
        pages[p].className = "active-page";
      }

    }else{
      if(pages[p].className !== "inactive-page"){
        pages[p].className = "inactive-page";
      }
    }
  }
}

function pageAnimated(ev){

  var page = ev.target;
  if( page.className == "active-page" ){
    console.log(ev.target.id, " has just appeared");
  }else{
    ev.target.classList.add("hidden");
  }
};