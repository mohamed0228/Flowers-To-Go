import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function FlowerCarousel() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

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
    if (name === 'Easter') {
      document.body.style.backgroundColor = '#FDEBCE';
    } else if (name === 'Congratulations') {
      document.body.style.backgroundColor = '#BADBCA';
    } else if (name === "Mother's Day") {
      document.body.style.backgroundColor = '#EFC1BA';
    }
    // Updates the product list according to the category selected
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className='carousel-wrapper'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div
          className='banner'
          onClick={() => {
            handleClick(categories[2]._id, 'Easter');
          }}
        >
          <img src='./images/carouseleaster.jpg' alt='PKC' />
        </div>
        <div
          className='banner'
          onClick={() => {
            handleClick(categories[1]._id, 'Congratulations');
          }}
        >
          <img src='./images/carouselgrad.jpg' alt='CD' />
        </div>
        <div
          className='banner'
          onClick={() => {
            handleClick(categories[6]._id, "Mother's Day");
          }}
        >
          <img src='./images/carouselmom.jpg' alt='FF' />
        </div>
      </Carousel>
    </div>
  );
}

export default FlowerCarousel;
