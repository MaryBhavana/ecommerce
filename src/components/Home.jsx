import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543__480.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/chocolate-candies-with-different-tasty-sweet-food-background_84485-1606.jpg?w=2000"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/6ebc9136-b6ba-4f3c-a169-c4ae01c752c9/29bbc30e-3516-4a4a-9e07-26e872f83e31/1280x720/match/image.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};

export default Home;
