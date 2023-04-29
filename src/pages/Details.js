import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCriptoDetails } from '../redux/creptoDetails/DetailSlice';

const Details = () => {
  const { criptoId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCriptoDetails(criptoId));
  }, [dispatch, criptoId]);

  const { detailData, loading } = useSelector((state) => state.detail);
  if (!loading && detailData.length > 0) {
    return (
      <div>
        <div className="detail-header">
          <img src={detailData[0].image} alt={detailData[0].name} />
          <div>
            <p>{detailData[0].id}</p>
            <p>
              rank:
              {detailData[0].market_data.market_cap_rank}
            </p>
          </div>
        </div>
        <div className="detail-container1">
          <div>
            <p>last updated</p>
            <p className="detail-data">{detailData[0].last_updated}</p>
          </div>
          <div>
            <p>current price</p>
            <p className="detail-data">
              $
              {detailData[0].market_data.current_price.usd}
            </p>
          </div>
          <div>
            <p>high 24h</p>
            <p className="detail-data">
              $
              {detailData[0].market_data.high_24h.usd}
            </p>
          </div>
          <div>
            <p>low 24h</p>
            <p className="detail-data">
              $
              {detailData[0].market_data.low_24h.usd}
            </p>
          </div>
          <div>
            <p>symbol</p>
            <p className="detail-data">{detailData[0].symbol}</p>
          </div>
          <div>
            <p>liquidity score</p>
            <p className="detail-data">
              $
              {detailData[0].liquidity_score}
            </p>
          </div>
          <div>
            <p>market_cap rank</p>
            <p className="detail-data">
              $
              {detailData[0].market_cap_rank}
            </p>
          </div>
          <div>
            <p> public score</p>
            <p className="detail-data">{detailData[0].public_interest_score}</p>
          </div>

          {detailData[0].genesis_date && (
          <div>
            <p className="detail-data">Genesis Date</p>
            <p className="detail-data">{detailData[0].genesis_date}</p>
          </div>
          )}
        </div>
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

export default Details;
