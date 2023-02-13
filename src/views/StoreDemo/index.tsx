import { useSelector, useDispatch } from 'react-redux';
import { ageIncremented } from '@/store/features/userSlice';
import { incremented } from '@/store/features/counterSlice';
import type { RootState } from '@/store/index';

function Store() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const age = useSelector((state: RootState) => state.user.age);
  const dispatch = useDispatch();

  const userAgeIncremented = () => {
    dispatch(ageIncremented(5));
  };

  const counterIncremented = () => {
    dispatch(incremented());
  };

  return (
    <div className="Store">
      <h1>Counter</h1>
      <div>
        <span>counter:</span>
        <span>{counter}</span>
        <div>
          <button onClick={counterIncremented}>counter add</button>
        </div>
      </div>
      <h1>User</h1>
      <div>
        <button onClick={userAgeIncremented}>age is {age}</button>
      </div>
    </div>
  );
}

export default Store;
