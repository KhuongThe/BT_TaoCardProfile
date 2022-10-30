
import ReactDOM from 'react-dom/client';
import './index.css';

const element = 

<div className='card'>
  <div className='card-head'>
  <img className='theme' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIBu-OU7JxSKohNIQdkj7_ajAsTURbN_Gew&usqp=CAU' alt='anhnen'></img>
  <img className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTpuIQp9H9MJkFsBMCise6XJp21DnmKsDeA&usqp=CAU' alt='avatar'>
  </img>
  </div>
  <div className='card-body'>
    <h2>The Khuong</h2>
    <p>Đây là Trang Facebook Cá nhân của Thek</p>
    <button type='button'>Follow</button>
  </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);