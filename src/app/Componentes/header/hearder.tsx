import Image from 'next/image';

import "./hearder.scss"

export function Header() {
    return (
        <div className="header">
           
            <div>
                <h1>Olá, me chamo Manoel! 👋</h1>
                <h2>Desenvolvedor Back-End</h2>
            </div>
             <Image
                src="/me.jpg "
                alt="Manoel Faustino foto"
                width={325}
                height={300}
                priority
            />
        </div>
    );
}
