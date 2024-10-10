export default async function intercept(_request: NextFetchRequestConfig) {
  console.log('intercepted: `hoge/interceptor.ts`')
}
