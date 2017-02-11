class API extends ExtensionAPI {
  getAPI(context) {
    return {
      // Insert Experiment API here.
      // Note: the namespace (boilerplate must match the id in the install.rdf)
      boilerplate: {
        async hello() {
          return "Hello, world!";
        }
      }
    };
  }
}
