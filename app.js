const yargs = require('yargs')
const notes = require('./notes')

//add command
yargs.command({
    command:'add',
    describe:'Add a Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,  //to make body required
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true, //to make body required
            type:'string'
        }
    },
    handler:function(argv){
        // console.log(argv.title);
        notes.addNote(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'Remove Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})

//list note
yargs.command({
    command:'list',
    describe:'List Note',
    handler:function(argv){
        notes.listNotes()
    }
})

//read note
yargs.command({
    command:'read',
    describe:'Read Note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNote(argv.title)
    }
})


yargs.command({
    command:'update',
    describe:'Update Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.updateNote(argv.title,argv.body)
    }
})

yargs.parse()