import React, { useEffect } from 'react';
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
    if(name === "Birthday") 
    {
      document.body.style.backgroundImage = "url(./images/Background/BirthdayBr.jpg)";
    } 
    else if (name === "Congratulations") 
    {
      document.body.style.backgroundImage = "url(./images/Background/CongratsBr.jpg)";
    } 
    else if (name === "Easter") 
    {
      document.body.style.backgroundImage = "url(./images/Background/EasterBr.jpg)";
    } 
    else if (name === "Gift Baskets") 
    {
      document.body.style.backgroundImage = "url(./images/Background/GiftBr.jpg)";
    } 
    else if (name === "Just Because") 
    {
      document.body.style.backgroundImage = "url(./images/Background/JustCauseBr.jpg)";
    } 
    else if (name === "Love and Romance") 
    {
      document.body.style.backgroundImage = "url(./images/Background/LoveBr.jpg)";
    } 
    else if (name === "Mother's Day") 
    {
      document.body.style.backgroundImage = "url(./images/Background/MomBr.jpg)";
    } 
    else if (name === "Sympathy") 
    {
      document.body.style.backgroundImage = "url(./images/Background/SympathyBr.jpg)";
    }
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <br/><br/>
      {/* <h2>Choose a Category:</h2> */}
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item.id, item.name);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
