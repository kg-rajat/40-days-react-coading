import React from 'react'
import Layout from '../Layout/Layout'
import {Link} from 'react-router-dom';
import Banner1 from '../images/banner1.jpeg'
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
       <div className="home" style={{ backgroundImage: `url(${Banner1})` }}>
        <div className="headerContainer">
          <h1>Radhamohan Sweet</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
};

export default Home;
