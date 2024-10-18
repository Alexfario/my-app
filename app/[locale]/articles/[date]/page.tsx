import Image from "next/image";
import { Suspense } from 'react'
import {notFound} from 'next/navigation'
import {getLocalizedData} from "@/i18n";
import {Locale} from "@/i18n-config";
import { Skeleton } from "@/components/ui/skeleton"
import {getDateFnsLocale} from "@/utils/getDateFnsLocale";
import {format} from "date-fns";


export default async function Article({params: {date, locale}}: { params: { date: string, locale: Locale } }) {
    const data = (await getLocalizedData(locale)).find((value) => value.date === date);
    const dateFnsLocale = getDateFnsLocale(locale);
    const formattedDate = format(date, 'yyyy-LLLL-d', {locale: dateFnsLocale});


    if (!data) {
        notFound();
    }

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center md:mx-14">
            <h1 className="prose-2xl">{data.title}</h1>
            <h2 className="prose-lg">{formattedDate}</h2>
            <div className="relative h-80 w-full md:w-3/4 lg:w-1/2">
                <Suspense fallback={<Skeleton className="h-full w-full rounded-xl"/>}>
                    {
                        data.media_type == 'image' && <Image
                            className="object-contain"
                            alt={`Picture of the day: ${date}`}
                            src={data.hdurl ?? data.url}
                            fill
                        />
                    }
                    {
                        data.media_type == 'video' && <iframe className="w-full h-full" src={data.url}/>
                    }
                </Suspense>
            </div>
            <div className="prose">{data.explanation}</div>
        </main>
    );
}
