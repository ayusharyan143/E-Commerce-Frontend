import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="">

      <Navigation/>
      
      {/* <div><HomePage/></div> */}

      <Product />
      

      <Footer />
    </div>
  );
}

export default App;
