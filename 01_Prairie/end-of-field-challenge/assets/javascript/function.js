$menu = document.querySelector('.menu');
$btn = document.querySelector('.btn');


function toggleNavbar() {
    if (!$menu.getAttribute('style') || $menu.getAttribute('style') === 'display: none;') {
        $menu.style.display = 'block';
        $btn.setAttribute('aria-expanded', 'true');
    } else {
        $menu.style.display = 'none';
        $btn.setAttribute('aria-expanded', 'false');
    }
}

$btn.addEventListener('click', function(e) {
    e.preventDefault();
    toggleNavbar();
})