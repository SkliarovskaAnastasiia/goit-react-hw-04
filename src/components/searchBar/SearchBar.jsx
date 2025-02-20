import { CiCircleInfo } from 'react-icons/ci';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputVal = form.elements.query.value.trim();

    if (inputVal === '') {
      toast('Please enter your request', {
        duration: 3000,
        icon: <CiCircleInfo size={24} color="black" />,
      });
      return;
    }
    onSubmit(inputVal);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
