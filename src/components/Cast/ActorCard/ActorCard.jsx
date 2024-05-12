import PropTypes from "prop-types";
import { PHOTO_BASE_URL } from "../../../api/api_tmdb";
import noPhoto from "../../../assets/no-photo-available.jpg";
import css from "./ActorCard.module.css";

export const ActorCard = ({ profile_path, name, character }) => {
  const photo = profile_path
    ? `${PHOTO_BASE_URL}${profile_path}`
    : `${noPhoto}`;

  return (
    <>
      <div className={css.card}>
        <img src={photo} />
        <div className={css.info}>
          <p className={css.name}>{name}</p>
          <p>as {character}</p>
        </div>
      </div>
    </>
  );
};

ActorCard.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
