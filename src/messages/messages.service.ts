import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    constructor(private readonly messagesRepo: MessagesRepository) {}

    async findAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }
}
