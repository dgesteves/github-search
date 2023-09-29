/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APOLLO_CLIENT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
