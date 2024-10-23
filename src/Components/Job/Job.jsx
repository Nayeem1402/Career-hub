 const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='border-2 p-10 rounded-2xl max-w-full'>
            <div className='w-32 h-10 '> <img className='' src={logo} alt="" /></div>
            <h3 className='font-extrabold text-2xl mt-2'>{job_title}</h3>
            <h4 className='font-semibold text-xl text-[#757575] mt-2'>{company_name}</h4>
            <div >
                <button className='border-[#9873FF] border-2 px-4 rounded py-1 mr-3 mt-4'>{remote_or_onsite}</button>
                <button className='border-[#9873FF] border-2 px-4 rounded py-1'>{job_type}</button>
            </div>
            <div className='mt-3 flex gap-2'>
                <div className='flex gap-2'> <img className='w-6' src="https://img.icons8.com/?size=100&id=15989&format=png&color=000000" alt="" /><p>{location}</p></div>
                <div  className='flex gap-2'>
                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=QHui8fGzf5rs&format=png&color=000000" alt="" /><p>{salary}</p>
                </div>
            </div>
            <button className='btn text-xl text-white bg-[#7E90FE] mt-4'>View Details</button>
        </div>
    );
};

export default Job;