import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLandingSlugs, getLandingComponent } from '@/components/landings/registry';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLandingComponent(slug);
  if (!landing) return {};
  return { title: landing.title };
}

export default async function LandingRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getLandingComponent(slug);
  if (!landing) notFound();

  const { default: Page } = await landing.load();
  return <Page />;
}
