(function disableMobileNavToggle() {
    // USWDS adds a handler (on the body element) that closes the menu when a nav link
    // is clicked. We don't want this when the user clicks to another page, so we
    // "stop propagation" on "regular" mobile nav links.
    let nav_link_selector = '.usagov-mobile-menu a';  
    let current_page_selector = '.usagov-mobile-menu .navigation__item.active>a';
    document.querySelectorAll(nav_link_selector)
	.forEach(function(mobileNavLink) {
	    if (!mobileNavLink.matches(current_page_selector)) { 
		mobileNavLink.addEventListener("click", function(e) {
		    e.stopPropagation();
		});
	    }
	});
})();


(function menuButtonModifications() {
	let menu_button = document.querySelector('.usa-menu-btn');
	let navbar = document.querySelector('.usa-navbar');
	let home_link = document.querySelector('#mobile-menu-home-link');
	menu_button.addEventListener("click", function (e) {
		navbar.setAttribute('aria-hidden', 'true');
		navbar.setAttribute('data-nav-hidden', 'true');
		setTimeout(() => {
			home_link.focus();
		}, 100);
	});
})();