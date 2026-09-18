import React, { useRef, useState, Suspense, lazy } from 'react'
import TitleHeader from '../components/TitleHeader'
import emailjs  from '@emailjs/browser'

// Same reasoning as Hero's HeroExperience: this pulls in three.js/drei and
// should not sit in the main bundle for a section that's below the fold.
const ContactExperience = lazy(() => import('./ContactExperience'))

const cvOptions = [
    { label: "CV Global", file: "CV_Global.pdf", desc: "Vue d'ensemble complète" },
    { label: "CV Campus France", file: "CV_Campus_France.pdf", desc: "Candidature études en France" },
    { label: "CV Systèmes & Cloud", file: "CV_Systeme_Cloud.pdf", desc: "Virtualisation, orchestration" },
    { label: "CV Réseau", file: "CV_Reseau.pdf", desc: "Protocoles, sécurité réseau" },
];

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ... formData, 
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setStatus(null)

        try {
            await emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
    
            //reset form
            setFormData({name: '', email:'', message:''});
            setStatus('success')

        } catch (error) {
            console.log('EMAILJS ERROR ', error)
            setStatus('error')
        } finally{
            setLoading(false)
        }
    }

  return (
    // `ClassName` (capital C) is not a valid React prop — it silently did
    // nothing, so this section never got `flex-center section-padding`.
    // Fixed to `className`.
    <section id="contact" className="flex-center section-padding">
        <div className="w-full h-full mt-5 md:px-10 px-5">
            <TitleHeader 
                title="Parlons de votre projet"
                sub="// disponible pour stage & missions"
            />

            <div className="mt-16 grid-12-cols"> 


                {/**Contact form left side */}
                <div className="xl:col-span-5">
                    <div className="flex-center card-border rounder-xl p-10">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col 
                        gap-7" ref={formRef}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your messsage... "
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" disabled={loading}>
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text text-color-[#2ECDB3] ">{loading ? 'Sending ...':'Send Message'}</p>
                                    <div className="arrow-wrapper">
                                        <img src={import.meta.env.BASE_URL + "images/arrow-down.svg"} alt="arrow" loading="lazy"/>
                                    </div>    
                                </div>
                            </button>

                            {status === 'success' && (
                                <p className="font-mono text-sm text-cyan" role="status">
                                    Message envoyé — merci, je réponds rapidement.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="font-mono text-sm text-red-400" role="alert">
                                    Une erreur est survenue. Vous pouvez aussi m'écrire directement à arnoldhge@gmail.com.
                                </p>
                            )}
                    </form>
                    </div>

                    {/* CV downloads — one CV per audience, so a recruiter can grab
                        the version most relevant to them instead of reading
                        everything on the page. */}
                    {/* <div className="mt-8">
                        <p className="font-mono-label mb-4">// télécharger un CV</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {cvOptions.map((cv) => (
                                <a
                                    key={cv.file}
                                    href={`${import.meta.env.BASE_URL}cv/${cv.file}`}
                                    download
                                    className="card-border rounded-lg p-4 flex flex-col gap-1
                                        hover:border-amber-dim/60 transition-colors duration-300 group"
                                >
                                    <span className="font-mono text-sm text-amber group-hover:underline">
                                        {cv.label}
                                    </span>
                                    <span className="text-white-50 text-xs">{cv.desc}</span>
                                </a>
                            ))}
                        </div>
                    </div> */}
                </div>


                {/**3D Exp - right side */}
                <div className="xl:col-span-7 min-h-130 max-h-140"> 
                    <div className="w-full h-full bg-[#cd7c2e] 
                        hover:cursor-grab rounded-3xl overflow-hidden">
                            <Suspense fallback={null}>
                                <ContactExperience />
                            </Suspense>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Contact
