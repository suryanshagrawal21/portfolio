import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData, Project } from '../data/portfolioData';
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react';

const ProjectCaseStudy = () => {
    const { id } = useParams<{ id: string }>();

    // Find the project based on URL parameter id.
    const project = portfolioData.projects.find(p => p.id === id) as Project | undefined;

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, []);

    if (!project) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-32">
                <div className="w-20 h-20 mb-8 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-xl shadow-black">
                    <span className="text-4xl">🔌</span>
                </div>
                <h1 className="text-4xl text-white font-bold mb-4 font-mono">404: Case Study Not Found</h1>
                <p className="text-gray-400 mb-8 max-w-md">The project deep dive you are looking for does not exist or has been moved from the database.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                    <ArrowLeft size={18} /> Return to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-24 min-h-screen w-full relative z-10 bg-[#030303] selection:bg-blue-500/30">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">

                {/* Back Navigation */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-mono text-sm mb-12 transition-colors border border-white/5 hover:border-white/20 px-4 py-2 rounded-full bg-white/5">
                    <ArrowLeft size={16} /> <span className="mt-0.5">cd ..</span>
                </Link>

                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-6">
                        {project.role.toUpperCase()}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all border border-white/5 shadow-lg">
                                <Github size={20} /> View Source Code
                            </a>
                        )}
                        {project.liveLink && project.liveLink !== "#" && (
                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 border border-blue-500/50">
                                <ExternalLink size={20} /> Live Application
                            </a>
                        )}
                    </div>

                    {project.imageUrl && (
                        <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black mb-20 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                            <img src={project.imageUrl} alt={project.title} className="w-full h-auto relative bg-[#111] z-10 object-cover" />
                        </div>
                    )}
                </header>

                <div className="space-y-20">
                    <section>
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-3">
                            <span className="text-red-400/80 font-mono">01.</span> The Real-World Problem
                        </h2>
                        <div className="text-gray-300 text-lg leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/5 shadow-inner">
                            <p>{project.problem}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-3">
                            <span className="text-purple-400/80 font-mono">02.</span> Technical Architecture
                        </h2>
                        <div className="text-gray-300 text-lg leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/5 shadow-inner mb-8">
                            <p>{project.architecture}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Tech Stack Utilized</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="font-mono text-sm px-4 py-2 bg-[#0a0a0a] border border-white/10 text-gray-300 rounded-lg hover:border-white/20 hover:text-white transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-3">
                            <span className="text-green-400/80 font-mono">03.</span> Engineering Impact
                        </h2>
                        <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-2xl shadow-lg shadow-green-500/5 hover:border-green-500/40 transition-colors">
                            <p className="text-white text-lg leading-relaxed flex items-start gap-4 font-medium">
                                <CheckCircle className="text-green-400 mt-1 shrink-0" size={24} />
                                {project.impact}
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-32 pt-16 border-t border-white/10 text-center flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Want to review another system?</h3>
                    <Link to="/" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:bg-gray-200 shadow-xl">
                        <ArrowLeft size={20} /> Back to Portfolio Home
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectCaseStudy;
