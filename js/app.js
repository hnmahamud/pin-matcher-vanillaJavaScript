/* Generate pin button click */
const generatePin = document.getElementById('generate-pin');
generatePin.addEventListener('click', function() {
    const pin = pinMaker();
    // setInputFieldValue (elementId, value)
    setInputFieldValue('pin-input-field', pin);
    // msgHidden (hideId)
    msgHidden('unsuccess-msg');
    msgHidden('success-msg');
    msgHidden('try-action');
})


/* Device all buttons click */
const device = document.getElementById('device');
device.addEventListener('click', function(event) {
    // setDeviceInputField (elementId, newValue)
    setDeviceInputField('device-input-field', event.target.innerText);
});


/* Submit button click */
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {
    finalAction();
});