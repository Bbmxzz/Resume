document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    console.log(...formData.entries()); // Log ข้อมูลใน formData
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Response:', response); // Log การตอบสนอง
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data); // Log ข้อมูลที่ได้รับ
        if (data.status === 'success') {
            showAlert('Message sent successfully!');
            window.location.reload();
        } else {
            showAlert('Failed to send message!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showAlert('There was a problem with the fetch operation.');
    });
});

function showAlert(message) {
    alert(message);
}