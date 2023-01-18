import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsFilm } from '../API';
import css from './Reviews.module.css';

const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsFilm(filmId).then(rest => setReviews(rest.data.results));
  }, [filmId]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(one => (
            <li className={css.cast} key={one.id}>
              <h3>Author: {one.author}</h3>
              <p>{one.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
