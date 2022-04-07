import React, { useEffect } from 'react';
import Home from '../../pages/Home';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const home = new Home();

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  // Event listener for category buttons
  const handleClick = (id, name) => {
    // If-else statements that change the background image to correspond to the category
    if (name === 'All Flowers') {
      document.body.style.backgroundColor = 'aliceblue';
    } else if (name === 'Birthday') {
      document.body.style.backgroundColor = '#A4A9A7';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Congratulations') {
      document.body.style.backgroundColor = '#BADBCA';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Easter') {
      document.body.style.backgroundColor = '#FDEBCE';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Gift Baskets') {
      document.body.style.backgroundColor = '#ACECAE';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Just Because') {
      document.body.style.backgroundColor = '#F3D7B2';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Love and Romance') {
      document.body.style.backgroundColor = '#DFA9D6';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === "Mother's Day") {
      document.body.style.backgroundColor = '#EFC1BA';
      home.hideComponent('showHideFlowerCarousel');
    } else if (name === 'Sympathy') {
      document.body.style.backgroundColor = '#90CBF9';
      home.hideComponent('showHideFlowerCarousel');
    }

    // Updates the product list according to the category selected
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <br />
      <br />
      <button
        onClick={() => {
          handleClick(null, 'All Flowers');
        }}
      >
        <a href='/#flower-products'>All Flowers</a>
      </button>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id, item.name);
          }}
        >
          <a href='/#flower-products'>{item.name}</a>
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
