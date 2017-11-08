var nav = document.getElementById('navList'),
    cross  = document.getElementById('cross'),
    hamburger = document.getElementById('hamburger'),
    navItem = document.getElementById('navItem'),
    listItems = document.getElementsByClassName('navigation__item');

nav.classList += (' fold');
cross.classList += (' hide__btn');
hamburger.addEventListener('click', function(e) {
    nav.classList.toggle('fold');
    cross.classList.toggle('hide__btn');
    hamburger.classList += (' hide__btn');
});
cross.addEventListener('click', function(e) {
    nav.classList += (' fold');
    cross.classList += (' hide__btn');
    hamburger.classList.toggle('hide__btn');
});
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(e) {
      nav.classList += (' fold');
      cross.classList += (' hide__btn');
      hamburger.classList.toggle('hide__btn');
    });
}


$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && (location.hostname == this.hostname)) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 700, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus(); 
        }
      });
    }
  }
});
