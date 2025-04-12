'use client';

import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import TranslationProvider from "@/components/TranslationProvider";
import TranslatedText from "@/components/TranslatedText";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TranslationProvider>
      <div className="h-screen flex bg-white">
      {/* LEFT - Scrollable Menu */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4 bg-[#FFE569] h-screen overflow-y-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={80} />
          <span className="hidden lg:block font-bold text-black">
            <TranslatedText textKey="app.name" fallback="S Lanka Jewellery" />
          </span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT - Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-white overflow-y-auto flex flex-col p-6">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              <TranslatedText textKey="language" fallback="Language" />:
            </span>
            <LanguageSelector />
          </div>
        </div>
        {children}
      </div>
      </div>
    </TranslationProvider>
  );
}
