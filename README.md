This is a boilerplate extension for experiments. It *is not* designed to work out of the box. It *is* designed to be:
* something you can clone from this repository
* alter some key values
* create a simple experiment that you can use elsewhere

To use (on Linux or OS X):

```
git clone https://github.com/web-ext-experiments/boilerplate-experiment
cd boilerplate-experiment
rm -r .git
```

This will clone the repository and remove the .git configuration so that you can use your own source control.

Next steps, the order is not important:
* `api.js` is where the code for your API is added.
* `schema.json` describes how methods are going to be used. 
* `install.rdf` is the registration of your experiment. The only thing you really need to change here is the `id`.
* `LICENSE` choose a license of your liking.
* `README.md` describe your API and tell us how to use it.

To do:
* testing