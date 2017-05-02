import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'email-composer',
    templateUrl: 'email-composer.component.html'
})

export class EmailComposerComponent implements OnInit {

    form: FormGroup;
    subject: FormControl;
    body: FormControl;

    constructor(private builder: FormBuilder) { 
        
        this.subject = new FormControl('', Validators.required);
        this.body = new FormControl('', Validators.required);

        this.form = this.builder.group({
            'subject': this.subject,
            'body': this.body
        });
    }

    ngOnInit() {
    }

    onSubmit(){
        const email = this.form.value;

        console.log(email);
    }
}