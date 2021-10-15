import { Module } from '@nestjs/common';
import { HttpRequestorModule } from 'src/Core/HttpRequestorModule/http.requestor.module';
import { CharacterAdapter } from './adapters/CharacterAdapter';
import { CharacterController } from './controllers/character.controller';

@Module({
  imports: [HttpRequestorModule],
  controllers: [CharacterController],
  providers: [CharacterAdapter],
  exports: [],
})
export class CharacterModule {}
