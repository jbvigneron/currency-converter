// Solution C
function checkAndConvert() {
    hideError();

    var initialAmount = document.getElementById('initialAmount');

    if (isAmountEmpty(initialAmount.value)) {
        displayError('Veuillez saisir un montant');
    }
    else if (isNoRadioChecked()) {
        displayError('Veuillez selectionner le type de conversion');
    }
    else {
        var convertedAmount = convert(initialAmount.value);
        displayResult(convertedAmount);
    }
}

function hideError() {
    manageError('');
}

function displayError(text) {
    manageError(text);
}

function manageError(text) {
    var errorField = document.getElementById('error');
    errorField.style.display = (text === '' ? 'none' : 'block');
    errorField.innerText = text;
}

function isAmountEmpty(amount) {
    return amount === '';
}

function isNoRadioChecked() {
    var toEURField = document.getElementById('toEUR');
    var toFRFField = document.getElementById('toFRF');

    return !toEURField.checked && !toFRFField.checked;
}

function convert(initialAmount) {
    var toEURField = document.getElementById('toEUR');
    var convertedAmount;

    if (toEURField.checked) {
        convertedAmount = initialAmount / 6.55957;
    } else {
        convertedAmount = initialAmount * 6.55957;
    }

    return convertedAmount;
}

function displayResult(convertedAmount) {
    document.getElementById('convertedAmount').value = convertedAmount.toPrecision(3);
}