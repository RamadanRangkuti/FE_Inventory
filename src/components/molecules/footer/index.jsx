import { useDispatch, useSelector } from 'react-redux';
import { getListProductsThunk } from "../../../store/product/action"
import { useEffect } from 'react';

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.list.data);
  const isLoading = useSelector((state) => state.product.list.isLoading);
  const isError = useSelector((state) => state.product.list.isError);
  const errorMessage = useSelector((state) => state.product.list.errorMessage);

  useEffect(() => {
    // Mengambil data produk saat komponen dipasang
    dispatch(getListProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    // Mengambil data produk saat komponen dipasang
    dispatch(getListProductsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};


export default ProductList