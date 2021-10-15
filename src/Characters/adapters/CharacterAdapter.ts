import { AxiosInstance } from 'axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosHttpRequestorProvider } from '../../Core/HttpRequestorModule/providers/axios-requestor.provider';
import { ICharacterPaginator, ICharacterSearchInterface } from '../interfaces';
import {
  ICharacter,
  ICharacterResult,
} from '../interfaces/characters.interface';

@Injectable()
export class CharacterAdapter {
  private readonly requestor: AxiosInstance;
  private readonly logger = new Logger(CharacterAdapter.name);
  constructor(
    readonly config: ConfigService,
    readonly httpServiceRequestProvider: AxiosHttpRequestorProvider,
  ) {
    this.requestor = httpServiceRequestProvider.makeInstance(
      config.get('CHARACTERS_API_URL'),
    );
  }
  async findAllCharactersPaginator(
    { page, size }: ICharacterPaginator,
    search?: ICharacterSearchInterface,
  ): Promise<ICharacterResult[]> {
    try {
      const { data } = await this.requestor.get<ICharacter>('/character/');
      let results = data.results ? data.results : [];
      if (!results.length) {
        return results;
      }

      if (search && search.name) {
        results = results.filter((result) =>
          result.name.toLowerCase().includes(search.name),
        );
      }

      const sizeParsed = Number(size);
      const skip = page > 1 ? (page - 1) * size : 0;
      return results.length > skip
        ? results.slice(skip, skip + sizeParsed)
        : results;
    } catch (err) {
      this.logger.error(`Fail to fetch characters ${err}`);
      throw new BadRequestException(err);
    }
  }
}
