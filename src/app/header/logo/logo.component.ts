import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.less']
})
export class LogoComponent {
    placeholder = 'LOGO';

    constructor(private titleService: Title) {}

    onLogoClick(): void {
        this.titleService.setTitle('AngularTasks');
    }
}