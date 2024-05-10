import css from './SearchForm.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ImSearch } from "react-icons/im";
import { PropTypes } from 'prop-types';

export const SearchForm = ({ query, onSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryWords = event.target.searchInput.value;
    if (queryWords.trim() === '') {
      alert("Please enter what you are looking for!");
      return;
    }
    const newQuery = queryWords.split(" ").join("+");
    onSubmit(newQuery);
    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <span className={css.label}>Search for movies:</span>
        <Input
          type='text'
          id='searchInput'
          name='searchInput'
          value={query}
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
  query: PropTypes.string,
  onSubmit: PropTypes.func
}