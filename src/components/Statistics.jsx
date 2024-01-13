import { toUpperCase } from './functions.js';
import { Notification } from './Notification.jsx';
import '../css/statistics.css';

export const Statistics = ({ options, total, positivePercentage }) => {
  if (total === 0) {
    return (
      <div className="statistics">
        <Notification title="There is no feedback" />
      </div>
    );
  }
  return (
    <div className="statistics">
      <ul>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            <span>
              {toUpperCase(key)} : {value}{' '}
            </span>
          </li>
        ))}
        <li key="total">
          <span>Total: {total}</span>
        </li>
        <li key="positiveFb">
          <span>Positive: {positivePercentage} %</span>
        </li>
      </ul>
    </div>
  );
};
