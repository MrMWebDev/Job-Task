let form = document.getElementById('mainContainer');
let closeBtn = document.getElementsByClassName("close")[0];

setTimeout(function() {
    form.style.display = 'block';
    closeBtn.style.display = 'block';
}, 5000);

closeBtn.addEventListener('click', () => {
    const form = document.getElementById('mainContainer');

    if (form.style.display === 'none') {
    form.style.display = 'block';
    } else {
    form.style.display = 'none';
    }
});
