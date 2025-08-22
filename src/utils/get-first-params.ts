export function getFirstParam(param: string | string[] | undefined) {
  if (Array.isArray(param)) {
    return param[0] ?? '';
  }
  return param ?? '';
}
