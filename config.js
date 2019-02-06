const project = 'test';

const configs = {
  test: {
    name: project,
    title: project,
    // path: ['//talesofgalaxy.fr', 'test_js'],
    path: [],
    publicPath: 'http://talesofgalaxy.fr/test_js/',
    entry: [
      './src/index.js'
    ],
    txtName: '',
    template: './src/index.ejs'
  },
};

export default function () {
  if (configs && configs[project]) {
    return configs[project];
  }

  console.log(`No config under the project "${project}"`);
  return undefined;
}
