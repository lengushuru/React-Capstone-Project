import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const cyptoData = useSelector((state) => state.cripto.cyptoData);

  if (cyptoData.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="coin-container">
      {/* <h1>Home</h1>
      <h2>Cripto Data</h2> */}
      {cyptoData.length > 0 && cyptoData.map((item) => (
        <div key={item.id} className="coin">
          <Link to={`/details/${item.id}`}>
            <h3>{item.name}</h3>
            <img src={item.image.small} alt={item.name} />
            <p>{item.symbol}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
