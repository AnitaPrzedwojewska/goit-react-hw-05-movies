import PropTypes from 'prop-types';
import css from './ActorCard.module.css';
import { PHOTO_BASE_URL } from "../../api/api_tmdb";
import noPhoto from "../../assets/no-photo-available.jpg";

export const ActorCard = ({ profile_path, name, character }) => {
  const photo = profile_path
    ? `${PHOTO_BASE_URL}${profile_path}`
    : `${noPhoto}`;

  return (
    <>
      <div className={css.card}>
        <img src={photo} />
        <div className={css.info}>
          <h3>{name}</h3>
          <p>{character}</p>
        </div>
      </div>
    </>
  );
};

ActorCard.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string
}