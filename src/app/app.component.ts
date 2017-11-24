import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private activeRouter: ActivatedRoute) {

    }

    ngOnInit(): void {
        //this.router.navigate(['/training', '0', '0']);
    }
}
