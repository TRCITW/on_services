import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../db/database.service";
import {PublicationModel} from "../types/models/publication-model";

@Injectable()
export class PublicationsService {

    constructor(private readonly database: DatabaseService) {
    }

    async fetchPublications(): Promise<PublicationModel[]> {
        const res = await this.database.publications.findMany({
            include: {
                media: true
            }
        })
        return res as PublicationModel[]
    }

}
