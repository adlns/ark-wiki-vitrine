import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>ARK Wiki Vitrine</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold">Bienvenue sur ARK Wiki Vitrine</h1>
        <p className="mt-2">Explorez les dinosaures, équipements, et commandes du jeu ARK Survival Evolved.</p>
      </main>
    </div>
  );
}