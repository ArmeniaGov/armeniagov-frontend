import { useState } from 'react';
import './checkboxes.scss';

export interface CheckboxesItem {
  title: React.ReactNode;
  value: string;
  checked?: boolean;
  hint?: React.ReactNode;
  conditional?: React.ReactNode;
  exclusive?: boolean;
}

export interface CheckboxesProps {
  name: string;
  items: CheckboxesItem[];
  small?: boolean;
  onChange?: (selectedValues: string[]) => unknown;

  className?: string;
}

export function Checkboxes(props: CheckboxesProps) {
  const initalValues: Record<string, boolean> = {};

  for(const item of props.items) {
    initalValues[item.value] = item.checked ? true : false;
  }

  const [values, setValues] = useState(initalValues);

  const handleChange = (values: Record<string, boolean>) => {
    if(props.onChange) props.onChange(
      // Gets the selected values keys
      Object.entries(values).filter(x => x[1]).map(x => x[0])
    );
  }

  const setValue = (value: string, checked: boolean) => {
    const newValues: Record<string, boolean> = {};

    for(const item of props.items) {
      if(item.exclusive) {
        newValues[item.value] = false;
        continue;
      }

      newValues[item.value] = values[item.value];
    }

    newValues[value] = checked;
    setValues(newValues);
    handleChange(newValues);
  }

  const setExclusiveValue = (value: string, checked: boolean) => {
    if(checked) {
        const newValues: Record<string, boolean> = {};
        for(const item of props.items) {
          newValues[item.value] = false;
        }

        newValues[value] = checked;
        setValues(newValues);
        handleChange(newValues);
        return;
    }

    const newValues = { ...values, [value]: checked };
    setValues(newValues);
    handleChange(newValues);
  }

  return (
    <div className={`armeniagov-checkboxes ${props.className ? props.className : ''} ${props.small ? 'armeniagov-checkboxes--small' : ''}`}>
      {
        props.items.map((item, index) => (
          <div className="armeniagov-checkboxes__item" key={index}>
            <input
              id={`${props.name}-${index + 1}`}
              className="armeniagov-checkboxes__input"
              name={props.name}
              value={item.value}
              checked={values[item.value]}
              type="checkbox"
              onChange={e => {
                if(item.exclusive) setExclusiveValue(item.value, !values[item.value]);
                else setValue(item.value, !values[item.value]);
              }}
            />

            <label className="armeniagov-label armeniagov-checkboxes__label" htmlFor={`${props.name}-${index + 1}`}>
              { item.title }
            </label>

            {
              item.hint ?
              (
                <div className="armeniagov-hint armeniagov-checkboxes__hint">
                  { item.hint }
                </div>
              ) : ''
            }

            {
              values[item.value] && item.conditional ?
              (
                <div className="armeniagov-checkboxes__conditional">
                  <div className="armeniagov-form-group">
                    { item.conditional }
                  </div>
                </div>
              ) : ''
            }
          </div>
        ))
      }
    </div>
  );
}

export default Checkboxes;
