import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { data } from "./Data";


const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, id, text, job, image} = data[index]

    const checkNumber = (number) => {
      if (number > data.length - 1) {
        return 0
      } 
      if (number < 0) {
        return data.length - 1
      }
      return number
    }

      const nextPerson = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };

    const prevBtn = () => {
      setIndex((index) => {
        let newIndex = index - 1
        return checkNumber(newIndex)
      })
    }

    const randomNumber = () => {
      let random = Math.floor(Math.random() * data.length);
        if (random === index) {
          random = index + 1
        }
        setIndex(checkNumber(random))
    }

    useEffect(() => {
     console.log(data)
    },[])

  return (
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="review" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className='person-img' />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container" onClick={prevBtn}>
          <button className="prev-btn">
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomNumber}>suprise me</button>
      </div>
    </section>
  );
};

export default Reviews;
