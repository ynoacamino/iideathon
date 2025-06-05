import { Metadata } from 'next';

const metadataConfig: Metadata = {
  title: 'IdeaThon | IEEE Student Branch',
  description: 'El Ideathon es un evento de innovacióndonde TÚ puedes presentar ideas y soluciones tecnológicas para problemaseducativos, sin necesidad de tenerconocimientos técnicos previos.',
  authors: [
    { name: 'Yenaro Joel Noa Ctgaminoo', url: 'https://github.com/ynoacamino' },
    { name: 'Luis Gustavo Sequeiros Condori', url: 'https://github.com/gustadev24' },
  ],
  creator: 'Yenaro Joel Noa Camino and Luis Gustavo Sequeiros Condori',
  publisher: 'IdeaThon | IEEE Student Branch UNSA',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ideathon.ynoacamino.site/',
    title: 'IdeaThon | IEEE Student Branch',
    description: 'El Ideathon es un evento de innovación donde TÚ puedes presentar ideas y soluciones tecnológicas para problemas educativos, sin necesidad de tener conocimientos técnicos previos.',
    images: [
      {
        url: 'https://ynoa-uploader.ynoacamino.site/uploads/1749160241_Screenshot_20250605_164747_com.newskyer.draw.webp',
        width: 900,
        height: 587,
        alt: 'IdeaThon | IEEE Student Branch',
      },
    ],
    siteName: 'IdeaThon | IEEE Student Branch UNSA',
  },
  twitter: {
    creator: '@ynoacamino @gustadev24',
    site: 'https://ideathon.ynoacamino.site',
    description: 'El Ideathon es un evento de innovación donde TÚ puedes presentar ideas y soluciones tecnológicas para problemas educativos, sin necesidad de tener conocimientos técnicos previos.',
    images: [
      {
        url: 'https://ynoa-uploader.ynoacamino.site/uploads/1749160241_Screenshot_20250605_164747_com.newskyer.draw.webp',
        width: 900,
        height: 587,
        alt: 'IdeaThon | IEEE Student Branch',
      },
    ],
    title: 'IdeaThon | IEEE Student Branch',
  },
  metadataBase: new URL('https://ideathon.ynoacamino.site/'),
};

export default metadataConfig;
