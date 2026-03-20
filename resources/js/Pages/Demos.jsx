import { useState } from 'react';
import Layout from '@/Layouts/MainLayout';
import { ExternalLink, Eye, EyeOff, Copy, Check } from 'lucide-react';

function CredentialRow({ credential }) {
    const [visible, setVisible] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const copy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1800);
    };

    return (
        <div className="flex flex-col gap-1 py-2 border-b border-white/5 last:border-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#01a387]">
                {credential.rol}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-16 text-gray-500 shrink-0">Usuario</span>
                <span className="flex-1 font-mono truncate">{credential.usuario}</span>
                <button
                    onClick={() => copy(credential.usuario, `u-${credential.id}`)}
                    className="text-gray-500 hover:text-[#01a387] transition-colors"
                    title="Copiar usuario"
                >
                    {copiedField === `u-${credential.id}` ? (
                        <Check size={13} className="text-[#01a387]" />
                    ) : (
                        <Copy size={13} />
                    )}
                </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-16 text-gray-500 shrink-0">Contraseña</span>
                <span className="flex-1 font-mono tracking-wider">
                    {visible ? credential.password : '••••••••'}
                </span>
                <button
                    onClick={() => setVisible(v => !v)}
                    className="text-gray-500 hover:text-white transition-colors"
                    title={visible ? 'Ocultar' : 'Mostrar'}
                >
                    {visible ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
                <button
                    onClick={() => copy(credential.password, `p-${credential.id}`)}
                    className="text-gray-500 hover:text-[#01a387] transition-colors"
                    title="Copiar contraseña"
                >
                    {copiedField === `p-${credential.id}` ? (
                        <Check size={13} className="text-[#01a387]" />
                    ) : (
                        <Copy size={13} />
                    )}
                </button>
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0a1628] overflow-hidden hover:border-[#01a387]/40 transition-colors duration-300">
            {/* Header de la tarjeta */}
            <div className="p-5 border-b border-white/5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-lg font-semibold text-white leading-tight">
                            {project.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <a
                        href={project.url_directa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#01a387]/15 text-[#01a387] text-xs font-medium hover:bg-[#01a387]/25 transition-colors"
                    >
                        <ExternalLink size={13} />
                        Ver demo
                    </a>
                </div>
            </div>

            {/* Credenciales */}
            <div className="p-5 flex-1">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                    Credenciales de acceso
                </p>
                <div className="flex flex-col">
                    {project.credentials.map(cred => (
                        <CredentialRow key={cred.id} credential={cred} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Demos({ auth, projects }) {
    return (
        <Layout title="Automatizando | Demos" auth={auth}>
            {/* Hero compacto */}
            <section className="pt-24 pb-10 px-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#01a387]/15 text-[#01a387] mb-4 tracking-widest uppercase">
                    Proyectos demo
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Explora nuestros proyectos
                </h1>
                <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    Accede a las demos con las credenciales de cada rol. Cópialas con un clic
                    y explora cada sistema sin barreras.
                </p>
            </section>

            {/* Grid de tarjetas */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                {projects.length === 0 ? (
                    <p className="text-center text-gray-500 py-20">
                        No hay proyectos disponibles por el momento.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}
