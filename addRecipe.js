function submitForm() {
    const form = document.getElementById('recipeForm');
    const formData = new FormData(form);
    const requestData = {};

    formData.forEach((value, key) => {
        requestData[key] = value;
    });

    const apiUrl = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            Toastify({
                text: "Recipe added successfully!",
                duration: 3000,
                close: true,
                class: "info",
                gravity: "bottom",
                position: "center",
                style: {
                    background: '#9684C20',
                    color: "#fff",
                }
            }).showToast();
            // form.reset()
        })
        .catch(error => {
            console.error('Error:', error.message);
            Toastify({
                text: `Error: ${error.message}`,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "center",
                style: {
                    background: '#9684C20',
                    backgroundColor: '#9684C20',
                    color: "#fff",
                }
            }).showToast();
        });
}