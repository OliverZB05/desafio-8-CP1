const form = document.getElementById('registerForm');

/* form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/sessions/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            window.location.replace('/');
        }
    });
}) */

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/sessions/register', {
        method: 'POST',
        body: new URLSearchParams(obj),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(result => {
        if (result.status === 200) {
            window.location.replace('/');
        }
    })
})