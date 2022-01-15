const yargs = require('yargs')

//current version yargs
yargs.version('1.1.0');

//create add command
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOptions:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Title : ',argv.title);
    }
})

// remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Remove a note');
    }
})

//edit command
yargs.command({
    command:'edit',
    describe:'Edit a note',
    handler:function(){
        console.log('Edit a note');
    }
})

//update command
yargs.command({
    command:'update',
    describe:'update a command',
    handler:function(){
        console.log('Update a command');
    }
})

//
yargs.parse()