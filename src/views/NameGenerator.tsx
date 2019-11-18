import React, { useState } from 'react';
import { generateNVikingNames, generateVikingName } from '../modules/viking/helpers';
import styles from './NameGenerator.styles';

const ORIGINS = ['viking'];

type Props = {};

const NameGenerator: React.FC<Props> = props => {
  const [names, setNames] = useState(['Names will appear here']);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [amount, setAmount] = useState(1);
  const [selectedOrigin, setOrigin] = useState<'viking'>('viking');

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newGender: 'male' | 'female' = 'male';
    if (e.target.value === 'female') {
      newGender = 'female';
    }

    setGender(newGender);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleGenerateClick = () => {
    const names = generateNVikingNames(gender, amount);
    setNames(names);
  };

  const { controlLabel, nameItem } = styles;

  return (
    <div>
      <h1>Epic name generator</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={controlLabel}>Generate</div>
        <input style={controlLabel} type="number" value={amount} onChange={handleAmountChange} />
        <div style={{ ...controlLabel, display: 'flex', alignItems: 'center'}}>
          <div className="radio" style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
              Male
            </label>
          </div>
          <div className="radio">
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
              Female
            </label>
          </div>
        </div>
        <div style={controlLabel}>
          <select value={selectedOrigin}>
            {ORIGINS.map(origin => <option value={origin}>{origin}</option>)}
          </select>
        </div>
        <div style={controlLabel}>names</div>
        <div
          style={{
            ...controlLabel,
            display: 'flex',
            padding: 8,
            backgroundColor: 'gray',
            color: 'white',
          }}
        >
          <div onClick={handleGenerateClick}>Generate</div>
        </div>
      </div>
      <div>
        <h2>Names:</h2>
        {names.map((x, i) => (
          <div key={i} style={nameItem}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameGenerator;
