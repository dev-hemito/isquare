import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className='mx-auto max-w-7xl py-24'>
            <div className="md:flex   ">
                <div className='md:w-2/3 flex justify-center items-center p-3'>
                    <div>
                        <div className="bg-yellow-400 px-4 text-sm mb-3 text-black py-1 w-fit rounded-full">
                            Meet Our Chief Trainer and Consultant
                        </div>
                        <div className='mb-3'>
                            <h2 className='text-4xl'>Jorely Mathew <span className='text-sm font-light italic'>FCIPD, FCPHR, MBA, CHE, BHM, ACSTH, NLP</span> </h2>
                        </div>
                        <p>
                            With an illustrious career spanning three decades, our chief trainer and consultant brings unparalleled expertise in Human Resources and Training, honed through leadership roles with prestigious international luxury hospitality brands and other organizations.
                        </p><p>
                            Proven track record in driving business growth, developing leaders, and fostering high-performing teams. His expertise is recognized globally, with fellowships from prestigious institutions in the US, UK and Australia.
                        </p>
                    </div>
                </div>
                <div className='md:w-1/3 flex justify-center '>
                    <Image src='/jorely.png' alt='jorely' width={400} height={400} className='h-72 object-contain' />
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <a href='/team'
                    className="inline-block bg-black hover:bg-yellow-500 text-white hover:text-black font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                    View our Professionals
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;