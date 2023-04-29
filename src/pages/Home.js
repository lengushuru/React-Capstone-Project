import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const cyptoData = useSelector((state) => state.cripto.cyptoData);
  let flag = 0;
  let first = true;
  const toggle = () => {
    let color = '';
    if (flag === 0 && first) {
      color = '';
    } else if (flag < 3) {
      color = '#c50876';
    } else {
      color = '';
    }

    first = false;

    if (flag === 4) {
      flag = 0;
    }
    flag += 1;

    return color;
  };

  const [search, setSearch] = useState('');

  if (cyptoData.length === 0) {
    return <h1>Loading...</h1>;
  }

  const filteredCoins = cyptoData.filter((coin) => coin.name
    .toLowerCase().includes(search.toLowerCase()));
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-content">
      <input type="text" placeholder="Search" className="search" onChange={handleChange} />
      <div className="coin-container">
        <div className="home-header">
          <img src="https://www.crypto-nation.io/cn-files/uploads/2021/07/Stellar-Logo-by-Crypto-Nation-400x400.png" className="header-img" alt="logo" />
        </div>
        <div className="home-header">
          <h1>Crypto Coins</h1>
        </div>
        {filteredCoins.length > 0 && filteredCoins.map((item) => (
          <div key={item.id} className="coin" style={{ backgroundColor: toggle() }}>
            <Link to={`/details/${item.id}`}>
              <img src={item.image.small} alt={item.name} />
              <div className="coin-name">
                <h2 className="coin-name1">{item.name}</h2>
                <p className="coin-price">
                  $
                  {item.market_data.current_price.usd}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
