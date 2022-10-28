// Stop page refresh to show message
var form = document.getElementById("distributorForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// Thank you message
const thankYou = document.getElementById('liveThankYou')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div>${message}</div>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    thankYou.append(wrapper)
}

const alertTrigger = document.getElementById('liveThankYouBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Thank You. We will be in touch!', 'dark')
    })
}


