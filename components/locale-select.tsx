"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {redirect, usePathname} from "next/navigation";
import {i18n, type Locale} from "@/i18n-config";

export default function LocaleSwitcher({locale}: { locale: Locale }) {
    const pathname = usePathname();
    const localeTuple = i18n.locales.find(([i18nLocaleKey]) => i18nLocaleKey === locale);

    const redirectedPathname = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    const onSelectChange = (selected: Locale) => {
        redirect(redirectedPathname(selected))
    }


    return localeTuple && (
        <Select onValueChange={onSelectChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={localeTuple[1]}/>
            </SelectTrigger>
            <SelectContent>
                {i18n.locales.map(([locale, title]) => (
                        <SelectItem key={locale} value={locale}>
                            {title}
                        </SelectItem>
                    )
                )}
            </SelectContent>
        </Select>
    );
}