import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1, H4 } from '@/components/ui'
import { Subtitle } from '@/components/ui/Typography'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'association' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function AssociationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('association')

  const documents = [
    { name: t('bylaws'), date: t('bylawsDate') },
    { name: t('memorandum'), date: t('memorandumDate') },
    { name: t('genderPlan'), date: t('genderPlanDate') },
    { name: t('riskProtocol'), date: t('riskProtocolDate') },
  ]

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-8">{t('title')}</H1>
        <p className="mb-16 max-w-[var(--width-content)] text-text-muted">{t('intro')}</p>

        <div className="max-w-[var(--width-content)] space-y-20">
          {/* Documents */}
          <section>
            <H4 className="mb-8">{t('documentsTitle')}</H4>
            <div className="divide-y divide-border-light/30">
              {documents.map((doc) => (
                <div key={doc.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-text">{doc.name}</span>
                  <span className="text-[13px] text-gray">{doc.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Annual Reports */}
          <section>
            <H4 className="mb-4">{t('annualReportsTitle')}</H4>
            <p className="text-text-muted">{t('annualReportsDesc')}</p>
          </section>

          {/* General Assembly */}
          <section>
            <H4 className="mb-4">{t('assemblyTitle')}</H4>
            <p className="text-text-muted">{t('assemblyDesc')}</p>
          </section>

          {/* Advisory Bodies */}
          <section>
            <H4 className="mb-8">{t('advisoryTitle')}</H4>

            <div className="space-y-10">
              {/* Founders */}
              <div>
                <h5 className="mb-1">{t('foundersTitle')}</h5>
                <Subtitle className="mb-4 block">{t('foundersDesc')}</Subtitle>
                <ul className="space-y-2 text-text-muted">
                  <li>{t('founder1')}</li>
                  <li>{t('founder2')}</li>
                </ul>
              </div>

              {/* Executive Commission */}
              <div>
                <h5 className="mb-1">{t('executiveTitle')}</h5>
                <p className="mb-4 text-[13px] text-gray">{t('executiveDesc')}</p>
                <ul className="space-y-2 text-text-muted">
                  <li>{t('executive1')}</li>
                  <li>{t('executive2')}</li>
                  <li>{t('executive3')}</li>
                </ul>
              </div>

              {/* Strategic Commission */}
              <div>
                <h5 className="mb-1">{t('strategicTitle')}</h5>
                <p className="text-text-muted">{t('strategicDesc')}</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
