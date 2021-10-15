import { Module } from '@nestjs/common';
import { AxiosHttpRequestorProvider } from './providers/axios-requestor.provider';

@Module({
  exports: [AxiosHttpRequestorProvider],
  providers: [AxiosHttpRequestorProvider],
})
export class HttpRequestorModule {}
