import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteArgs } from './args/createNote.args';
import { UpdateNoteArgs } from './args/updatenote.args';
import { NoteEntity } from './entity/note.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(NoteEntity)
        public readonly noteRepo: Repository<NoteEntity>,
    ) {}

    async searchNotes(keyword: string): Promise<NoteEntity[]> {
        keyword = keyword?.toLowerCase();
        const query = keyword
            ? { where: [{ title: Like(`%${keyword}%`) }, { message: Like(`%${keyword}%`) }] }
            : {};
        return await this.noteRepo.find({
            ...query,
            order: {
                createdDate: 'DESC',
            },
        });
    }

    async findNoteById(id: number): Promise<NoteEntity> {
        return await this.noteRepo.findOne({ where: { id } });
    }

    async deleteNote(id: number): Promise<number> {
        await this.noteRepo.delete(id);
        return id;
    }

    async createNote(createNoteArgs: CreateNoteArgs): Promise<NoteEntity> {
        const note: NoteEntity = new NoteEntity();
        note.title = createNoteArgs.title;
        note.message = createNoteArgs.message;
        return await this.noteRepo.save(note);
    }

    async updateNote(updateNoteArgs: UpdateNoteArgs): Promise<NoteEntity> {
        let note: NoteEntity = await this.noteRepo.findOne({
            where: { id: updateNoteArgs.id },
        });
        note.title = updateNoteArgs.title;
        note.message = updateNoteArgs.message;
        return await this.noteRepo.save(note);
    }
}
