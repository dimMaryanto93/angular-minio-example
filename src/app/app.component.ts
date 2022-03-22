import {Component, OnInit} from '@angular/core';
import {MinioService} from "./services/minio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    let minioClient = this._minioService.getMinioClient();
    minioClient.listBuckets((err, data) => {
      if (err) return console.log('error bucket', err)

      console.log('list bucket: ', data);
    })
  }

  constructor(private _minioService: MinioService) {
  }
}
