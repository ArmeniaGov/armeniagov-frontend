import { WidthOptions } from '../../common/types';
import './text-input.scss';

type FixedCharacterWidth = '30' | '20' | '10' | '5' | '4' | '3' | '2';

export interface TextInputProps {
  name: string;
  fixedCharacterWidth?: FixedCharacterWidth;
  relativeWidth?: WidthOptions;
  inputMode?: 'numeric' | 'decimal';
  error?: boolean;
  value?: string;
  onChange?: (value: string) => unknown;

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  hint: React.ReactNode;

  className?: string;
}

export function TextInput(props: TextInputProps) {
  const widthClass = props.fixedCharacterWidth
    ? `govuk-input--width-${props.fixedCharacterWidth}`
    : (props.relativeWidth ? props.relativeWidth : '');

  return (
    <div className={`armeniagov-input-wrapper ${props.className ? props.className : ''}`}>
      {
        props.hint ?
        (
          <div className="armeniagov-hint">
            { props.hint }
          </div>
        ) : ''
      }

      {
        props.prefix ?
        (
          <div className="armeniagov-input__prefix">{ props.prefix }</div>
        ) : ''
      }

      <input
        className={`armeniagov-input ${props.error ? 'armeniagov-input--error' : ''} ${widthClass}`}
        id={props.name}
        name={props.name}
        defaultValue={props.value}
        pattern={props.inputMode === 'numeric' ? '[0-9]*' : undefined}
        inputMode={props.inputMode ? props.inputMode : undefined}
        type="text"
        onChange={e => {
          if(props.onChange) props.onChange(e.target.value);
        }}
      />

      {
        props.suffix ?
        (
          <div className="armeniagov-input__suffix">{ props.suffix }</div>
        ) : ''
      }
    </div>
  );
}

export default TextInput;
