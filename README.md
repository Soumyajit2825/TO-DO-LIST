# TO-DO-LIST
A simple to-do-list webpage

## Contribution

* Do your work 
* After your work kindly add a screen shot of that
* Then do a Pull Request
* We will merge if we find it helpful
## How to Contribute

- Take a look at the Existing [Issues] or create your own!
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this is all about.

## How to make a Pull Request

**1.** Fork the repository by clicking on the Fork symbol at the top right corner.

**2.** Clone the forked repository.
```
   git clone https://github.com/YOUR_USERNAME/TO-DO-LIST.git
```

**3.** Navigate to the project directory.
```
   cd TO-DO-LIST
```

**4.** Create a new branch:
```
   git checkout -b YourBranchName
```

**5.** Make changes in source code.

**6.** Add your details to `contributors.json` file in the below format:
```
{
    "github-username": "YOUR-GITHUB-USERNAME",
    "favourite-emoji": "YOUR-FAVOURITE-EMOJI",
    "favourite-color": "YOUR-FAVOURITE-COLOR"
}
```

**7.** Stage your changes and commit

```
   git add .
   git commit -m "<your_commit_message>"
```

**8.** Push your local commits to the remote repo.

```
   git push origin YourBranchName
```

**9.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

**Note** If anyone contributes to this repository, then the changes will not be reflected in your local repository. For that:

**10.** Setup a reference(remote) to the original repository to get all the changes from the remote.
```
   git remote add upstream https://github.com/Soumyajit2825/TO-DO-LIST.git
```

**11.** Check the remotes for this repository.
```
   git remote -v
```

**12.** Fetching from the remote repository will bring in its branches and their respective commits.
```
   git fetch upstream
```

**13.** Make sure that you're on your master branch.
```
   git checkout master
```

**14.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.
```
   git merge upstream/master
```

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide](https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733). Any linting errors should be shown when running `npm test`.
- Write and update tests.
- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocking you from working further.
## Contributors ✨

Thanks goes to these wonderful people 💜
<table>
  <tr>
    <td align="center"><a href="https://github.com/Soumyajit2825"><img src="https://avatars.githubusercontent.com/u/100519291?v=4" width="100px;" alt=""/><br /><sub><b>Soumyajit Mondal</b></sub></a><br /><a href="#maintenance-Tlazypanda" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/pnkjxmwl"><img src="https://avatars.githubusercontent.com/u/81282394?v=4" width="100px;" alt=""/><br /><sub><b>Pankaj Semwal</b></sub></a><br /><a title="Code">💻 📖</a></td>
    <td align="center"><a href="https://github.com/vilasrhegde"><img src="https://avatars.githubusercontent.com/u/85540091?v=4" width="100px;" alt=""/><br /><sub><b>Vilas Hegde</b></sub></a><br /><a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Urmilasc"><img src="https://avatars.githubusercontent.com/u/97338915?v=4" width="100px;" alt=""/><br /><sub><b>Urmila Choudhary</b></sub></a><br /> <a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Chaitanya-087"><img src="https://avatars.githubusercontent.com/u/76115770?v=4" width="100px;" alt=""/><br /><sub><b>Jonnadula Chaitanya</b></sub></a><br /><a  title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/w3ssfs"><img src="https://avatars.githubusercontent.com/u/85897421?v=4" width="100px;" alt=""/><br /><sub><b>Wesley</b></sub></a><br /><a title="Code">💻</a></td>
  </tr>
  </table>

## Resources 

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
