import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1 } from '@/components/ui'
import { CartContents } from '@/components/CartContents'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cart' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function CartPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="py-16 md:py-24">
      <Container>
        <CartContents />
      </Container>
    </main>
  )
}
