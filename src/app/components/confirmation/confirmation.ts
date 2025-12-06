import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
  standalone: false
})
export class Confirmation implements OnInit {
  name: string = '';
  total: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.total = Number(params['total']);
    });
  }
}
