import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import {login} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {Button, Input, Logo} from './index'
import {useForm} from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const create = async(data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData) {
                const userData = await authService.getCurrentUser()
                if(userData) {
                    dispatch(login(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    } 
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%' />
            </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Create an account</h2>
            <p className='text-center text-gray-500'>
                Already have an account?&nbsp;
                <Link to='/login' className='text-blue-500 font-medium text-primary transition-all duration-200 hover:underline'>
                    Sign in
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(create)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                        label='Full Name: '
                        type='text'
                        placeholder='Enter your name'
                        {...register('name', {required: true})}
                    />
                    <Input
                        label='Email: '
                        type='email'
                        placeholder='Enter your email'
                        {...register('email', {required: true,
                            validate: {
                                matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Email address must be a valid email address'
                            }
                        })}
                    />
                    <Input
                        label='Password: '
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', {required: true})}
                    />
                    <Button type='submit' className='w-full'>
                    Create Account
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp