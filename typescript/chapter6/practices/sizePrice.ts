//방법1
type Size = { id: "XS" | "S" | "M" | "L" | "XL"; price: number };
//방법2
type Size2 = { id: keyof typeof sizeOption; price: number };
const SIZE = [
    { id: "XS", price: 8000 },
    { id: "S", price: 10000 },
    { id: "M", price: 12000 },
    { id: "L", price: 14000 },
    { id: "XL", price: 15000 },
] as const; //방법 3

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
    (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
    0
);
