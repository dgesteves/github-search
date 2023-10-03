import { useMemo } from 'react';

export function useCreateArray(length: number) {
  return useMemo(
    () => Array.from({ length }, (_, index) => index + 1),
    [length]
  );
}
