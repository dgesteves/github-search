import { ChangeEvent } from 'react';

export type SearchProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  color: 'primary' | 'secondary';
};
