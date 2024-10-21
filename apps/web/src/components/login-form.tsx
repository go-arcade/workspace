import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Apis } from '@/api'
import userStore from '@/store/user'
import authStore from '@/store/auth'

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)

    try {
      const response = await Apis.auth.login({
        username: data.username,
        password: data.password,
      })
      userStore.updateState((state) => {
        state.userinfo = response.userinfo
        state.role = response.role
      })
      authStore.setTokens(response.token)
      navigate('/')
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='username'>Username</Label>
            <Input
              {...register('username', { required: true })}
              autoCapitalize='none'
              autoComplete='username'
              autoCorrect='off'
              disabled={isLoading}
              id='username'
              placeholder='Enter your username'
              type='username'
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <a className='ml-auto inline-block text-sm underline' href='/forgot-password'>
                Forgot your password?
              </a>
            </div>
            <Input
              {...register('password', { required: true })}
              autoComplete='current-password'
              disabled={isLoading}
              id='password'
              placeholder='Enter your password'
              type='password'
            />
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
