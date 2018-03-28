import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-detail-view',
  templateUrl: './list-detail-view.component.html',
  styleUrls: ['./list-detail-view.component.scss']
})
export class ListDetailViewComponent implements OnInit {

  item: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['itemId']) {
        this.item = {id: params['itemId']};
      }
    });
  }

  ngOnInit() {
  }

}
