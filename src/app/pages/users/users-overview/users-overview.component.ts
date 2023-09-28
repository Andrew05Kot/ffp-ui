import { Component, inject } from '@angular/core';
import { UserService } from '@app/services/api/user.service';
import { ApiService } from '@app/services/api/api.service';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent {

  displayedColumns: string[] = [
    'imageUrl',
    'fullName',
    'birthday',
    'address',
    'country',
    'city',
    'street',
    'createdDate',
    'lastModifiedDate'
  ];

  service: ApiService = inject(UserService);
}