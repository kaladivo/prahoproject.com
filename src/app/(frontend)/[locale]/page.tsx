import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomePageContent />
}

function HomePageContent() {
  const t = useTranslations('home')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-[70px]">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg text-gray-600">{t('underConstruction')}</p>
    </main>
  )
}
