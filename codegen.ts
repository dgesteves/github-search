import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/services/api/schema.docs.graphql',
  documents: 'src/services/api/**/*.ts',
  generates: {
    'src/services/api/types/': {
      preset: 'client',
      plugins: [],
    },
    'src/services/api/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
