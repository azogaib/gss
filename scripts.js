// Stop page refresh to show message
var form = document.querySelector('#contactForm, #distributorForm');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


// Thank you message
var thankYou = document.querySelector('#liveThankYou, #distributorThankYou')

var alert = (message, type) => {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div>${message}</div>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    thankYou.append(wrapper)
}

var alertTrigger = document.querySelector('#liveThankYouBtn, #distributorThankYouBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Thank You. We will be in touch!', 'dark')
    })
}


