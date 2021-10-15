import { Controller, Get, Query } from '@nestjs/common';
import { CharacterAdapter } from '../adapters/CharacterAdapter';

@Controller('/api/v1/character')
export class CharacterController {
  constructor(private readonly characterAdapter: CharacterAdapter) {}

  @Get('')
  public findAllCharacters(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('name') name: string,
  ) {
    return this.characterAdapter.findAllCharactersPaginator(
      {
        page: page ?? 0,
        size: size ?? 10,
      },
      {
        name,
      },
    );
  }
}
