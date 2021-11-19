function init () {
    let isValid = true;

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let address = document.getElementById('address');
    let password = document.getElementById('password');
    let repassword = document.getElementById('re-password');
    let gender = document.getElementsByName('gender');
    let interest = document.getElementsByName('interest');

    let log_name = document.getElementById('log-name');
    let log_email = document.getElementById('log-email');
    let log_address = document.getElementById('log-address');
    let log_password = document.getElementById('log-password');
    let log_repassword = document.getElementById('log-re-password');
    let log_gender = document.getElementById('log-gender');
    let log_interest = document.getElementById('log-interest');

    // Name
    if (isName(name.value)) {
        log_name.style.display = 'none';
    }
    else {
        isValid = false;
        log_name.style.display = 'block';
    }

    // Email
    if (isEmail(email.value)) {
        log_email.style.display = 'none';
    }
    else {
        isValid = false;
        log_email.style.display = 'block';
    }

    // Address
    if (isAddress(address.value)) {
        log_address.style.display = 'none';
    }
    else {
        isValid = false;
        log_address.style.display = 'block';
    }

    // Password
    if (isPassword(password.value)) {
        log_password.style.display = 'none';
    }
    else {
        isValid = false;
        log_password.style.display = 'block';
    }

    // Re-password
    if (repassword.value == password.value) {
        log_repassword.style.display = 'none';
    }
    else {
        isValid = false;
        log_repassword.style.display = 'block';
    }

    // Gender
    if (have(gender)) {
        log_gender.style.display = 'none';
    }
    else {
        isValid = false;
        log_gender.style.display = 'block';
    }

    // Interest
    if (have(interest)) {
        log_interest.style.display = 'none';
    }
    else {
        isValid = false;
        log_interest.style.display = 'block';
    }

    return isValid;
}

function isName (name) {
    if (!name) return false;

    let reg = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/iu;
    return reg.test(name);
}

function isEmail (email) {
    if (!email) return false;

    let reg = regaxMail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}

function isAddress (address) {
    if (!address) return false;

    let reg = /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ \/\-]*[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/iu;
    return reg.test(address);
}

function isPassword (pwd) {
    if (pwd.length >= 6 && pwd.length <= 30) return true;
    else return false;
}

function have (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) return true;
    }

    return false;
}