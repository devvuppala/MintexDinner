import { ProductPricePipe } from './product-price.pipe';

describe('ProductPricePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('discount', () => {
    const pipe = new ProductPricePipe();
    expect(pipe.transform(1000,10)).toEqual(900);
  });
});
