import * as esbuild from 'esbuild'

const result = await esbuild.build({
  entryPoints: ['./lambda.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'es2020',
  outfile: './dist/lambda.js',
})

console.log(result)
