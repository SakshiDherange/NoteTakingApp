import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote, editNote } from '../action'
import { useNavigate } from 'react-router-dom';

export default function AllNotes() {
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // State variables for editing a note
  const [editNoteIndex, setEditNoteIndex] = useState(null)
  const [editNoteTitle, setEditNoteTitle] = useState('')
  const [editNoteContent, setEditNoteContent] = useState('')

  // Event handler for updating a note
  const handleEditNote = () => {
    dispatch(editNote(editNoteIndex, editNoteTitle, editNoteContent))
    setEditNoteIndex(null)
    setEditNoteTitle('')
    setEditNoteContent('')
  }

  return (
    <div className='allnotes'>
      <button className='home' onClick={() => navigate('/')} class="button-86" role="button">Home</button>
      <div>
        {notes.map((note, index) => {
          return (
            <div className="card" class="w-75 p-3" style={{ margin: '2rem' }} key={index}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <a href="#" className="btn btn-danger" onClick={() => dispatch(removeNote(index))}>Delete</a>
                <a href="#" className="btn btn-primary m-2" onClick={() => {
                  setEditNoteIndex(index)
                  setEditNoteTitle(note.title)
                  setEditNoteContent(note.content)
                }}>Update</a>
              </div>
            </div>
          )
        })}
      </div>
      {/* Modal or form for editing a note */}
      {editNoteIndex !== null &&
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditNoteIndex(null)}></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="editNoteTitle">Title</label>
                  <input type="text" className="form-control" id="editNoteTitle" value={editNoteTitle} onChange={(e) => setEditNoteTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="editNoteContent">Content</label>
                  <textarea className="form-control" id="editNoteContent" rows="3" value={editNoteContent} onChange={(e) => setEditNoteContent(e.target.value)}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setEditNoteIndex(null)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleEditNote}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
