import { Validators } from '@angular/forms';

const mobilePattern = '^\\d{3}\\s{1}\\d{3}\\s{1}\\d{3}$';
const fixedPattern = '^\\d{1}\\s{1}\\d{3}\\s{1}\\d{4}$';
const phonePattern = `(${mobilePattern}|${fixedPattern})`;

export const userDetailsValidator = {
    name: ['', [
      Validators.required,
    ]],
    birthday: ['', [
      Validators.required,
    ]],
    gender: ['', [
      Validators.required
    ]],
    country: ['', [
      Validators.required
    ]],
    phone: ['', [
      Validators.required,
      Validators.pattern(phonePattern)
    ]],
    bio: ['', [
      Validators.maxLength(256)
    ]],
};
