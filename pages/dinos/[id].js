import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data'))
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.json', '')
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = JSON.parse(fs.readFileSync(path.join('data', params.id + '.json'), 'utf-8'))
  return {
    props: { data }
  }
}

export default function DinoPage({ data }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <img src={data.image} alt={data.name} className="w-64 my-4" />
      <p>{data.description}</p>
      <p className="mt-2"><strong>Commande :</strong> <code>{data.command}</code></p>
      <div className="mt-4">
        {data.tags.map(tag => (
          <span key={tag} className="inline-block bg-blue-600 rounded px-2 py-1 text-sm mr-2">{tag}</span>
        ))}
      </div>
    </div>
  )
}