import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/core/interceptors/auth-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export class AuthItem {
  title: string = '';
  route: string | any[] = [];
  iconName: string = '';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  http = inject(HttpClient);
  asButton: boolean = false;
  authItem: AuthItem = new AuthItem();

  constructor(private authService: AuthService,
              private sanitizer: DomSanitizer,
              private registry: MatIconRegistry) {
    this.authItem.iconName = 'login-variant';
    this.registry.addSvgIcon('login-variant', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/login-variant.svg'))
  }

  login(): void {
    this.authService.login();
  }

  ngOnInit(): void {
    this.http.get<string>('/api/secured').subscribe(console.log)
  }

}
