document.getElementById('wishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const wishInput = document.getElementById('wishInput');
    const wish = wishInput.value.trim();
    if (wish) {
        fetch('https://script.google.com/macros/s/AKfycbwTmB2DcKumdgDqWf9jAAqrar6xFTpIWCkVgW9i72b7xZJK1uSlOmKHvPZVVx2_jgqkNg/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `wish=${encodeURIComponent(wish)}`,
        })
        .then(response => response.text())
        .then(data => {
            alert(`Điều ước Giáng sinh của bạn: ${wish} đã được gủi đi`);
            wishInput.value = '';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
