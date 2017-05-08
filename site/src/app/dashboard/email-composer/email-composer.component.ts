import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailService } from '../services/email.service';

declare var $: any;

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
    formDisabled: boolean;

    constructor(private builder: FormBuilder, private emailService: EmailService, private _ngZone: NgZone) { 
        window['angularComponentRef'] = {component: this, zone: _ngZone};
    }

    ngOnInit() {
        this.formDisabled = false;
        this.to = new FormControl('guillet84@gmail.com', Validators.required);
        this.subject = new FormControl('', Validators.required);
        this.message = new FormControl('', Validators.required);

        this.form = this.builder.group({
            'to': this.to,
            'subject': this.subject,
            'message': this.message
        });
    }

    sendEmail() {
        const email = this.form.value;
        var self = this;
        this.formDisabled = true;

        this.emailService.sendEmail(email.to,
            email.subject,
            email.message,
            () => {
                $.notify({
                    icon: "pe-7s-gift",
                    message: "Message sent!"
                },
                    {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });
                self.cleanForm();
            },
            () => {
                $.notify({
                    icon: "pe-7s-gift",
                    message: "Unable to send the email!"

                },
                    {
                        type: 'success',
                        timer: 4000,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });
                this.formDisabled = false;
            });

        console.log(email);
    }

    cleanForm() {
        this.subject.setValue('');
        this.message.setValue('');
        this.formDisabled = false;
    }
}