import {Component, OnInit} from '@angular/core';
import {MinioService} from "./services/minio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    let minioClient = this._minioService.getBucketList();
    console.log('list bucket: ', minioClient);
  }

  constructor(private _minioService: MinioService) {
  }
}
