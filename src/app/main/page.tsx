import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <p>The main page of CSIE website.</p>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="bg-gray-100 h-50 w-50 flex justify-center">
          <Link href="main/life">德田生活</Link>
        </div>
        <div className="bg-gray-100 h-50 w-50 flex justify-center">
          <Link href="main/rate">課程評價網</Link>
        </div>
        <div className="bg-gray-100 h-50 w-50 flex justify-center">
          <Link href="main/database">課程資料庫</Link>
        </div>
      </div>
    </main> 
  )
}