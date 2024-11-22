import { Button } from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Format from "../../components/Format/Format";
import { ProductArr } from "../../constants";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <Format>
      <div className="productList">
        <div className="product_list_btn">
          <Button label="feature" />
          <Button label="latest" />
        </div>
        <div className="product_list_items">
          {ProductArr.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              availability={item.availability}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Format>
  );
};

export default ProductList;
