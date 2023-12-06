import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public firstname!: string;

  @Column({ type: 'varchar' })
  public lastname!: string;

  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'text' })
  public content!: string;
}
