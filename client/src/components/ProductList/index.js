import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  // Registers a change in the dropdown and sends change as parameter to handleSort method
  const handleSelect = (event) => {
    handleSort(event.target.value);
  }

  // Sorts products according to the sort type selected
  const handleSort = (sortType) => {
    if (sortType === 'ASC') {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: state.products.sort((a, b) => a.price - b.price),
      });
    } else {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: state.products.sort((a, b) => b.price - a.price),
      });
    }
  };

  return (
    <div className='my-2'>
      <h2>Our Products:</h2>
      <div>
        <select id='sort' defaultValue={'DEFAULT'} onChange={handleSelect}>
          <option value='DEFAULT' disabled>Sort Price</option>
          <option
            value='ASC'
          >
            Low to High
          </option>
          <option
            value='DESC'
          >
            High to Low
          </option>
        </select>
      </div>
      {state.products.length ? (
        <div className='flex-row'>
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt='loading' /> : null}
    </div>
  );
}

export default ProductList;
