/*
 statusCode: 200,
      data: {},
      metadata: {
        message: "Data Retrieve successfully",
        accessToken: token,
      }
        */

export interface APIRequest<T> {
  statusCode: number;
  statusMessage: StatusMessage;
  data: T;
  metadata: MetaData;
}

export interface APIResponse<T> {
  statusCode: number;
  statusMessage: StatusMessage;
  data: T;
  metadata: MetaData;
}

export interface EmptyData {}

export enum StatusMessage {
  SUCCESS = "success",
  FAILED = "failed",
}

export interface MetaData {
  message: string;
  accessToken: string | null | "";
  requestData?: any;
}
