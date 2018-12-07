'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the gnarly ${chalk.red(`
          generator-element-lite-starter-kit
        `)} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to start?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      if (!props.confirm) {
        throw new Error('Stop');
      }
    });
  }

  writing () {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationPath('./')
    );

    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    );

    this.fs.copy(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('src/**'),
      this.destinationPath('./src')
    );

    this.fs.copy(
      this.templatePath('configs/**'),
      this.destinationPath('./configs')
    );

    this.fs.copy(
      this.templatePath('utils/**'),
      this.destinationPath('./utils')
    );

    this.fs.copy(
      this.templatePath('typings-project/**'),
      this.destinationPath('./typings-project')
    );
  }

  install () {
    this.npmInstall();
  }
};
