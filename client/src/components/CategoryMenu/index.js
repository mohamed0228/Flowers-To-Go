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
      document.body.style.backgroundColor = "#A4A9A7";
    } 
    else if (name === "Congratulations") 
    {
      document.body.style.backgroundColor = "#BADBCA";
    } 
    else if (name === "Easter") 
    {
      document.body.style.backgroundColor = "#FDEBCE";
    } 
    else if (name === "Gift Baskets") 
    {
      document.body.style.backgroundColor = "#ACECAE";
    } 
    else if (name === "Just Because") 
    {
      document.body.style.backgroundColor = "#F3D7B2";
    } 
    else if (name === "Love and Romance") 
    {
      document.body.style.backgroundColor = "#DFA9D6";
    } 
    else if (name === "Mother's Day") 
    {
      document.body.style.backgroundColor = "#EFC1BA";
    } 
    else if (name === "Sympathy") 
    {
      document.body.style.backgroundColor = "#90CBF9";
    }

    // Updates the product list according to the category selected
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
            handleClick(item._id, item.name);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
