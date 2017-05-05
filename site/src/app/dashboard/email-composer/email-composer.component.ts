import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
    moduleId: module.id,
    selector: 'email-composer',
    templateUrl: 'email-composer.component.html'
})

export class EmailComposerComponent implements OnInit {

    form: FormGroup;
    to: FormControl;
    subject: FormControl;
    message: FormControl;

    constructor(private builder: FormBuilder, private emailService: EmailService) { }

    ngOnInit() {
        this.to = new FormControl('guillet84@gmail.com  ', Validators.required);
        this.subject = new FormControl('', Validators.required);
        this.message = new FormControl('', Validators.required);

        this.form = this.builder.group({
            'to': this.to,
            'subject': this.subject,
            'message': this.message
        });
    }

    onSubmit() {
        const email = this.form.value;
        this.emailService.sendEmail(email.to, email.subject, email.message);

        console.log(email);
    }
}