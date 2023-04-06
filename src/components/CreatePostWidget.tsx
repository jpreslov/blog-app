import { NextApiResponse } from "next"
import { FormEvent } from "react"

const CreatePostWidget = ({
  user,
  textInput,
  setTextInput
}: {
  user: any,
  textInput: any,
  setTextInput: any
}) => {

  const handleSubmit = async (e: FormEvent) => {
    if (user && user.id !== null) {
      if (textInput && textInput !== '') {
        const res = await fetch('/api/createPost', {
          method: 'POST',
          body: JSON.stringify({
            createdAt: new Date(Date.now()),
            content: textInput,
            userId: user.id
          })
        })

        const data: NextApiResponse = await res.json()
        data ? data : false
      }
    }
  }

  return (
    <div className='flex justify-center p-3 mt-5 text-lg font-normal h-96 text-cyan-50 rounded-xl'>
      <form className='flex flex-col w-96' onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <textarea
          className='p-2 bg-gray-900 border-2 border-opacity-25 rounded-md rounded-b-none resize-none text-cyan-50 border-sky-100'
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.target.value)}
        />
        <button
          className='py-2 bg-gray-900 border-2 border-opacity-25 rounded-t-none shadow-inner border-t-none border-sky-100 rounded-xl place-self-center w-96'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreatePostWidget