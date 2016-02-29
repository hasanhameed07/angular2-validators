# angular2-validators
A set of modules that can be used to validate various inputs in your Angular 2 typescript app.


## Example Usage

Use in your form component like this
```TypeScript
import { CORE_DIRECTIVES,
          FormBuilder,
        	Validators,
        	Control,
        	ControlGroup,
        	FORM_DIRECTIVES } from 'angular2/common';
import { CommonValidators } from '../shared/validators/common';


export class SignupComponent  {

  form: ControlGroup
  username: Control
  email: Control
  password: Control
  passwordConfirm: Control

  constructor(private _formBuilder: FormBuilder) {
    this.username = new Control("", Validators.compose([Validators.required]));
    this.email = new Control("", Validators.compose([Validators.required, CommonValidators.email]));
    this.password = new Control("", Validators.compose([Validators.required]));
    this.passwordConfirm = new Control("", Validators.compose([Validators.required ]));

		this.form = _formBuilder.group({
      username:  this.username,
      email:  this.email,
      password:  this.password,
      passwordConfirm:  this.passwordConfirm
		}, {validator: CommonValidators.matchingPasswords('password', 'passwordConfirm')});
  }

  submitForm() {
     	console.log(JSON.stringify(this.form.value))
  }

}
```

In your HTML check the correspondent error
```HTML
<div class="form-group has-feedback">
  <input required ngControl="email" type="email" class="form-control" placeholder="Email" maxlength="50">
  <div class="control-msgs" *ngIf="email.dirty && !email.valid && !email.pending">
    <p *ngIf="email.errors.required">Email is required.</p>
    <p *ngIf="email.errors.email">Email is not valid.</p>
  </div>
</div>

<div class="form-group has-feedback">
  <input required ngControl="password" type="password" class="form-control" placeholder="Password" minlength="6" maxlength="20">
  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
  <div class="control-msgs" *ngIf="password.dirty && !password.valid && !password.pending">
    <p *ngIf="password.errors.required">Password is required.</p>
    <p class="error-msg" *ngIf="password.dirty && password.touched && (password.errors.minlength || password.errors.maxlength)">Password must be between 6 to 20 in length.</p>
  </div>
</div>

<div class="form-group has-feedback">
  <input required ngControl="passwordConfirm" type="password" class="form-control" placeholder="Retype password" minlength="6" maxlength="20">
  <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
  <div class="control-msgs" *ngIf="passwordConfirm.dirty && !passwordConfirm.valid && !passwordConfirm.pending">
    <p *ngIf="passwordConfirm.errors.required">Confirmation password is required.</p>
  </div>
  <div class="control-msgs" *ngIf="passwordConfirm.dirty && form.errors && form.errors.matchingPasswords">
    <p *ngIf="form.errors.matchingPasswords">Passwords do not match.</p>
  </div>
</div>
```
