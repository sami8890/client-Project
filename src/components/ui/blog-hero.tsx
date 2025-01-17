import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold mb-4"
                >
                    Welcome to Our Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl"
                >
                    Discover insightful articles, tips, and stories
                </motion.p>
            </div>
        </div>
    );
}

