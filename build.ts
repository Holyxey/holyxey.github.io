Bun.build({
  entrypoints: ['JSH.ts', 'JS.ts', 'madeby.ts'],
  outdir: '.',
  minify: true,
  format: 'esm',
});
