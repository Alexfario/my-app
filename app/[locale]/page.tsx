import {getLocalizedData} from '@/i18n';
import {Locale} from "@/i18n-config";
import {ArticleLink} from "@/components/ui/article-link";


export default async function Home({params: {locale}}: { params: { locale: Locale } }) {
    const data = await getLocalizedData(locale);

    return (
        <main className="flex flex-col items-stretch">
            {data.map(
                ({date, title}) => <ArticleLink key={date} date={date} locale={locale} title={title}/>
            )}
        </main>
    );
}
