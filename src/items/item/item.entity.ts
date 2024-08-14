import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from 'logixion-types';

@Entity()
export class ItemEntity implements ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
