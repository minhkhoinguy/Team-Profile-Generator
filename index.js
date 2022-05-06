const Employee = require('./Develop/lib/Employee');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const Manager = require('./Develop/lib/Manager');
const team = require('./Develop/util/generateHtml');
const fs = require('fs');
const inquirer = require('inquirer');
const newTeam = []


const ask = () => {
    inquirer.prompt([{
            type: 'list',
            choices: ['add manager', 'add engineer', 'add intern', 'genMyHTML', 'quit'],
            name: 'selection',
            message: 'what do you like to do'
        }])
        .then(ans => {
            switch (ans.selection) {
                case 'add manager':
                    manager()
                    break;
                case 'add engineer':
                    engineer()
                    break;
                case 'add intern':
                    intern()
                    break;

                case 'genMyHTML':

                    console.log(newTeam)
                    console.log('New team successfully created')
                    addHtml()

                    break;
                default:
                    console.log('New team successfully created')
                    break;
            }
        })
}



const intern = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your intern name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is your intern id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your intern email?'
        }, {
            type: 'input',
            name: 'school',
            message: 'What is your intern school?'
        }])
        .then(ans => {
            const newIntern = new Intern(ans.name, ans.id, ans.email, ans.school)
            newTeam.push(newIntern);
            ask()
        })
}



const engineer = () => {
    inquirer.prompt([{

            type: 'input',
            name: 'name',
            message: 'What is your engineer name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is your engineer id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your engineer email?'
        }, {
            type: 'input',
            name: 'gitHubUserName',
            message: 'What is your engineer github user name?'
        }])
        .then(ans => {
            const newEngineer = new Engineer(ans.name, ans.id, ans.email, ans.gitHubUserName)
            newTeam.push(newEngineer);
            
            ask()
        })
}


const manager = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your manager name?'
        }, {
            type: 'number',
            name: 'id',
            message: 'What is your manager id?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your manager email?'
        }, {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your manager office number?'
        }])
        .then(ans => {
            const newManager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
            newTeam.push(newManager);
            ask()
        })
}

const addHtml = () => {
const gen = team(newTeam)
    fs.writeFile('index.html',gen,(err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Success!')
        }
    })

}

ask()