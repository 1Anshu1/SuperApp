import { useState } from 'react'
import './style.css'

const Notes = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('superAppNotes')))

    const handleChange = (e) => {
        setNotes(e.target.value)
        localStorage.setItem('superAppNotes', JSON.stringify(e.target.value))
    }

    return (
        <div className='textarea'>
            <div>All Notes</div>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={notes}
                onChange={handleChange}>
            </textarea>
        </div >
    )
}

export default Notes
