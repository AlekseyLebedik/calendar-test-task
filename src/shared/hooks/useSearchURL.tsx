import { useSearchParams } from "react-router-dom";

import { returnedURLParams } from "shared/utils/params";

export const useSearchURL = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addSearchParams = (searchKey: string, searchValue: string) => {
    const searchObj = returnedURLParams(searchParams);
    setSearchParams({ ...searchObj, [searchKey]: searchValue });
  };

  const getSearchParams = (
    searchKey: string | null | undefined,
    isMultplySearchKey: boolean = false
  ) => {
    if (searchKey && !isMultplySearchKey) searchParams.get(searchKey);
    if (searchKey && !isMultplySearchKey) searchParams.getAll(searchKey);
    return returnedURLParams(searchParams);
  };

  return { addSearchParams, getSearchParams };
};
