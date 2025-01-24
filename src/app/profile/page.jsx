import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const auth = await isAuthenticated();
    const user = await getUser();

    if (!auth) {
        return redirect('/api/auth/login')
    };

    return (
        <div className='text-center pt-8'>
            <h1 className='text-2xl font-bold'>Welcome to your profile!</h1>
            <p className='text-xl font-semibold'>Hello, {user?.family_name}!</p>
        </div>
    );
};

export default page;