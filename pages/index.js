import Head from 'next/head';
import Link from 'next/link';

const categories = [
  { id: 'dinos', title: '🦖 Dinosaures', description: 'Toutes les créatures d’ARK.', link: '/dinos/rex' },
  { id: 'armures', title: '🛡️ Armures', description: 'Armures avec qualité Ascendant.', link: '/armures/tek-helmet' },
  { id: 'armes', title: '⚔️ Armes', description: 'Fusils, arcs, arbalètes Ascendant.', link: '/armes' },
  { id: 'selles', title: '🎒 Selles', description: 'Selles de dinosaures Ascendant.', link: '/selles' },
  { id: 'cheats', title: '🧪 Commandes Admin', description: 'Commandes utiles en jeu.', link: '/commandes' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>ARK Wiki Vitrine</title>
      </Head>

      <main className="p-10 container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          🌟 Bienvenue sur ARK Wiki Vitrine
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.link}>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all duration-200">
                <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
                <p className="text-gray-300">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
