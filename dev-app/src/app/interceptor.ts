export default async function intercept(_request: NextFetchRequestConfig) {
  console.log('intercepted: `interceptor.ts`')
}
