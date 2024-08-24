import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-full flex ">
            <div className="min-w-[80px] md:w-[300px] max-w-[200px]  p-2">
                <Link href='/'>
                    <div className="flex items-center justify-center ">
                        <Image
                            src="/logoN.png"
                            alt="logo"
                            width={75}
                            height={75}
                        ></Image>
                        <span className="hidden md:block font-bold uppercase tracking-widest text-md">
                            School
                        </span>
                    </div>
                </Link>
                <Menu />
            </div>
            <div className="w-full min-h-full overflow-y-scroll  bg-gray-100  scroll-hidden p-4 flex flex-col">
                <Navbar />
                {children}
            </div>
        </section>
    );
}
