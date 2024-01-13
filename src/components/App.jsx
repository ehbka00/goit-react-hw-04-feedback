import React, { useEffect, useState } from 'react';
import { Statistics } from './Statistics.jsx';
import { Section } from './Section.jsx';
import { FeedbackOptions } from './FeedbackOptions.jsx';

import '../css/default.css';

export const App = () => {
  const [options, setOption] = useState({});
  const [total, setTotal] = useState(0);

  const handleOnClick = evt => {
    const name = evt.target.id;

    setOption(prevState => {
      const val = prevState[name] ?? 0;
      return { ...prevState, [name]: val + 1 };
    });
  };

  useEffect(() => {
    if (!options) return;
    setTotal(
      Object.values(options).reduce((valOption, numb) => valOption + numb, 0)
    );
  }, [options]);

  const countPositiveFeedback = () => {
    return total === 0 ? 0 : ((options.good / total) * 100).toFixed(0);
  };

  return (
    <>
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={handleOnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          options={options}
          total={total}
          positivePercentage={countPositiveFeedback()}
        />
      </Section>
    </>
  );
};
