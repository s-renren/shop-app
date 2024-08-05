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
      <div>
        <input placeholder="+欲しいものリスト" value={wishList} onChange={handleInputChange} />
        <button onClick={addWishListButton}>addWishList</button>
        <div>
          {wishListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
