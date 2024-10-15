import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              id='email'
              placeholder='name@example.com'
              type='email'
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <a className='ml-auto inline-block text-sm underline' href='/forgot-password'>
                Forgot your password?
              </a>
            </div>
            <Input id='password' required type='password' />
          </div>
          <Button disabled={isLoading}>
            {isLoading ? <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' /> : null}
            Login
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <div className='grid w-full grid-cols-3 gap-2'>
        <Button disabled={isLoading} type='button' variant='outline'>
          <Icons.GitHub className='mr-2 h-4 w-4' />
          Github
        </Button>
        <Button disabled={isLoading} type='button' variant='outline'>
          <Icons.Google className='mr-2 h-4 w-4' />
          Google
        </Button>
        <Button disabled={isLoading} type='button' variant='outline'>
          <Icons.Microsoft className='mr-2 h-4 w-4' />
          Microsoft
        </Button>
      </div>
    </div>
  )
}
