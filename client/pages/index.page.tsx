import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>欲しいものを検索</div>
        <input placeholder="例:マグカップ"></input>
      </div>
    </div>
  );
};

export default Home;
