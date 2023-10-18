import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Button from "../Elements/Button/button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="d-flex justify-content-center py-5">
      <div className="w-25 border-color">{children}</div>
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-4 pb-2">
      <h5>{title}</h5>
      <p>{children.substring(0, 100)}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-lg-center px-3 pb-2">
      <span className="fw-bold">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        variant="bg-primary border-radius"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to chart
      </Button>
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <div>
        <img src={image} alt="" className="d-block w-100" />
      </div>
    </Link>
  );
};
CardProduct.Body = Body;
CardProduct.Header = Header;
CardProduct.Footer = Footer;

export default CardProduct;
