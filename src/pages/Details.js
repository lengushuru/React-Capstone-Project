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
        <h1>{detailData[0].id}</h1>
        <p>{detailData[0].description}</p>
      </div>
    );
  }
  return <h1>Loading...</h1>;
};

export default Details;
