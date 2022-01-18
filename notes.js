const fs = require('fs')

const yargs = require('yargs')

const getNotes = () =>{
    return '....'
}


//add Note
const addNote = (title,body) =>{
   const notes = loadNotes()

   const duplicate = notes.find((i)=>i.title===title)
   if(!duplicate){
       notes.push({
           title:title,
           body:body
       })
       saveNote(notes)
   } else {
       console.log('Already Added');
   }
}

//remove note
const removeNote = (title) =>{
    const notes = loadNotes()
    const newNotes = notes.filter((i)=>i.title !== title)
    saveNote(newNotes)
}

//list note
const listNotes = () =>{
    const notes = loadNotes()

    notes.forEach((note)=>{
        console.log("Title : ",note.title);
        console.log("Body : ",note.body);
    })
}

//read a note
const readNote = (title) =>{
    const notes = loadNotes() ;
    //here if I use filter , it will return undefined
    const note = notes.find((i)=>i.title===title)
    if(note){
        console.log('Title : ',note.title);
        console.log('Body : ',note.body);
    } else {
        console.log('No Note Found');
    }
}

//update a note 
const updateNote = (title,body) =>{
    const notes = loadNotes();

    const note = notes.find((i)=>i.title===title)

    if(note){
        let objecIndex = notes.findIndex((i)=>i.title===title)
        notes[objecIndex].body=body

        saveNote(notes)
    } else{
        console.log('No Not Found');
    }
}

const saveNote = (notes) =>{
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const loadNotes = () =>{
    try{
        const buffer = fs.readFileSync('notes.json')
        const dataJSON = buffer.toString()
        return JSON.parse(dataJSON);
    } catch{
        return []
    }
}

module.exports={
    getNotes:getNotes,
    loadNotes:loadNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote: readNote,
    updateNote:updateNote
}

yargs.parse()