import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = ({
  id,
  name,
  value,
  label,
  ...props
}: RadioButtonProps) => {
  return (
    <Container>
      <input {...props} type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default RadioButton;
