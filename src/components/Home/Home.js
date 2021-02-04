import React from "react";
import prime from "../../assets/img/prime.jpg";
import style from "../../components/Home/Home.module.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div>
      <img src={prime} alt="primelogo" className={style.prime} />
      <div className={style.row}>
        <Product
          id="1"
          title="Iphone SE 2020"
          price="399"
          rating="4.6"
          image="https://m.media-amazon.com/images/I/81hCytKTUTL._FMwebp__.jpg"
        />
        <Product
          id="2"
          title="Iphone 12 mini"
          price="450"
          rating="4.7"
          image="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/2/r/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfcswp9fh5.jpeg?q=70"
        />
        <Product
          id="3"
          title="Iphone 12"
          price="500"
          rating="4.5"
          image="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dqjuq8sug.jpeg?q=70"
        />
      </div>
      <div className={style.row}>
        <Product
          id="4"
          title="Iphone 12 pro Max"
          price="650"
          rating="4.8"
          image="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/g/n/w/apple-iphone-12-pro-max-dummyapplefsn-original-imafwgcyhmehwy2z.jpeg?q=70"
        />
        <Product
          id="5"
          title="Macbook Air M1"
          price="550"
          rating="4.5"
          image="https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/s/2/g/apple-original-imafxfyqykyghjg6.jpeg?q=70"
        />
      </div>
      <div className={style.row}>
        <Product
          id="6"
          title="Imac Pro"
          price="2000"
          rating="4.2"
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6jm24JGQYUTKHDWt6C-LQMfD3P2oOOmQ1GnmncqP95m1Q0qgKkLDeYbSKnhHQLqMyCHhDz_6BGkc&usqp=CAc"
        />
      </div>
    </div>
  );
}

export default Home;
