import React, { createContext, useState } from 'react';

const NotesContext = createContext({});

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const getNotes = async (search) => {
        let URI = 'https://convin-ai.onrender.com/api/notes/getallnotes';
        if (search) {
            URI = `https://convin-ai.onrender.com/api/notes/search/${search}`;
        }
        try {
            const response = await fetch(URI, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': sessionStorage.getItem('auth-token'),
                },
            });

            if (!response.ok) throw Error(response.json());

            const notes = await response.json();
            setNotes(notes);
        } catch (error) {
            console.log('getNotes error: ', error);
        }
    };

    const getNote = async (note) => {
        const response = await fetch(
            `https://convin-ai.onrender.com/api/notes/getnote/${note._id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': sessionStorage.getItem('auth-token'),
                },
            }
        );

        return await response.json();
    };

    const addNewNote = async (note) => {
        const result = await fetch(`https://convin-ai.onrender.com/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('auth-token'),
            },
            body: JSON.stringify(note),
        });

        return await result.json();
    };

    const updateExistingNote = async (note) => {
        const response = await fetch(
            `https://convin-ai.onrender.com/api/notes/updatenote/${note._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': sessionStorage.getItem('auth-token'),
                },
                body: JSON.stringify({
                    title: note.title,
                    email: note.email,
                    description: note.description,
                    youtubeUrl: note.youtubeUrl,
                }),
            }
        );

        return await response.json();
    };

    const deleteNote = async (note) => {
        const response = await fetch(
            `https://convin-ai.onrender.com/api/notes/deletenote/${note._id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': sessionStorage.getItem('auth-token'),
                },
            }
        );

        return await response.json();
    };


    return (
        <>
            <NotesContext.Provider
                value={{
                    notes,
                    getNotes,
                    getNote,
                    addNewNote,
                    updateExistingNote,
                    deleteNote,
                }}
            >
                {children}
            </NotesContext.Provider>
        </>
    );
};

export default NotesContext;
