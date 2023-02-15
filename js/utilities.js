/* Get universal input field value */
function getInputFieldValue (elementId) {
    const element = document.getElementById(elementId);
    return element.value;
}

/* Set universal input field value */
function setInputFieldValue (elementId, value) {
    const element = document.getElementById(elementId);
    element.value = value;
}


/* Set universal text field value */
function setTextFieldValue (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


/* Random pin maker */
function pinMaker () {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin.toString();
    if(pinString.length === 4) {
        return pin;
    }
    else {
        return pinMaker();
    }
}


/* Set device input field value */
function setDeviceInputField (elementId, newValue) {
    const element = document.getElementById(elementId);
    if(isNaN(newValue)) {
        if(newValue === 'C') {
            element.value = '';
        }
        if(newValue === '<') {
            const numbers = element.value.split('');
            numbers.pop();
            const delNumber = numbers.join('');
            element.value = delNumber;
        }
    }
    else {
        element.value = element.value + newValue;
    }
}


/* Success/ Unsuccess message shown */
function msgShown (showId) {
    const show = document.getElementById(showId);
    show.style.display = 'block';
}
function msgHidden (hideId) {
    const hide = document.getElementById(hideId);
    hide.style.display = 'none';
}


/* Final action */
let unsuccessCounter = 3;
function finalAction () {
    // getInputFieldValue (elementId)
    const pinInputFieldValue = getInputFieldValue('pin-input-field');
    const deviceInputFieldValue = getInputFieldValue('device-input-field');
    if(pinInputFieldValue !== '' && deviceInputFieldValue !== '') {
        if(pinInputFieldValue === deviceInputFieldValue) {
            // Successful
            // msgShown (showId)
            msgShown('success-msg');
            // msgHidden (hideId)
            msgHidden('unsuccess-msg');
            // setTextFieldValue (elementId, value)
            setTextFieldValue('try-counter', 3)
            // setInputFieldValue (elementId, value)
            setInputFieldValue('pin-input-field', '');
            setInputFieldValue('device-input-field', '');
        }
        else {
            // Unsuccessful
            unsuccessCounter--;
            // msgShown (showId)
            msgShown('unsuccess-msg');
            // msgHidden (hideId)
            msgHidden('success-msg');
            // msgShown (showId)
            msgShown('try-action');
            // setTextFieldValue (elementId, value)
            setTextFieldValue('try-counter', unsuccessCounter)
            if(unsuccessCounter < 1) {
                // setInputFieldValue (elementId, value)
                setInputFieldValue('pin-input-field', '');
                setInputFieldValue('device-input-field', '');
                // setTextFieldValue (elementId, value)
                setTextFieldValue('try-counter', 3)
                // msgHidden (hideId)
                msgHidden('try-action');
                msgHidden('unsuccess-msg');
                unsuccessCounter = 3;

            }
        }
    }
}