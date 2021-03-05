import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from '@/models/api-client/items';

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json',
};

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient = new ItemsApiClientModel(urls);
export default itemsApiClient;
