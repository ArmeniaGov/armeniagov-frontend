import './fieldset.scss';

export interface FieldsetProps {
  legend: React.ReactNode;
  legendSize?: 'xl' | 'l' | 'm' | 's';
  legendHeading?: boolean;

  className?: string;
  children: React.ReactNode;
}

export function Fieldset(props: FieldsetProps) {
  const legendSize = props.legendSize
    ? `armeniagov-fieldset__legend--${props.legendSize}`
    : 'armeniagov-fieldset__legend--l';

  return (
    <fieldset className={`armeniagov-fieldset ${props.className ? props.className : ''}`}>
      <legend className={`armeniagov-fieldset__legend ${legendSize}`}>
        {
          props.legendHeading ?
          (
            <h1 className="armeniagov-fieldset__heading">
              { props.legend }
            </h1>
          ) : props.legend
        }
      </legend>

      { props.children }
    </fieldset>
  );
}

export default Fieldset;
