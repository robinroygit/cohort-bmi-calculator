document.addEventListener("DOMContentLoaded", () => {
    const heightInput = document.getElementById("height-range");
    const heightDisplay = document.getElementById("height-display");

    const weightValue = document.getElementById("weight-value");
    const weightDecrease = document.getElementById("weight-decrease");
    const weightIncrease = document.getElementById("weight-increase");

    const ageValue = document.getElementById("age-value");
    const ageDecrease = document.getElementById("age-decrease");
    const ageIncrease = document.getElementById("age-increase");

    const calculateBtn = document.getElementById("calculate-btn");
    const bmiResult = document.getElementById("bmi-result");
    const malebtn = document.getElementById("male");
    const femalebtn = document.getElementById("female");



    malebtn.addEventListener("click", ()=>{
        malebtn.style.backgroundColor="#969ac4"
        femalebtn.style.backgroundColor="#1b2248"

    })
    femalebtn.addEventListener("click", ()=>{
        femalebtn.style.backgroundColor="#969ac4"
        malebtn.style.backgroundColor="#1b2248"
    })




    heightInput.addEventListener("input", () => {
        heightDisplay.textContent = heightInput.value;
    });


    function updateWeight(change) {
        let weight = parseInt(weightValue.textContent);
        if (weight + change >= 20 && weight + change <= 500) {
            weightValue.textContent = weight + change;
        }
    }

    weightDecrease.addEventListener("click", () => updateWeight(-1));
    weightIncrease.addEventListener("click", () => updateWeight(1));


    function updateAge(change) {
        let age = parseInt(ageValue.textContent);
        if (age + change >= 1 && age + change <= 120) {
            ageValue.textContent = age + change;
        }
    }


    ageDecrease.addEventListener("click", () => updateAge(-1));
    ageIncrease.addEventListener("click", () => updateAge(1));

    function calculateBMI(height, weight) {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal weight";
        if (bmi < 30) return "Overweight";
        return "Obese";
    }


    calculateBtn.addEventListener("click", () => {
        const height = parseInt(heightInput.value);
        const weight = parseInt(weightValue.textContent);

        if (height < 50 || height > 250 || weight < 20 || weight > 500) {
            bmiResult.textContent = "Please enter realistic values.";
            return;
        }

        const bmi = calculateBMI(height, weight);
        bmiResult.textContent = `Your BMI is ${bmi} (${getBMICategory(bmi)})`;
    });
});
