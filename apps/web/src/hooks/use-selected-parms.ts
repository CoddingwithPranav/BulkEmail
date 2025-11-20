'use client';

import { useSearchParams } from 'next/navigation';

export const useSelectedParams = ({
  param,
  prefix,
  multiple = false,
}: {
  param: string;
  prefix?: string;
  multiple?: boolean;
}) => {
  const searchParams = useSearchParams();

  const identifier = prefix ? `${prefix}_${param}` : param;
  const offsetKey = prefix ? `${prefix}_offset` : 'offset';

  const buildNewSearchParams = (
    callback: (params: URLSearchParams) => void
  ) => {
    const current = new URLSearchParams(searchParams.toString());
    callback(current);
    const query = current.toString();

    window.history.replaceState(null, '', `?${query}`);
  };

  const add = (value: string) => {
    buildNewSearchParams((params) => {
      const existingValues = params.get(identifier)?.split(',') || [];

      if (multiple) {
        if (!existingValues.includes(value)) {
          existingValues.push(value);
          params.set(identifier, existingValues.join(','));
        }
      } else {
        params.set(identifier, value);
      }

      params.delete(offsetKey);
    });
  };

  const deleteParam = (value?: string) => {
    buildNewSearchParams((params) => {
      if (value && multiple) {
        const existingValues = params.get(identifier)?.split(',') || [];
        const updatedValues = existingValues.filter((v) => v !== value);
        if (updatedValues.length > 0) {
          params.set(identifier, updatedValues.join(','));
        } else {
          params.delete(identifier);
        }
      } else {
        params.delete(identifier);
      }

      params.delete(offsetKey);
    });
  };

  const get = (): string[] => {
    return searchParams.get(identifier)?.split(',').filter(Boolean) || [];
  };

  return { add, delete: deleteParam, get };
};
