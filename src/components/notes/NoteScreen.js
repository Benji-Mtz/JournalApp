import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea 
                    className="notes__textarea"
                    placeholder="what happened today"
                >

                </textarea>
                <div className="notes__image">
                    {<img 
                        src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="imagen"
                    />}
                </div>
            </div>
        </div>
    )
}
