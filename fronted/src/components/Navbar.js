import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-teal-600">YOURLab</div>
      <div className="space-x-4">
        <Link href="#" className="hover:underline">Location</Link>
        <Link href="#" className="hover:underline">Need Help?</Link>
        <Link href="#" className="hover:underline">Reports</Link>
        <Link href="#" className="hover:underline">Cart</Link>
        <Link href="/registration" className="hover:underline">Registration</Link>
      </div>
    </nav>
  );
}
