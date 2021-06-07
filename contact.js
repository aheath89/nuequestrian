
function submitMail() {
    subj = document.getElementById('subj').value;
    body = document.getElementById('body').value;
    url = "mailto:nuequestrian@gmail.com?subject=" + subj + "&body=" + body;
    window.open(url);
}