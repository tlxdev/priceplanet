type FetchResponse<T> = {
  data: T;
  status: number;
  headers: Headers;
};

const typedFetch = async <T>(url: string, fetchOpt?: RequestInit): Promise<FetchResponse<T>> => {
  const response = await fetch(url, fetchOpt);
  const { status, headers } = response;

  if (!response.ok) {
    throw new Error(`Request failed with status: ${status}`);
  }

  const data = await response.json();

  return { data, status, headers };
};

export default typedFetch;
