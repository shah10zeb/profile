"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    
    // Replace the current locale in the pathname with the new locale
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

    startTransition(() => {
      router.replace(newPathname, { scroll: false });
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="bg-black/50 backdrop-blur-md text-white border border-white/20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 hover:bg-white/10 transition-colors cursor-pointer"
      >
        <option value="en" className="bg-gray-900 text-white">English</option>
        <option value="es" className="bg-gray-900 text-white">Español</option>
        <option value="fr" className="bg-gray-900 text-white">Français</option>
        <option value="zh" className="bg-gray-900 text-white">中文</option>
        <option value="hi" className="bg-gray-900 text-white">हिन्दी</option>
      </select>
    </div>
  );
}
