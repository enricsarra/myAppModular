import { AbstractControl } from '@angular/forms';
// import { map } from 'rxjs/operators'

export class Formsvalidators {

/*
    --------- form.html -------------------------------------
    <input type="text" [formControl]="nameField">
    <div *ngIf="nameField.errors && nameField.dirty">
    <p *ngIf="nameField.hasError('isEnric')">El campo debe ser 'nicolas' solo ....</p>
    </div>
    ---------- form.ts -------------------------------------
    this.nameField = new FormControl('', [
        Validators.required,
        MyValidators.isNicolas,
      ]);

    this.nameField.valueChanges
    .pipe(
      debounceTime(350),     <-------- cada cierto tiempo (para asisncronas)
    )
    .subscribe(value => {
      console.log(this.nameField.valid, value);
    });


    -------------------------------------
 */

    static isEnric(control: AbstractControl) {
        const value = control.value;
        if (value !== 'enric') {
          return { isEnric: true };
        }
        return null;
      }

    static isValidPassword(form: AbstractControl) {
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        if (confirmPassword.value !== password.value) {
          return { passwordNotValid: true };
        }
        return null;
      }
}
