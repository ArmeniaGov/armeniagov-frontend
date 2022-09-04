import React, { useState } from 'react';
import './radios.scss';

export interface RadiosItem {
  title: React.ReactNode;
  value: string;
  checked?: boolean;
  hint?: React.ReactNode;
  divider?: React.ReactNode;
  conditional?: React.ReactNode;
}

export interface RadiosProps {
  name: string;
  items: RadiosItem[];
  small?: boolean;
  inline?: boolean;
  onChange?: (value: string) => unknown;

  className?: string;
}

export function Radios(props: RadiosProps) {
  const [currentValue, setCurrentValue] = useState(props.items.find(x => x.checked)?.value);

  return (
    <div className={`armeniagov-radios ${props.inline ? 'armeniagov-radios--inline' : ''} ${props.small ? 'armeniagov-radios--small' : ''} ${props.className ? props.className : ''}}`}>
      {
        props.items.map((item, index) => (
          <React.Fragment key={index}>
            {
              item.divider ?
              (
                <div className="armeniagov-radios__divider">
                  { item.divider }
                </div>
              ) : ''
            }

            <div className="armeniagov-radios__item">
              <input
                className="armeniagov-radios__input"
                id={`props.name-${index}`}
                name={props.name}
                value={item.value}
                defaultChecked={item.checked}
                type="radio"
                onInput={e => {
                  const newValue = (e.target as HTMLInputElement).value;

                  setCurrentValue(newValue);
                  if(props.onChange) props.onChange(newValue);
                }}
              />

              <label className="armeniagov-label armeniagov-radios__label" htmlFor={`props.name-${index}`}>
                { item.title }
              </label>

              {
                item.hint ?
                (
                  <div className="armeniagov-hint armeniagov-radios__hint">
                    { item.hint }
                  </div>
                ) : ''
              }

              {
                item.value === currentValue && item.conditional ?
                (
                  <div className="armeniagov-radios__conditional">
                    <div className="armeniagov-form-group">
                      { item.conditional }
                    </div>
                  </div>
                ) : ''
              }
            </div>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default Radios;
