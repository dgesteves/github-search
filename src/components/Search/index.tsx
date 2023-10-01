import { StyledSearch } from './styles';
import { SearchProps } from './types';

export default function Search({ value, onChange, label, color }: SearchProps) {
  return (
    <StyledSearch
      label={label}
      color={color}
      value={value}
      onChange={onChange}
    />
  );
}
