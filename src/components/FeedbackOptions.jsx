import { toUpperCase } from './functions';

import '../css/feedbackOptions.css';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className="btns">
      {options.map(value => (
        <button
          className="btn"
          key={value}
          type="submit"
          id={value.toString()}
          data-value={value.toString()}
          onClick={onClick}
        >
          {toUpperCase(value)}
        </button>
      ))}
    </div>
  );
};
