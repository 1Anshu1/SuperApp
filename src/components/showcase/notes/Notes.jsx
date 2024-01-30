import React, { useEffect, useState } from 'react'
import './style.css'

const Notes = () => {
    const [notes, setNotes] = useState()

    const handleChange = (e) => {
        setNotes(e.target.value)
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')))
    }, [])
    return (
        <div>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={notes}
                defaultValue='All Notes'
                onChange={handleChange}>

            </textarea>
        </div >
    )
}

export default Notes
