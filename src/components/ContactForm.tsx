import React from 'react'
import Button from './Button'
import { ButtonOptions } from '@/models/enums'

const ContactForm = () => {
  return (
    <form className='mt-20 flex flex-col space-y-2 max-w-xs'>
        <legend className='text-center'>Contact Form</legend>
        <label className='ml-4' id='name'>
            Name: 
            <input 
                id='name'
                name='name'
                type='text'
                className='ml-4 border border-solid rounded'
            />
        </label>
        <label className='ml-4' id='mail'>
            Mail: 
            <input 
                id='mail'
                name='mail'
                type='text'
                className='ml-4 border border-solid rounded'
            />
        </label>
        <label className='ml-4' id='message'>
            Message:
        </label>
        <textarea 
            id='message'
            rows={5}
            name='message'
            className='mx-4 border border-solid rounded'
        />
        <Button title={ButtonOptions.SEND} type='submit'/>
    </form>
  )
}

export default ContactForm