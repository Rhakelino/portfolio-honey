import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ProjectDetail = () => {
    const { id } = useParams();

    const project = {
        'branding-design': {
            title: 'Branding Design',
            description: 'Creative branding solution for modern businesses',
            fullDescription: 'Comprehensive branding solution that includes logo design, color palette, typography, and brand guidelines. Created to help businesses establish a strong and consistent visual identity across all platforms.',
            image: '/images/branding-design.jpg',
            technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
            deliverables: [
                'Logo Design',
                'Brand Guidelines',
                'Business Cards',
                'Social Media Templates'
            ]
        },
        'social-media': {
            title: 'Social Media Design',
            description: 'Engaging social media graphics',
            fullDescription: 'A collection of social media designs created to boost engagement and maintain brand consistency across different platforms. Each design is optimized for the specific platform requirements.',
            image: '/images/social-media.jpg',
            technologies: ['Adobe Photoshop', 'Canva', 'Figma'],
            deliverables: [
                'Instagram Posts',
                'Facebook Covers',
                'Twitter Headers',
                'Social Media Strategy Guide'
            ]
        },
        'video-editing': {
            title: 'Video Editing',
            description: 'Cinematic video production',
            fullDescription: 'Professional video editing services that transform raw footage into compelling stories. Specializing in color grading, motion graphics, and sound design to create engaging video content.',
            image: '/images/video-editing.jpg',
            technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
            deliverables: [
                'Full Video Production',
                'Color Grading',
                'Motion Graphics',
                'Sound Design',
                'Video Optimization'
            ]
        },
        'ui-ux': {
            title: 'UI/UX Design',
            description: 'Intuitive user interface designs',
            fullDescription: 'Creating user-centered digital experiences through careful research, wireframing, and prototyping. Focus on usability, accessibility, and beautiful interface design that drives user engagement.',
            image: '/images/ui-ux.jpg',
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
            deliverables: [
                'User Research',
                'Wireframes',
                'UI Design',
                'Interactive Prototypes',
                'Design System'
            ]
        },
        'photo-editing': {
            title: 'Photo Editing',
            description: 'Professional photo enhancement',
            fullDescription: 'Expert photo editing services including color correction, retouching, and creative manipulation. Transforming ordinary photos into extraordinary visual experiences while maintaining natural aesthetics.',
            image: '/images/photo-editing.jpg',
            technologies: ['Adobe Photoshop', 'Lightroom', 'Capture One'],
            deliverables: [
                'Color Correction',
                'Portrait Retouching',
                'Background Removal',
                'Photo Manipulation',
                'Batch Processing'
            ]
        }
    }[id];

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="bg-[#141617] min-h-screen text-white">
            <main className="pt-28 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
                        />

                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <p className="text-gray-400 text-lg mb-8">{project.fullDescription}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                                <ul className="space-y-2">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className="text-gray-400">• {tech}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
                                <ul className="space-y-2">
                                    {project.deliverables.map((item, index) => (
                                        <li key={index} className="text-gray-400">• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;
