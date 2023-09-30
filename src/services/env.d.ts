/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APOLLO_CLIENT_URI: string;
  readonly VITE_GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
