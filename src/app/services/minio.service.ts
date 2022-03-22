import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import * as AWS from "aws-sdk"

@Injectable({
  providedIn: 'root'
})
export class MinioService {

  private bucketName: string;
  private endpoint: string;
  private port: number;
  private useSsl: boolean;
  private accessKey: string;
  private secretKey: string;

  constructor() {
    this.bucketName = environment.minio_s3_bucket_name;
    this.endpoint = environment.minio_s3_endpoint;
    this.port = +environment.minio_s3_port;
    this.useSsl = environment.minio_s3_use_ssl;
    this.accessKey = environment.minio_s3_access_key;
    this.secretKey = environment.minio_s3_secret_key;

  }

  public getMetadata() {
    return {
      'Content-Type': 'application/octet-stream'
    }
  }

  public getMinioClient() {
    return new AWS.S3({
      accessKeyId: this.accessKey,
      secretAccessKey: this.secretKey,
      endpoint: `http://${this.endpoint}:${this.port}`,
      s3ForcePathStyle: true,
      signatureVersion: 'v4'
    })
  }

}
