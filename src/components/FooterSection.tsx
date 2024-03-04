import React from 'react'

function FooterSection() {
    return (
        <footer className='bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Master the Art of Web Development is an educational website dedicated to students who want to excel
                        their future in Full Stack Web Development. I understand its hard for a fresher to get a overview of
                        all the technologies so that he/she can choose a path for him/her. Hope it helps.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Github</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Chandigarh, India</p>
                    <p>himanshuoliofficial@gmail.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Master the Art of Web Development. All rights reserved.</p>
        </footer>
    )
}

export default FooterSection
