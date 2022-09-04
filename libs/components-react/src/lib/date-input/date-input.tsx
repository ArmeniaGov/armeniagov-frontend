import { Children } from "react";
import './date-input.scss';

/* eslint-disable-next-line */
export interface DateInputProps {
  id: string;
  children: React.ReactNode[] | React.ReactNode;
}

export function DateInput(props: DateInputProps) {
  const arrayChildren = Children.toArray(props.children);

  return (
    <div className="armeniagov-form-group">
      <fieldset className="armeniagov-fieldset" role="group">
        <div className="armeniagov-date-input" id={props.id}>
          {
            arrayChildren.map((child, index) => {
              return (
                <div className="armeniagov-date-input__item" key={index}>
                  { child }
                </div>
              );
            })
          }
        </div>
      </fieldset>
    </div>
  );
}

export default DateInput;
