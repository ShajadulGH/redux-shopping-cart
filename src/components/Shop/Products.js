import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "f1",
    name: "Test",
    description: "This is a test!",
    price: 100,
  },
  {
    id: "f2",
    name: "Test 01",
    description: "This is a test!",
    price: 200,
  },
  {
    id: "f3",
    name: "Test 02",
    description: "This is a test!",
    price: 130,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
