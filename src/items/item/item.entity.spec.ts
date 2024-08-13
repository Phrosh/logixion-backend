import { ItemEntity } from './item.entity';

describe('Item', () => {
  it('should be defined', () => {
    expect(new ItemEntity()).toBeDefined();
  });
});
