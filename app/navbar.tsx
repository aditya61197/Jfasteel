import Link from "next/link";

export function Navbar() {
    return (
        <>
            <div className="flex justify-start bg-slate-50 h-[50px] p-[10px]">
                <div className="text-zinc-950 text-2xl font-bold w-[20%] text-right">
                    <Link href="/">Jfa Steel</Link>
                </div>
                
                <div className="flex justify-around w-[40%] ml-[10%]">
                    <div className="text-zinc-950">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="text-zinc-950">
                        <Link href="/product">Product</Link>
                    </div>
                    <div className="text-zinc-950">
                        <Link href="/about">About Us</Link>
                    </div>
                    <div className="text-zinc-950">
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    );
}