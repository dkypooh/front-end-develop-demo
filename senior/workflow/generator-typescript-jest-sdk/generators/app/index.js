/* eslint-disable */
'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');


module.exports = class extends Generator {
  initializing() {
    try {
      this.username = process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2]
    } catch (e) {
      this.username = ''
    }
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the rad ${chalk.red('generator-typescript-jest-sdk')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        validate: name => {
          if (!name) {
            return 'Project name cannot be empty'
          }
          if (!/\w+/.test(name)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .'
          }

          const fs = require('fs')
          if (!fs.existsSync(this.destinationPath(name))) {
            return true;
          }
          if (fs.statSync(this.destinationPath(name)).isDirectory()) {
            return 'Project already exist'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: ''
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Your project keywords',
        default: ''
      },
      {
        type: 'input',
        name: 'username',
        message: 'Your name',
        default: this.username
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Which registry would you use?',
        choices: [
          'https://registry.npm.taobao.org',
          'https://registry.npmjs.org'
        ]
      }
    ];

    return this.prompt(prompts).then(answers => {
      // To access props later use this.props.someAnswer;
      const keywords = answers.keywords;
      this.answers = answers;
      this.obj = {answers: this.answers};

    });
  }

  configuring(answers) {

    const done = this.async()
    fs.exists(this.destinationPath(this.answers.name), exists => {
      if (exists && fs.statSync(this.destinationPath(this.answers.name)).isDirectory()) {
        this.log.error('Directory [' + this.answers.name + '] exists')
        process.exit(1)
      }
      this.destinationRoot(path.join(this.destinationRoot(), this.answers.name))
      done()
    })
  }


  writing() {


    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), this.obj, {
        interpolate: /<%=([\s\S]+?)%>/g
    });
    this.fs.copyTpl(this.templatePath('test'), this.destinationPath('test'));

    this.fs.copyTpl(this.templatePath('./src/index.ts'), this.destinationPath('./src/index.ts'), this.obj);
    this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'))
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'))

    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'))
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'))

    this.fs.copyTpl(this.templatePath('package.json_vm'), this.destinationPath('package.json'), this.obj)
    this.fs.copyTpl(this.templatePath('jest.config.js'), this.destinationPath('jest.config.js'))
    this.fs.copyTpl(this.templatePath('readme.md'), this.destinationPath('readme.md'), this.obj)

  }

  install() {
    this.npmInstall(undefined, {
      registry: this.answers.registry
    })
  }

  end() {
    this.log.ok('Project ' + this.answers.name + ' generated!!!')
    this.spawnCommand('npm', ['run', 'test'])
  }
};
