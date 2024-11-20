import "./BestSelling.scss";
import Format from "../../components/Format/Format";
import { bestSelling } from "../../constants";
import Card from "../../components/Card/Card";

const BestSelling = () => {
  return (
    <Format>
      <div className="bestSeller">
        {bestSelling.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            availability={item.availability}
          />
        ))}
      </div>
    </Format>
  );
};

export default BestSelling;
