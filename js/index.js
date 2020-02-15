// load issues
const issues = document.querySelector('.issues');
const outLinks = document.querySelectorAll('.logged-out');
const inLinks = document.querySelectorAll('.logged-in');
const member = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        db.collection('Users').doc(user.uid).get().then(doc => {

            // setup account info
            const template = `
                <div>Logged in as ${user.email}</div>
                <div>Biografía</div>
                <div>${doc.data().Bio}</div>
            `;
            member.innerHTML = template;
        });
        // toggle ui 
        inLinks.forEach(item => item.style.display = 'block');
        outLinks.forEach(item => item.style.display = 'none');
    } else {
        // hide account info
        member.innerHTML = '';

        inLinks.forEach(item => item.style.display = 'none');
        outLinks.forEach(item => item.style.display = 'block');
    }
}

$('.button-collapse').sidenav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});