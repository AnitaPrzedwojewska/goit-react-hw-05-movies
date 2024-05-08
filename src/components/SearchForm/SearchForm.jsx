import css from './SearchForm.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ImSearch } from "react-icons/im";
import { PropTypes } from 'prop-types';

export const SearchForm = ({ onSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryWords = event.target.searchInput.value;
    if (queryWords.trim() === '') {
      alert("Please enter what you are looking for!");
      return;
    }
    const query = queryWords.split(" ").join("+");
    onSubmit(query);
    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <p>Search for movies:</p>
        <Input
          type='text'
          id='searchInput'
          name='searchInput'
          placeholder='enter part of title'
        />
        <Button type='submit'>
          <ImSearch />
        </Button>
      </form>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func
}