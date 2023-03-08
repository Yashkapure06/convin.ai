import React, { useContext, useEffect, useState } from 'react'
import './Notes.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Switch from 'react-js-switch';
// import GlobalContext from '../../context/GlobalContext';
import NotesContext from '../../context/NotesContext';
import { marked } from 'marked';
import RenderInWindow from './RenderInWindow';
import MarkdownNotes from './MarkdownNotes';
import {Helmet} from "react-helmet";
import Sidebar from '../global/Sidebar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';

import { useForm, ValidationError } from '@formspree/react';


const Notes = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [state, handleSubmit] = useForm("xpzepjpa");
    const [isSidebar, setIsSidebar] = useState(true);
    const [addNoteTitle, setAddNoteTitle] = useState('');
    const [addVideoUrl, setAddVideoUrl] = useState('');
    const [addNoteDescription, setAddNoteDescription] = useState('');
    const [updateNoteId, setUpdateNoteId] = useState("");
    const [progress, setProgress] = useState(0);
    // const {theme , setTheme} = useContext(GlobalContext);
    const {
      notes,
      getNotes,
      getNote,
      addNewNote,
      updateExistingNote,
      deleteNote,
    } = useContext(NotesContext);
    const [isAddMarkdownWindowOpen, setIsAddMarkdownWindowOpen] = useState(false);
    const [isEditMarkdownWindowOpen, setIsEditMarkdownWindowOpen] = useState(false);


    const navigate = useNavigate();

    const getAllNotes = async () => {
      setProgress(20);
      await getNotes();
      setProgress(50);
      setProgress(60);
      setProgress(100);
    };

    const getSingleNote = async (id) => {
      const result = await getNote({ _id: id });

      setAddNoteTitle(result.title);
      setAddVideoUrl(result.youtubeUrl)
      setAddNoteDescription(result.description);
    };

    const convertToMonthName = (num) => {
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
        return months[num];
    }

    const openMenu = (noteId) => {
        // const note = document.getElementById(noteId);
        const settingsList = document.getElementById(`settings-${noteId}`);
        settingsList.classList.add("show");

        document.addEventListener("click", e => {
            if(e.target.tagName !== "I") {
                settingsList.classList.remove("show");
            }
        });
    }

    const onDeleteNote = async (id) => {
      if (window.confirm("Are You sure you want to move this note to history?")) {
        const result = await deleteNote({ _id: id });

        toast.success(result.success);
        console.log(result);

        await getAllNotes();
      }
    };

    const openAddNoteModalForNewNote = () => {
        const popupBox = document.getElementById('popup-box');
        popupBox.classList.add('show');

        document.getElementById('modal-title-input').focus();


        setAddNoteDescription('');
        setAddNoteTitle('');
        setAddVideoUrl('');
    }

    const openAddNoteModalForEditNote = async (id) => {
      const popupBox = document.getElementById('popup-box-edit');
      popupBox.classList.add('show');

      document.getElementById('modal-title-input').focus();

      await getSingleNote(id);

      setUpdateNoteId(id);

    }

    const openAddNoteModalForPreviewNote = async (id) => {
      const popupBox = document.getElementById('popup-box-preview');
      popupBox.classList.add('show');

      document.getElementById('modal-title-input').focus();

      await getSingleNote(id);
    }

    const closeAddNoteModal = () => {
        document.getElementById('popup-box').classList.remove('show');
    }
    
    const closeEditNoteModal = () => {
        document.getElementById('popup-box-edit').classList.remove('show');

        setAddNoteDescription('');
        setAddNoteTitle('');
        setAddVideoUrl('');
    }

    const closePreviewNoteModal = () => {
      document.getElementById('popup-box-preview').classList.remove('show');
      setAddNoteTitle('');
      setAddNoteDescription('');
      setAddVideoUrl('');
    }

    const openAddMarkdownWindow = () =>{
      setIsAddMarkdownWindowOpen(true);
    //  closeAddNoteModal();

    }

     const closeAddMarkdownWindow = () =>{
      if(isAddMarkdownWindowOpen){
        setIsAddMarkdownWindowOpen(false);
        closeAddNoteModal();
      }
    }

    const openEditMarkdownWindow = () =>{
      setIsEditMarkdownWindowOpen(true);
   //   closeEditNoteModal();

    }

     const closeEditMarkdownWindow = () =>{
      if(isEditMarkdownWindowOpen){
        setIsEditMarkdownWindowOpen(false);
        closeEditNoteModal();
      }
    }
    
    
    const addANewNote = async (e) => {
      handleSubmit(e);
    
      e.preventDefault();

      
      const note = {
        title: addNoteTitle,
        description: addNoteDescription,
        youtubeUrl: addVideoUrl,
      }
      
      const result = await addNewNote(note);

      
      if (result.title) {
        toast.success("Your Note is added Successfully!");
      }

      closeAddNoteModal();

      setAddNoteTitle("");
      setAddNoteDescription("");
      setAddVideoUrl("");

      await getAllNotes();
    };

    const updateNote = async (e) => {
      e.preventDefault();

      const note = {
        _id: updateNoteId,
        title: addNoteTitle,
        description: addNoteDescription,
        youtubeUrl: addVideoUrl,
      };
      const result = await updateExistingNote(note);

      toast.success(result.success);

      await getAllNotes();
      closeEditNoteModal();
    };

    useEffect(() => {
      if (!sessionStorage.getItem('auth-token') || sessionStorage.getItem('auth-token') === "") {
        navigate('/login', { replace: true });
      }
      else {
        setProgress(10);
        getAllNotes();
      }
    // eslint-disable-next-line
    }, [])
    
    

  
  return (
    <>
    <Helmet>
        <title>Convin | Dashboard</title>
      </Helmet>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Sidebar isSidebar={isSidebar}/>
    <section className="home">

      <div className='head'>
      <div className="text">Dashboard</div>
      
      </div>
      {/* Add note Modal Starts */}
      <div id='popup-box' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Create a New Note</p>
              <i className="fa-brands fa-markdown" onClick={openAddMarkdownWindow}></i>
              <i onClick={closeAddNoteModal} className="fa-solid fa-xmark"></i>
            </header>
            <form onSubmit={addANewNote} id="notes-form" action="#" encType="multipart/form-data">
              <div className="row title">
                {/* <label>Title</label> */}
                <input id='modal-title-input' value={addNoteTitle} onChange={(e) => setAddNoteTitle(e.target.value)} type="text" name="title" spellcheck="false" placeholder='Note Title'/>
                <br/><br/>
                <iframe
                  width="460"
                  height="250"
                  src={addVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <br/><br/>
                <input
                  value={addVideoUrl}
                  onChange={(e) => setAddVideoUrl(e.target.value)}
                  type="text"
                  name="youtubeUrl"
                  spellCheck="false"
                  placeholder="Enter YouTube video URL"
                />
                <br/><br/>
              </div>
              <div className="row description">
                {/* <label>Description</label> */}
                <textarea value={addNoteDescription} onChange={(e) => setAddNoteDescription(e.target.value)} name="description" spellcheck="false" placeholder='Description ...'></textarea>
              </div>
              <button>Add Note</button>
            </form>
            {isAddMarkdownWindowOpen && (
              <RenderInWindow closeMarkdownWindow={closeAddMarkdownWindow}>
                <MarkdownNotes closeMarkdownWindow={closeAddMarkdownWindow} 
                  addNoteTitle={addNoteTitle} setAddNoteTitle={setAddNoteTitle}
                  addNoteDescription={addNoteDescription} setAddNoteDescription={setAddNoteDescription}
                  addVideoUrl={addVideoUrl} setAddVideoUrl={setAddVideoUrl}
                  submitNote={addANewNote}
                />
              </RenderInWindow>
            )}
          </div>
        </div>
      </div>
      {/* Add note Modal Ends */}

      {/* Edit note Modal Starts */}
      <div id='popup-box-edit' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p>Edit Note</p>
              <i className="fa-brands fa-markdown" onClick={openEditMarkdownWindow}></i>
              <i onClick={closeEditNoteModal} className="fa-solid fa-xmark"></i>

            </header>
            <form onSubmit={updateNote} id="notes-form" action="#" encType="multipart/form-data">
              <div className="row title">
                {/* <label>Title</label> */}
                <input value={addNoteTitle} onChange={(e) => setAddNoteTitle(e.target.value)} id='modal-title-input' type="text" name="title" spellCheck="false"/>
                <br/><br/>
                <iframe
                  width="460"
                  height="250"
                  src={addVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <br/><br/>
                <input
                  value={addVideoUrl}
                  onChange={(e)=> setAddVideoUrl(e.target.value)}
                  type="text"
                  name="youtubeUrl"
                  spellCheck="false"
                  placeholder="Enter YouTube video URL"
                />
                <br/><br/>
              </div>
              <div className="row description">
                {/* <label>Description</label> */}
                <textarea value={addNoteDescription} onChange={(e) => setAddNoteDescription(e.target.value)} name="description" spellCheck="false"></textarea>
              </div>
              <button>Update Note</button>
            </form>

            {isEditMarkdownWindowOpen && (
              <RenderInWindow closeMarkdownWindow={closeEditMarkdownWindow}>
                <MarkdownNotes closeMarkdownWindow={closeEditMarkdownWindow} 
                  addNoteTitle={addNoteTitle} setAddNoteTitle={setAddNoteTitle}
                  addNoteDescription={addNoteDescription} setAddNoteDescription={setAddNoteDescription}
                  addVideoUrl={addVideoUrl} setAddVideoUrl={setAddVideoUrl}
                  submitNote={updateNote}
                />
              </RenderInWindow>
            )}
          </div>
        </div>
      </div>
      {/* Edit note Modal Ends */}

       {/* Preview note Modal Starts */}
       <div id='popup-box-preview' className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p></p>
              <i onClick={closePreviewNoteModal} className="fa-solid fa-xmark"></i>

            </header>
            <form id="notes-form" action="#" encType="multipart/form-data">
              <div className="row title">
              <div name="title" className="previewbox previewtitle" dangerouslySetInnerHTML={{ __html: marked(addNoteTitle) }}></div>
              <br/>
              <br/>
              
              <div name="youtubeUrl" className="previewbox previewiframe" dangerouslySetInnerHTML={{ __html: 
                marked(
                `<iframe
                  width="460"
                  height="350"
                  src=${addVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>`)}}></div>
              <br/>
              <br/>
                            
              </div>
              <div className="row description">
              <div name="description" className="previewbox previewdescription" dangerouslySetInnerHTML={{ __html: marked(addNoteDescription) }}></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Preview note Modal Ends */}

      <div>
        <li onClick={openAddNoteModalForNewNote} className="add-box">
          <div className="icon" style={{backgroundColor:'#141b2d'}}><AddCircleOutlineIcon style={{fontSize:'35px'}}/></div>
          <p>Add a Note</p>
        </li>

      <div className="wrapper" >

        {notes.map((note) => {
          const dateStu = note.createdAt;
            return (
                <li id={note._id} key={note._id} className="note" onClick={() => openAddNoteModalForPreviewNote(note._id)}>
                    <div className="details" >


                        <div dangerouslySetInnerHTML={{ __html: `<h1 style="color:black">${note.title}</h1>` }}></div>

                        <div dangerouslySetInnerHTML={{ __html: marked(note.description) }}></div>

                        <div dangerouslySetInnerHTML={{ __html: 
                          marked(
                          `<iframe
                            width="460"
                            height="350"
                            src=${note.youtubeUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>`)}}></div>


                    </div>
                    <div className="bottom-content">
                        <span>{convertToMonthName(new Date(dateStu).getMonth()) + " " + new Date(dateStu).getDate().toString() + ", " + new Date(dateStu).getFullYear()}</span>
                        <div id={`settings-${note._id}`} className="settings" onClick={(e)=> e.stopPropagation()}>
                            <i onClick={() => openMenu(note._id)} className="fa-solid fa-ellipsis"></i>
                            <ul className="menu show">
                                <li onClick={() => openAddNoteModalForEditNote(note._id)}><i className="fa-solid fa-pen"></i>Edit</li>
                                <li onClick={() => onDeleteNote(note._id)}><i className="fa-solid  fa-history"></i>History</li>
                            </ul>
                        </div>
                    </div>
                </li>
            );
        })}
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </section>

    </>
  )
}

export default Notes