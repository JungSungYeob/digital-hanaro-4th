function discount() {
  const dcRate = 0.1;
  return (price) => {
    return price * dcRate;
  };
}

const items = [{ item: "상품 A", price: 32000 }];

const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice);
  console.log(item, salePrice);
}
