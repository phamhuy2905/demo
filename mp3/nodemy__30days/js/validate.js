const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
function Validator(option) {
    var saveRules = {};
    function Validate(inputElement, rule) {
        var Rule = (saveRules[rule.selecter])
        // console.log(Rule)
        var errorElememt;
        var errorMessage = inputElement.parentElement.querySelector('.form__message')
        for(var i = 0; i < Rule.length; i++) {
            errorElememt = Rule[i](inputElement.value)
            if(errorElememt) {
                break;
            }
        }
        if(errorElememt) {
                errorMessage.innerText = errorElememt
                errorMessage.classList.add('red')
                }
        else {
                errorMessage.innerText = ''
                errorMessage.classList.remove('red')
                    }
                    inputElement.oninput = function() {
                        errorMessage.innerText = ''
                        errorMessage.classList.remove('red')
                    }
    }
    var form = $(option.form)
    if(form) {
        option.rules.forEach(function(rule) {
            if(Array.isArray(saveRules[rule.selecter])) {
                saveRules[rule.selecter].push(rule.test)
            }
            else {
                saveRules[rule.selecter] = [rule.test]
            }
            var inputElement = form.querySelector(rule.selecter)
            if(inputElement) {
                inputElement.onblur = function() {
                   Validate(inputElement, rule)
                }
            }
        })
    }

    const button = $('.button')
    button.onclick = function(e) {
        e.preventDefault()
        option.rules.forEach(function(rule) {
            var inputElement = form.querySelector(rule.selecter)
                   Validate(inputElement, rule)
        })
    }

    
}

Validator.isValid = function(selecter) {
    return {
        selecter,
        test: function(value) {
            return value ? undefined  :   'Vui long nhap truong nay'
        }
    }
}

Validator.isEmail = function(selecter) {
    return {
        selecter,
        test: function(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui long nhap truong nay'
        }
    }
}

Validator.isPassword = function(selecter) {
    return {
        selecter,
        test: function(value) {
            return value.length >= 6 ?undefined : 'Vui long nhap mat khau'
        }
    }
}

Validator.isConfirm = function(selecter, data) {
    return {
        selecter,
        test: function(value) {
            return value == data() ? undefined : 'Mat khau phai trung nhau'
        }
    }
}