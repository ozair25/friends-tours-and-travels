import React from 'react';

interface JsonLdProps {
  schema: Record<string, any>;
  id?: string;
}

export default function JsonLd({ schema, id }: JsonLdProps) {
  return (
    <script
      id={id || 'json-ld-schema'}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
