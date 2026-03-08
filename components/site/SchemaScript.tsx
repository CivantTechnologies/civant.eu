type JsonLd =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

type SchemaScriptProps = {
  data: JsonLd;
};

export function SchemaScript({ data }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
