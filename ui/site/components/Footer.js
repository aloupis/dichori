
import Link from 'next/link'

export default function Footer({items}) {
    return 	<footer id="footer" className=" h-30 mt-5 bg-black shadow-lg text-white">
    <div className="grid grid-cols-3 py-5 px-10 ">
        <div className=""><Link href="/contact">Contact Us</Link></div>
        <div className="" />
        <div className="text-right">Copyright &copy; 2022 Dichori. All Rights Reserved.</div>
    </div>
</footer>
  }