import { useState } from "react";

interface PasswordValidationResult {
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    specialChar: boolean;
    minLength: boolean;
}

interface PasswordValidator {
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    validatePassword: () => PasswordValidationResult;
}

export const usePasswordValidator = (): PasswordValidator => {
    const [password, setPassword] = useState("");

    const validatePassword = (): PasswordValidationResult => {
        const uppercaseRegex = /^(?=.*[A-Z])/;
        const lowercaseRegex = /^(?=.*[a-z])/;
        const numberRegex = /^(?=.*\d)/;
        const specialCharRegex = /^(?=.*[!@#$%^&*])/;
        const minLengthRegex = /^.{8,}$/;

        return {
            uppercase: uppercaseRegex.test(password),
            lowercase: lowercaseRegex.test(password),
            number: numberRegex.test(password),
            specialChar: specialCharRegex.test(password),
            minLength: minLengthRegex.test(password),
        };
    };

    return { setPassword, validatePassword };
};
