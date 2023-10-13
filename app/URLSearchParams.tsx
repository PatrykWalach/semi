function normalizeArray<T>(el: T | T[]): T[] {
  return Array.isArray(el) ? el : [el];
}

export function normalizeSearchParams(
  searchParams: Record<string, string | string[]>
) {
  return new URLSearchParams(
    Object.entries(searchParams).flatMap(([key, value]) =>
      normalizeArray(value).map((value) => [key, value])
    )
  );
}

export function URLSearchParamsDelete(
  searchParams: URLSearchParams,
  name: string,
  value: string
) {
  const next = new URLSearchParams();
  for (const [name1, value1] of searchParams.entries()) {
    if (name1 !== name || value1 !== value) {
      next.append(name1, value1);
    }
  }

  return next;
}

export function fromFormData(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData, ([key, value]) => [
      key,
      typeof value === "string" ? value : value.name,
    ])
  );
}
