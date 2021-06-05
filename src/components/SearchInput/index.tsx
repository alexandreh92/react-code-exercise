import { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

import paramFactory from '~/utils/paramFactory';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  name: string;
}

const SearchInput = ({ name, defaultValue }: SearchInputProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // add debouncer here
    paramFactory(name, value);
  }, [name, value]);

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return <input value={value} onChange={handleOnChange} />;
};

export default SearchInput;
