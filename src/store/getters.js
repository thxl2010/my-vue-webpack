export const shop = (store) =>
  store.shopList.filter((item) => item.username === store.user.username)[0] ||
  {};
