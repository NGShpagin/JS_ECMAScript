// Работа с this
const checkThis = function () {
    console.log(this);
}

checkThis();

const checkThisObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    }
}

checkThisObject(); // {testProperty: true, checkThis: f}