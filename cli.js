#!/usr/bin/env node

'use strict';

const yeoman = require('yeoman-environment');
const generator = require('./generator');

const env = yeoman.createEnv();
env.registerStub(generator, 'shake.sass:init');
env.run('shake.sass:init');
