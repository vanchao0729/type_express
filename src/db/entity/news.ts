import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class News {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    created_time: Date;

    @Column()
    updated_time: Date;

    @Column()
    author_id: number;

    @Column()
    author_name: string;

}