import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [wishList, setWishList] = useState<string>('');
  const [wishListItems, setWishListItems] = useState<string[]>([]);
  const [wishListOpen, setWishListOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWishList(event.target.value);
  };
  const addWishListButton = () => {
    if (wishList.trim() !== '') {
      setWishListItems([...wishListItems, wishList]);
      setWishList('');
    }
  };
  const ClickMakeList = () => {
    if (wishListOpen === true) {
      setWishListOpen(false);
    } else setWishListOpen(true);
  };

  return (
    <div className={styles.container}>
      <div onClick={ClickMakeList} className={styles.mainpageFunctions}>＋リストを作成する</div>
      <div className={!wishListOpen ? styles.wishListClose : styles.wishListOpen}>
        <div>
          <input
            placeholder="+欲しいものリスト"
            value={wishList}
            onChange={handleInputChange}
            className={styles.inputWishList}
          />
          <button onClick={addWishListButton} className={styles.buttonWishList}>
            addWishList
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
