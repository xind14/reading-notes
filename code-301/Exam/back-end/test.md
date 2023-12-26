data.jsx

'use strict';

const DataModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req, res, next) => {
  try {
    // // hardcoded test data
    // const newdata = {
    //   name: 'Chris',
    //   description: 'software engineer'
    // };
    // const newItem = new DataModel(newdata);
    // console.log('newdata, newitem', newdata, newItem);

    const data = req.body;
    const item = new DataModel(data);
    await item.save(); // saving the item allowed 4 other tests to pass
    res.status(200).json(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const items = await DataModel.find({}); // this line is correct from the docs, finds all documents
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.params.id; // added params
  const items = await DataModel.find({ _id:id });
  res.status(200).json(items[0]);
}

Data.deleteOneItem = async(req, res) => {
  const id = req.params.id;
  await DataModel.deleteOne({_id:id});
  res.status(200).send(`Deleted item with id ${id}`);
}

Data.updateOneItem = async(req, res) => {
  const id = req.params.id; //changed to params
  const data = req.body;
  const item = await DataModel.findByIdAndUpdate(id, data, {new:true, useFindAndModify:false});
  res.status(200).json(item);
}

module.exports = Data;


item-model.js
'use strict';

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  notes: { type: String},
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;



server.js
'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors()); // added cors so front end can talk to backend

const Data = require('./data.js');

app.use(express.json()); // added 'use express json'

app.use(express.urlencoded({extended:true}));

app.get('/items', Data.getAllItems);
app.get('/items/:id', Data.getOneItem); //added Data
app.delete('/items/:id', Data.deleteOneItem);
app.post('/items', Data.addAnItem);
app.put('/items/:id', Data.updateOneItem); // created a new put route

app.use('*', (req,res) => {
  res.status(404).send('These are not the droids you are looking for.');
});

app.use( (error,req,res,next) => {
  res.status(500).send(`My Bad ... ${error.message}`);
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};










server.test.js

'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../server.js');

const client = supergoose(app.server);

describe('The Server', () => {

  async function createRecord() {

    const data = {
      name: 'foo',
      description: 'bar',
    };

    const response = await client.post('/items').send(data);

    expect(response.status).toEqual(200);

    return response.body;
  }

  it('can create a record', async () => {

    const record = await createRecord();
    expect(record._id).not.toBeNull();
    expect(record.name).not.toBeNull();
    expect(record.description).not.toBeNull();

  });

  it('can get a single record', async () => {

    const record = await createRecord();

    const id = record._id;
    const response = await client.get(`/items/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body._id).toEqual(id);
    expect(response.body.name).toEqual(record.name);
    expect(response.body.description).toEqual(record.description);
  });

  it('can update a record', async () => {

    const record = await createRecord();
    const id = record._id;

    const newValues = {
      name: 'newName',
    };

    const response = await client.put(`/items/${id}`).send(newValues);
    expect(response.status).toEqual(200);
    expect(response.body._id).toEqual(id);
    expect(response.body.name).toEqual(newValues.name);
    expect(response.body.description).toEqual(record.description);
  });

  it('can delete a record', async () => {

    const record = await createRecord();
    const id = record._id;

    const response = await client.delete(`/items/${id}`);
    expect(response.status).toEqual(200);

    const getResponse = await client.get(`/items/${id}`);
    expect(getResponse.body._id).toBeUndefined();
  });

  it('can get all records', async () => {

    for (let i = 1; i <= 5; i++) {
      await createRecord();
    }

    const response = await client.get(`/items`);
    const items = response.body;

    expect(response.status).toEqual(200);
    expect(items.length).toBeGreaterThan(1);
  });

  it('properly sends a 404 on an unknown route', async () => {
    const response = await client.get('/nothing');
    expect(response.status).toBe(404);
  });

  it('properly sends a 500 when an error occurs', async () => {
    const data = {};
    const response = await client.post('/items').send(data);
    expect(response.status).toBe(500);
  });

});









test.app.yml

name: Run Express Tests

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm i
        npm test
      env:
        CI: true

  index.js
  'use strict';

// This page is needed for testing. Please don't touch it.
// MongoMemoryServer is just like Mongo but it is in memory so you don't have to install anything and it therefore won't cause any issues when you deploy
// You use it the exact same way you would use MongoDB


const { default: MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

require('dotenv').config();

const server = require('./src/server.js');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
};

const mongoServer = new MongoMemoryServer();

mongoServer.getUri()
  .then((connString) => mongoose.connect(connString, mongooseOptions) )
  .then( () => server.start(process.env.PORT) );








gitignore

# 401 JS
db
.env
temp
build

# Created by https://www.gitignore.io/api/vim,osx,node,linux,windows
### Linux ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Typescript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file


### OSX ###
*.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### Vim ###
# swap
[._]*.s[a-v][a-z]
[._]*.sw[a-p]
[._]s[a-v][a-z]
[._]sw[a-p]
# session
Session.vim
# temporary
.netrwhist
# auto-generated tag files
tags

### Windows ###
# Windows thumbnail cache files
Thumbs.db
ehthumbs.db
ehthumbs_vista.db

# Folder config file
Desktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msm
*.msp

# Windows shortcuts
*.lnk

# End of https://www.gitignore.io/api/vim,osx,node,linux,windows









package.json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@code-fellows/supergoose": "^1.0.11",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jest": "^26.6.3",
    "mongodb-memory-server": "^6.9.6",
    "mongoose": "^5.12.2"
  }
}






jest.config.js

module.exports = {
  testEnvironment: 'node',
};
