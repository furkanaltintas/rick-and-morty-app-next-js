import Episode from "@/app/components/Episode";
import EpisodeCharacter from "@/app/components/EpisodeCharacter";
import Link from "next/link";
import { Suspense } from "react";

export default function EpisodeDetail({ params }) {
  const id = params.id;
  return (
    <div className="card">
      <Link href={'/episodes'} className="btn btn-back">Back to sections</Link>
      <Episode id={id} />
      <Suspense fallback={<div>Karakterler Yükleniyor...</div>}>
        <EpisodeCharacter id={id} />
      </Suspense>
    </div>
  )
}


// Suspense Nedir ?
// <Suspense>, bir bileşen yüklenene kadar veya veri hazır olana kadar ekranda gösterilecek geçici içeriği belirler.
/* 
    Kullanım Amaçları:
    1. Kodları tembel yüklemek (Lazy Loading):
        - Büyük bileşenleri sayfa açıldığında değil, ihtiyaç duyulduğunda yüklemek.
        - React.lazy() ile birlikte kullanılır.

    2. Veri getirme sırasında geçici içerik göstermek 
*/