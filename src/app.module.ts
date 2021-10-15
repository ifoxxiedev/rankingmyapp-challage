import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './Characters/character.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CharacterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
