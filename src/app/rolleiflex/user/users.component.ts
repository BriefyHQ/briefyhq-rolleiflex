import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: string;
  items: User[];
  pagination: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  get hasItems(): boolean {
    const items = this.items;
    let status = false;
    if ((items) && (items.length > 0)) {
      status = true;
    }
    return status;
  }

  get itemsCount(): number {
    const items = this.items;
    let count = 0;
    if (items) {
      count = items.length;
    }
    return count;
  }

  ngOnInit() {
    this.title = '';
    this.route.data.forEach(
      (data) => {
        this.title = data.title;
        this.pagination = data.list.pagination;
        this.items = data.list.data;
    });
  }

}
