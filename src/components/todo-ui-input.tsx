import { IconPlus } from '@tabler/icons-react'
import { FormEvent, useEffect, useState } from 'react'

export function TodoUiInput({ add }: { add: (title: string) => void }) {
  const [title, setTitle] = useState('')
  const [isValid, setIsValid] = useState(true)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (title) {
      add(title)
      setTitle('')
    }
  }

  useEffect(() => {
    if (title) {
      setIsValid(title.trim().length > 0)
    }
  }, [title])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          disabled={!isValid}
        />
        <button className="btn btn-outline-primary" type="submit" disabled={!isValid}>
          <IconPlus />
        </button>
      </div>
    </form>
  )
}
