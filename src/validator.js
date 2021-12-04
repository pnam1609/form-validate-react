export const isRequired = () => {
    return {
        checkValidate: (value) => {
            return value.trim() ? undefined : "The field is required"
        }
    }
}

export const isEmail = () => {
    return {
        checkValidate: (value) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? undefined : "The field must be email"
        }
    }
}

export const isPassword = () => {
    return {
        checkValidate: (value) => {
            const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            return re.test(value) ? undefined : "Password must contain at least 1 digit, 1 lower case"
        }
    }
}

export const isConfirmPaswword = (confirmPassword) => {
    return {
        checkValidate: (value) => {
            return value === confirmPassword ? undefined : `Password and confirm password aren't match`
        }
    }

}

export const minLength = (min) => {
    return {
        checkValidate: (value) => {
            return value.length >= min ? undefined : `This field must have at least ${min} character`
        }
    }
}

export const validateOneElement = (target, rules) => {
    for (let i = 0; i < rules.length; i++) {
        const res = rules[i].checkValidate(target.value)
        if (res) {
            target.parentElement.classList.add("invalid")
            return res
        }
    }
    target.parentElement.classList.remove("invalid")
}

