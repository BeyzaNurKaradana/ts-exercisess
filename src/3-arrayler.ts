// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.

// Kodu buraya yazalım...
/* let ages = []:number */
let ages: number[] = [];

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.

// Kodu buraya yazalım...

let gameBoard: string[][] = [];

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}

// Kodu buraya yazalım...

type Product = {
  name: string;
  price: number;
};

const coffeeMug = {
  name: "coffee mug",
  price: 11.5,
};

console.log(coffeeMug.name);
console.log(coffeeMug.price);

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.

// Kodu buraya yazalım...

function getTotal(products: Product[]): number {
    let totalPrice = 0;
    for (const product of products) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  const products = [
    { name: "coffee mug", price: 11.50 },
    { name: "t-shirt", price: 25 },
    { name: "laptop", price: 1500 },
  ];
  
  console.log(getTotal(products)); 