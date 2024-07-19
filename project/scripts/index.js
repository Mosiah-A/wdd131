//modification footer//

document.addEventListener('DOMContentLoaded', () => {
  
    const currentYear = new Date().getFullYear();

    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;

    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});




// bmi
document.getElementById('bmiform').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const name = document.getElementById('name').value;

    if (height > 2.7) {
        alert('Please enter a valid height lower than 2.7 meters.');
        return;
    }

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    // Store name in local storage
    if (name !== "") {
        localStorage.setItem('name', name);
    }

    // Display stored name
    const storedName = localStorage.getItem('name');
    document.getElementById('username').textContent = `Hello, ${storedName || 'Guest'}`;

    // Calculate and display BMI
    const bmi = weight / (height * height);
    document.getElementById('bmi').textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    // Determine suggestion based on BMI
    let suggestionText;
    if (bmi < 18.5) {
        suggestionText = 'Underweight: Eat more calories. Choose nutrient-rich foods like nuts, seeds, avocado, olive oil, and peanut butter.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestionText = 'Normal weight: Maintain a balanced diet and regular exercise.';
    } else if (bmi >= 25 && bmi < 29.9) {
        suggestionText = 'Overweight: Consider a balanced diet and increased physical activity.';
    } else {
        suggestionText = 'Obesity: Seek advice from a healthcare provider for a tailored plan.';
    }

    document.getElementById('suggestion').innerHTML = `BMI Category: ${suggestionText}`;
});
window.addEventListener('load', function() {
    const storedName = localStorage.getItem('name');
    const username = document.getElementById('username')
    if (storedName) {
        username.textContent = storedName
    }

})
