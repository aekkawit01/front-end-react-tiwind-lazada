

import "./App.css";

import Navbar from './component/navbar'

import Icon from './component/icon'

import Flash_sell from './component/flash_sell'

import Lazmall from './component/lazmall'

import Category from './component/category'

import Product from './component/product'

import Footter from './component/footter'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Icon></Icon>
      <Flash_sell></Flash_sell>
      <Lazmall></Lazmall>
      <Category></Category>
      <Product></Product>
      <Footter></Footter>
    </div>
  );
}

export default App;
