import { Component } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})

export class ErrorComponent {
    text = 'An error occurred while displaying the data';
}
