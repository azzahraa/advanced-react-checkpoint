import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


const products = [
  { price: "20", name: "shirt", category: "clothes" },
  { price: "50", name: "mixer", category: "electronic" },
  { price: "65", name: "suit", category: "clothes" },
  { price: "15", name: "tie", category: "clothes" },
];
const ProductTable = (props) => {
  return (
    <>
      {props.products.map((el, i) => (
        <tr key={i}>
          <td style={tableStyle}>{el.name}</td>
          <td style={tableStyle}>{el.price}</td>
          <td style={tableStyle}>{el.category}</td>
        </tr>
      ))}
    </>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
}

const tableStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  border: "1px solid black"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableStyle}>name</th>
              <th style={tableStyle}>price</th>
              <th style={tableStyle}>category</th>
            </tr>
          </thead>
          <tbody>
            <ProductTable products={products} />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;