import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [wishList, setWishList] = useState<string>('');
  const [wishListItems, setWishListItems] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWishList(event.target.value);
  };

  const addWishListButton = () => {
    if (wishList.trim() !== '') {
      setWishListItems([...wishListItems, wishList]);
      setWishList('');
    }
  };

  return (
    <div className={styles.container}>
      <div>リストを作る</div>
      <div className={styles.wishListOpen}>
        <div>
          <input
            placeholder="+名前"
            value={wishList}
            onChange={handleInputChange}
            className={styles.inputWishList}
          />
          <button onClick={addWishListButton} className={styles.buttonWishList}>
            Add to Wish List
          </button>
        </div>
        <h3>
          {wishListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Home;
