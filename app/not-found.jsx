import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='not-found-container'>
            <div className='not-found'>
                <h1>Aradığınız sayfa bulunamadı</h1>
                <p>Hatanının nedenini bulmak için aramalara başladık</p>
                <Link className='btn-back' href={'/'}>Anasayfa</Link>
            </div>
        </div>
    )
}
