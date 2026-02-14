import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container } from '@/components/ui'
import { DonationForm } from '@/components/DonationForm'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'donation' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function DonationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="py-16 md:py-24">
      <Container>
        <DonationForm />
      </Container>
    </main>
  )
}
