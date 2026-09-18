import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { openSourceProjects, GH } from '../constants'

const OpenSource = () => {
  return (
    <section id="open-source" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Code Public"
                sub="// vérifiable, pas juste affirmé"
            />

            <div className="grid-3-cols mt-16">
                {openSourceProjects.map((repo) => (
                    <a
                        href={repo.link}
                        target="_blank"
                        rel="noreferrer"
                        key={repo.name}
                        className="card-border rounded-xl p-8 flex flex-col gap-4
                            hover:border-amber-dim/60 transition-colors duration-300 group"
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-mono text-sm text-amber break-all">
                                {repo.name}
                            </p>
                            {repo.stars > 0 && (
                                <span className="font-mono text-xs text-blue-50 flex items-center gap-1 flex-none">
                                    ★ {repo.stars}
                                </span>
                            )}
                        </div>

                        <p className="text-white-50 text-base flex-1">
                            {repo.description}
                        </p>

                        <div className="flex items-center justify-between font-mono text-xs text-blue-50 pt-2 border-t border-black-200">
                            <span>{repo.lang}</span>
                            <span className="text-amber group-hover:translate-x-1 transition-transform duration-300">
                                github →
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <a
                    href={GH}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm text-amber hover:underline"
                >
                    Voir tous les dépôts sur GitHub →
                </a>
            </div>
        </div>
    </section>
  )
}

export default OpenSource
