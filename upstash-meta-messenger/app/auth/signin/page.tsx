import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className='flex flex-col justify-center items-center'>
      <Image
        className='rounded-full mx-2 object-cover'
        width={700}
        height={700}
        src='https://links.papareact.com/161'
        alt='Profile Picture'
      />
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;