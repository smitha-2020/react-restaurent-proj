const publicUrl = process.env.PUBLIC_URL || "";

export function resolvePublicImage(path) {
  if (!path) return "";
  const normalized = path.replace(/^\.\.\//, "");
  return normalized.startsWith("http")
    ? normalized
    : `${publicUrl}/${normalized.replace(/^\//, "")}`;
}
