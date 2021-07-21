// var navbar = document.querySelector('nav')

// window.onscroll = function() {

//     if (window.pageYOffset > 10) {
//         navbar.classList.add('bg-nav')
//     } else {
//         navbar.classList.remove('bg-nav')
//     }
// }

const all = document.querySelector('.all');
const webinar = document.querySelector('.webinar');
const workshope = document.querySelector('.workshope');
const codding = document.querySelector('.codding');

const all_event = document.querySelector('.webinar-evnt');
const webinar_event = document.querySelector('.webinar-event');
const workshop_event = document.querySelector('.workshope-event');
const codding_event = document.querySelector('.codding-event');



all.addEventListener('click', function() {
    workshop_event.classList.remove('hide')
    codding_event.classList.remove('hide')
    webinar_event.classList.remove('hide')
});

webinar.addEventListener('click', function() {
    workshop_event.classList.add('hide')
    codding_event.classList.add('hide')
    webinar_event.classList.remove('hide')
});
workshope.addEventListener('click', function() {
    webinar_event.classList.add('hide');
    codding_event.classList.add('hide');
    workshop_event.classList.remove('hide')
});
codding.addEventListener('click', function() {
    webinar_event.classList.add('hide')
    workshop_event.classList.add('hide')
    codding_event.classList.remove('hide')
});