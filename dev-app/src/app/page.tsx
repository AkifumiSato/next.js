import Link from "next/link";

export default function Home() {
  console.log("rendered: `page.tsx`");

  return (
    <div>
      <h1>Request Interceptor Debugging</h1>
      <p>top page</p>
      <ul>
        <li>
          <Link href="/hoge">/hoge</Link>
        </li>
      </ul>
    </div>
  );
}
