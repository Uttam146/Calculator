import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  incNumber,
  decNumber,
  mulNumber,
  divNumber
} from './action/index';

const App = () => {
  const mystate = useSelector((state) => state.changethenumber);
  const mysecondstate = useSelector((state) => state.multNumber);
  const dispatch = useDispatch();
return(
  <>
  <div className='container'>
  <h1>Increment/Decrement counter</h1>
  <h2>Using React and Redux</h2>
  <div>
  <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(decNumber(5))}><span>-</span></button>
  <input type="text" value={mystate} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly/>
  <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(incNumber(5))}><span>+</span></button>
  </div>
  </div>
  <div className='container my-5'>
  <h1>Multiply/Divide</h1>
  <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(mulNumber(5))}><span>*</span></button>
  <input type="text" value={mysecondstate} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly/>
  <button type="button" className="btn btn-secondary btn-lg" onClick={() => dispatch(divNumber(5))}><span>/</span></button>
  </div>
  </>
)
}
// 
// onClick={dispatch(decNumber())}
export default App;
