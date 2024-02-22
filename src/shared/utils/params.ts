export const returnedURLParams = (serchParams: URLSearchParams) => {
  const returnedParams: Record<string, string> = {};
  const itterator = serchParams.entries();

  for (const value of itterator) {
    returnedParams[value[0]] = value[1];
  }

  return returnedParams;
};
