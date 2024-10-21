import type { FC } from 'react'
import LOGO from '@/assets/logo.png'
import { LoginForm } from '@/components/login-form'

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div className='container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <h1>
          <a className='relative z-20 flex items-center text-lg font-medium' href='/login'>
            <img alt='logo.png' className='mr-2 h-6 w-6' src={LOGO} />
            Arcade
          </a>
        </h1>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>&ldquo;A modern CI/CD platform.&rdquo;</p>
            <footer className='text-sm'>Arcade Team</footer>
          </blockquote>
        </div>
      </div>
      <div className='p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-sm text-muted-foreground'>Enter your email below to login to your account</p>
          </div>
          <LoginForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our
            <a className='underline underline-offset-4 hover:text-primary mx-1' href='/terms'>
              Terms of Service
            </a>
            and
            <a className='underline underline-offset-4 hover:text-primary ml-1' href='/privacy'>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
