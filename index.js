function convert() {
    var errorField = document.getElementById('error');
    errorField.style.display = "none";
    errorField.innerText = '';

    var initialAmount = document.getElementById('initialAmount').value;    

    if (initialAmount === "") {
        errorField.style.display = "block";
        errorField.innerText = 'Veuillez saisir un montant';
    }
    else {
        var toEURField = document.getElementById('toEUR');
        var toFRFField = document.getElementById('toFRF');

        if (!toEURField.checked && !toFRFField.checked) {
            errorField.style.display = "block";
            errorField.innerText = 'Veuillez selectionner le type de conversion';
        } else {
            var convertedAmount;

            if (toEURField.checked) {
                convertedAmount = initialAmount / 6.55957;
            } else if (toFRFField.checked) {
                convertedAmount = initialAmount * 6.55957;
            }

            document.getElementById('convertedAmount').value = convertedAmount.toPrecision(3);
        }
    }
}