

import Link from "next/link";
import {Locale} from "@/i18n-config";
import {getDateFnsLocale} from "@/utils/getDateFnsLocale";
import { format } from "date-fns"


type Props = {
    date: string;
    locale: Locale;
    title: string;
}

export const ArticleLink = ({date, locale, title}: Props) => {
    const dateFnsLocale = getDateFnsLocale(locale);
    const formattedDate = format(date, 'yyyy-LLLL-d', {locale: dateFnsLocale});

    return <Link className="m-6 hover:underline" key={date} href={`${locale}/articles/${date}`}>
        <span className="prose-2xl font-bold me-3">{formattedDate}</span>{title}</Link>;
}
