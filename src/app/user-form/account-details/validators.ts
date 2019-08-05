import { Validators, FormGroup } from '@angular/forms';

const userPattern = '^[0-9a-zA-Z]+$';
const passPattern = '^(?=.{5,})(?=.*[a-z])(?=.*[A-Z]).*$';

export function mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export const accountDetailsValidator = {
    username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(userPattern),
    ]],
    email: ['', [
        Validators.required,
        Validators.email,
    ]],
    password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(passPattern),
    ]],
    confirmPassword: ['', [
        Validators.required,
    ]],
    terms: [false, [
        Validators.requiredTrue,
    ]],
};
