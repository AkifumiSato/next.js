export default async function intercept(_request: NextFetchRequestConfig) {
  console.log('intercepted: `hoge/fuga/interceptor.ts`')
}
