import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../service/product";

export const DetailProdukPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);

  return (
    <div className="container  py-5">
      {Object.keys(product).length > 0 && (
        <div className="row">
          <div className="image-content col-lg-6 col-md-6 px-2 border-radius">
            <img src={product.image} alt="" className="w-75 object-fit-cover" />
          </div>
          <div className="text-content col-lg-6 col-md-6 d-flex align-items-center">
            <div className="cont">
              <h2 className="text-black pb-2">{product.title}</h2>
              <p className="text-black fs-6">{product.description}</p>
              <h5>${product.price}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
