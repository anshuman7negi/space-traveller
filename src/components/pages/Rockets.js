import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { rocketData } from '../../redux/rocket/rocketSlice';
import rocket from '../../assets/rocket.jpg';
import '../../style/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.rockets);
  console.log(data);

  useEffect(() => {
    dispatch(rocketData());
  }, [dispatch]);

  return (
    <div className="RocketContainer">
      <div className="RocketList">
        <img src={rocket} alt="" />
        <div className="RocketDetails">
          <h3>Falcon 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Officia ullam culpa libero ducimus nobis in,
            debitis maxime ab error quae.
            Voluptas, alias possimus numquam odio unde provident explicabo qui totam accusamus.
          </p>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};
export default Rockets;
