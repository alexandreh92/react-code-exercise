import { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

import paramFactory from '~/utils/paramFactory';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  name: string;
}

const SearchInput = ({
  name,
  defaultValue = '',
  className,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    paramFactory(name, value);
  }, [name, value]);

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <Container className={className}>
      <input
        data-testid="search-input"
        {...props}
        value={value}
        onChange={handleOnChange}
      />
    </Container>
  );
};

export default SearchInput;
