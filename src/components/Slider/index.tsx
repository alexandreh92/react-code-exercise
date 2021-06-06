import { InputHTMLAttributes } from 'react';

import { Container, Label, Input } from './styles';

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  ...props
}: SliderProps) => {
  return (
    <Container>
      <Input
        {...props}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <Label>{value}</Label>
    </Container>
  );
};

export default Slider;
