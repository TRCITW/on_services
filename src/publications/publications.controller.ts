import {Controller, Get} from '@nestjs/common';
import { PublicationsService } from './publications.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Publications Controller")
@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {
  }

  @Get("/fetch_publications")
  fetchPublications() {
    return this.publicationsService.fetchPublications()
  }
}
