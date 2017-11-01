import { LeicaModel } from './leica-model';

class Order extends LeicaModel {
  static _endpoint = 'orders';
  static modelName = 'Order';
  static states = {
    created: 'Created'
  };
}

const payload = {
  id: '5e08519d-ce3f-4498-93ef-fafd3470e79a',
  slug: '1701-PS4-328',
  title: 'Health Clinic',
  description: 'Place to get information about the weather',
  created_at: '2015-11-06T00:00:00+00:00',
  updated_at: '2015-11-06T00:00:00+00:00',
  state: 'created'
};


describe('LeicaModel', () => {

  it('should create an instance', () => {
    expect(new LeicaModel()).toBeTruthy();
  });

  it('should return title, when available, for title_or_id', () => {
    const obj = new Order(payload);
    expect(obj.title_or_id).toEqual('Health Clinic');
  });

  it('should return slug, when title not available, for title_or_id', () => {
    const obj = new Order(payload);
    obj.title = '';
    expect(obj.title_or_id).toEqual('1701-PS4-328');
  });

  it('should return className', () => {
    const obj = new Order(payload);
    expect(obj.className).toEqual('Order');
  });

  it('should return baseEndpoint', () => {
    const obj = new Order(payload);
    expect(obj.baseEndpoint).toEqual('orders');
  });

  it('should return absolute_url', () => {
    const obj = new Order(payload);
    expect(obj.absolute_url).toEqual('/orders/5e08519d-ce3f-4498-93ef-fafd3470e79a');
  });
});
