document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    console.log(formData)
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            showAlert('Message sent successfully!');
            window.location.reload();
        } else {
            showAlert('Failed to send message!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function showAlert(message) {
    alert(message);
}