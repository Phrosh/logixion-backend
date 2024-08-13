import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
    private items = [];

    findAll(): any[] {
        return this.items;
    }

    findOne(id: string): any {
        return this.items.find(item => item.id === id);
    }

    create(item: any) {
        this.items.push(item);
    }

    update(id: string, item: any) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items[index] = item;
        }
    }

    remove(id: string) {
        this.items = this.items.filter(i => i.id !== id);
    }
}
