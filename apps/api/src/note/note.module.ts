import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';
import { NoteEntity } from './entity/note.entity';

@Module({
    imports: [TypeOrmModule.forFeature([NoteEntity])],
    controllers: [],
    providers: [NoteResolver, NoteService],
})
export class NoteModule {}
