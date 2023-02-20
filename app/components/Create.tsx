'use client'

import { useEffect, useState } from 'react'
import Image from "next/image";
import pictureIcon from '../../public/picture-icon.svg'
import { NextComponentType } from 'next';

const Create: NextComponentType = () => {
  const [img, setImg] = useState<string>('')
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer>()
  const [uploadData, setUploadData] = useState()
  const [loading, setLoading] = useState(false)

  const handleImgChange = (e) => {
    const reader = new FileReader()

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
      console.log(onLoadEvent.target.result)
    }

    reader.readAsDataURL(e.target.files[0])

    console.log(e.target.files)
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const fileInput = Array.from(form.elements).find(({name}) => name === 'file')
    
    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    formData.append('upload_preset', 'quqoxtqf')

    const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())


      setImageSrc(data.sercure_url)
      setUploadData(data)
      console.log(data)

      setLoading(false)
  }

  const handleClearImg = () => {
    setImageSrc('')
    setUploadData(null)
  }

  const handleSubmit = (e) => {
    handleUpload(e)
    
  }

  return (
    <>
      <div className='grid justify-center grid-rows-3 p-4'>
        <div className='flex flex-row'>
          <textarea
            className='p-3 m-5 w-[80vw] rounded-md bg-slate-700 text-slate-100 text-lg'
            placeholder='Say something...'
          />
        </div>
        <div className='flex justify-center pb-4 align-middle'>
          {imageSrc && !loading &&
              <div className='relative flex-row'>
                <Image width={1} height={1} src={imageSrc} alt={'user image'} className='w-auto h-auto' />
                <button
                  className='absolute top-0 right-0 z-10 w-10 h-10 p-1 text-center text-white transition-all shadow-lg hover:bg-slate-600 rounded-3xl'
                  onClick={() => handleClearImg()}
                >
                  X
                </button>
              </div>
          }
        </div>
        {/* pic icon and post btn */}
        <div className='flex flex-col justify-between align-middle'>
          <form className='flex flex-row justify-between align-middle' onChange={e => handleImgChange(e)} /*onSubmit={e => handleSubmit(e)}*/>
            <label className='p-2 transition-all rounded-full cursor-pointer hover:bg-slate-500' htmlFor='fileInput'>
              <Image alt='attachment icon' src={pictureIcon} width={20} height={20} />
            </label>
            <input className='h-[.1px] w-[.1px] absolute appearance-none opacity-0' id='fileInput' type='file' name='file' accept='.jpeg, .jpg, .png' />
            {/* <input className='absolute' id='fileInput' type='file' /> */}
            <button type='submit' className='h-[35px] w-1/3 rounded-xl shadow-md bg-gray-900 text-slate-300 '>Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create