import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div>
        <h1>The main page of CSIE website.</h1>
      </div>
      <div>
        <div>
          <Link href="/life">
            <button>德田生活</button>
          </Link>
        </div>
        <div>
          <Link href="/rate">
            <button>課程評價網</button>
          </Link>
        </div>
        <div>
          <Link href="/database">
            <button>課程資料庫</button>
          </Link>
        </div>
      </div>
    </main> 
  )
}