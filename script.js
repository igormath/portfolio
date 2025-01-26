const $menuIcon = document.querySelector('.menu-icon');
const $menuLinks = document.querySelector('.menu-links');

$menuIcon.addEventListener('click', function() {
    $menuLinks.classList.toggle('active');

    if ($menuLinks.classList.contains('active')) {
        const menuHeight = $menuLinks.scrollHeight;
        $menuLinks.style.height = `${menuHeight}px`;
    } else {
        $menuLinks.style.height = '0';
    }
});
