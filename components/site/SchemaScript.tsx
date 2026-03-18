type JsonLd =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

type SchemaScriptProps = {
  data: JsonLd;
};

export function SchemaScript({ data }: SchemaScriptProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
