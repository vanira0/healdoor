import type { Metadata } from 'next'
import { getPageBySlug } from '@healdoor/utils'
import { Navbar } from '@/components/Navbar'
import { ServiceNavTabs } from '@/components/ServiceNavTabs';
import { Footer } from '@/components/Footer'
import { PageRenderer } from '@/components/renderer/PageRenderer'
import { PageHeader } from '@/components/PageHeader'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('privacy-policy')
  return {
    title: page?.seo?.meta_title || page?.title || 'Privacy Policy | HealDoor',
    description: page?.seo?.meta_description || 'Privacy Policy for HealDoor services.',
  }
}

export default async function PrivacyPolicyPage() {
  const page = await getPageBySlug('privacy-policy')

  return (
    <>
      <Navbar />
      <ServiceNavTabs />
      <main className="flex-1">
        {page ? (
          <PageRenderer blocks={page.page_builder ?? []} />
        ) : (
          <>
            <PageHeader 
              title="Privacy Policy" 
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Privacy Policy', href: '/privacy-policy' }
              ]}
            />
            <section className="section-padding bg-white min-h-[50vh] flex flex-col items-center justify-center text-center">
              <div className="container max-w-2xl">
                <h2 className="font-heading text-3xl font-bold text-text-dark mb-4">Coming Soon</h2>
                <p className="text-text-body text-lg">This page is currently being updated.</p>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
