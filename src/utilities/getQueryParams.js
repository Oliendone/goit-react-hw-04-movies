import queryString from 'query-string';

export default function getQueryParams(params) {
  return queryString.parse(params);
}
