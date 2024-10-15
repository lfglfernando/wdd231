// Grab the entire URL

const currentUrl = window.location.href;

//Divide the URL into two halves
const everything=currentUrl.split('?');

//Grab just the second half
let formData = everything[1].split('&');


function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result=element.split('=')[1].replace("%40", "@")
        } //end if
    })
    return(result)
} // end show

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Appointment for: ${show("first")} ${show("last")} </p>
<p>Proxy: ${show('ordinance')} on ${show('fecha')} in the ${show('location')} Temple. </p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: <a href="">${show('email')}</a></p>
`;

