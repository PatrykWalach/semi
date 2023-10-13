export function fromFormData(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData, ([key, value]) => [
      key,
      typeof value === "string" ? value : value.name,
    ])
  );
}